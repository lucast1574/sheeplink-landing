import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  renderPage,
  PUBLIC_PAGES,
  SITE_URL,
  APP_URL,
  SOCIAL_IMAGE,
  structuredData,
} from "../.prerender/prerender.js";
const template = await fs.readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const localized = spawnSync(
  process.execPath,
  ["scripts/prerender-locales.mjs"],
  { stdio: "inherit" },
);
if (localized.status !== 0) process.exit(localized.status ?? 1);
for (const page of PUBLIC_PAGES) {
  let html = template.replace(
    /<title>.*?<\/title>/,
    `<title>${escape(page.title)}</title>`,
  );
  const values = {
    'name="description"': page.description,
    'property="og:title"': page.title,
    'property="og:description"': page.description,
    'property="og:url"': SITE_URL + page.path,
    'name="twitter:title"': page.title,
    'name="twitter:description"': page.description,
  };
  for (const [attribute, value] of Object.entries(values))
    html = html.replace(
      new RegExp(`<meta ${attribute} content="[^"]*"\\s*/?>`),
      `<meta ${attribute} content="${escape(value)}" />`,
    );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${SITE_URL + page.path}" />`,
  );
  const json = JSON.stringify(structuredData(page.path)).replaceAll(
    "<",
    "\\u003c",
  );
  html = html
    .replace(
      "</head>",
      `<script id="public-structured-data" type="application/ld+json">${json}</script></head>`,
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${renderPage(page.path)}</div>`,
    );
  const file =
    page.path === "/"
      ? "dist/index.html"
      : path.join("dist", page.path.slice(1), "index.html");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
}
await fs.writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\nSitemap: ${SITE_URL}/blog/sitemap.xml\n`,
);
await fs.writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${PUBLIC_PAGES.flatMap((page) => ["es", "en", "pt"].map((language) => `<url><loc>${SITE_URL}/${language}${page.path === "/" ? "" : page.path}</loc>${["es", "en", "pt"].map((code) => `<xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}/${code}${page.path === "/" ? "" : page.path}"/>`).join("")}<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL + page.path}"/></url>`)).join("")}</urlset>`,
);
await fs.writeFile(
  "dist/404.html",
  `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Página no encontrada | SHEEPLINK</title></head><body><main><h1>Esta página no existe</h1><p><a href="/">Volver a SHEEPLINK</a></p></main></body></html>`,
);
await fs.rm(".prerender", { recursive: true, force: true });
console.log(
  `Prerendered ${PUBLIC_PAGES.length} public pages, robots and sitemap.`,
);
