import fs from "node:fs/promises";
import { spawnSync } from "node:child_process";

const {
  PUBLIC_PAGES,
  SITE_URL,
  pageAlternates,
  SUPPORTED_LANGUAGES: languages,
} = await import("../.prerender/prerender.js");
// Spanish replaces dist/index.html, the Vite template used by the other languages.
for (const language of [...languages.filter((code) => code !== "es"), "es"]) {
  const result = spawnSync(
    process.execPath,
    ["scripts/prerender-locales.mjs"],
    {
      env: {
        ...process.env,
        SHEEPLINK_LANGUAGE: language,
      },
      stdio: "inherit",
    },
  );
  if (result.status !== 0) process.exit(result.status ?? 1);
}
const urls = PUBLIC_PAGES.flatMap(({ path: pagePath }) => {
  const alternates = pageAlternates(pagePath);
  const links = alternates
    .map(
      ({ language, href }) =>
        `<xhtml:link rel="alternate" hreflang="${language}" href="${href}"/>`,
    )
    .join("");
  return alternates
    .filter(({ language }) => language !== "x-default")
    .map(({ href }) => `<url><loc>${href}</loc>${links}</url>`);
});
await fs.writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>`,
);
await fs.writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\nSitemap: ${SITE_URL}/blog/sitemap.xml\n`,
);
await fs.writeFile(
  "dist/404.html",
  `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Página no encontrada | SHEEPLINK</title></head><body><main><h1>Esta página no existe</h1><p><a href="/">Volver a SHEEPLINK</a></p></main></body></html>`,
);
await fs.rm(".prerender", { recursive: true, force: true });
