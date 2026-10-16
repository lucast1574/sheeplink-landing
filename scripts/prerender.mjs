import fs from "node:fs/promises";
import path from "node:path";
import {
  renderPage,
  PUBLIC_PAGES,
  SITE_URL,
  APP_URL,
  SOCIAL_IMAGE,
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
  const graph = [
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "SHEEPLINK",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_URL + "/brand/sheeplink-mark-green.png",
        width: 512,
        height: 512,
      },
      email: "krecarfaz@gmail.com",
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: "SHEEPLINK",
      inLanguage: "es-PE",
      publisher: { "@id": SITE_URL + "/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": SITE_URL + page.path + "#webpage",
      url: SITE_URL + page.path,
      name: page.title,
      description: page.description,
      inLanguage: "es-PE",
      isPartOf: { "@id": SITE_URL + "/#website" },
    },
  ];
  if (page.path === "/")
    graph.push({
      "@type": "WebApplication",
      name: "SHEEPLINK",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "es",
      description: page.description,
      featureList: [
        "Gestión de células e integrantes",
        "Registro de asistencia",
        "Organización de ministerios y turnos",
        "Escuela bíblica y materiales de cursos",
      ],
      publisher: { "@id": SITE_URL + "/#organization" },
    });
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replaceAll("<", "\\u003c");
  html = html
    .replace(
      "</head>",
      `<script type="application/ld+json">${json}</script></head>`,
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
