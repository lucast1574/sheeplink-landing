import fs from "node:fs/promises";
import path from "node:path";
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
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);
await fs.writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${PUBLIC_PAGES.map((page) => `<url><loc>${SITE_URL + page.path}</loc></url>`).join("")}</urlset>`,
);
await fs.writeFile(
  "dist/404.html",
  `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Página no encontrada | SHEEPLINK</title></head><body><main><h1>Esta página no existe</h1><p><a href="/">Volver a SHEEPLINK</a></p></main></body></html>`,
);
await fs.rm(".prerender", { recursive: true, force: true });
console.log(
  `Prerendered ${PUBLIC_PAGES.length} public pages, robots and sitemap.`,
);
