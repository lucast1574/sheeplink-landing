import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

if (!process.env.SHEEPLINK_PRERENDER_CHILD) {
  for (const language of ["es", "en", "pt"]) {
    const result = spawnSync(
      process.execPath,
      ["scripts/prerender-locales.mjs"],
      {
        env: {
          ...process.env,
          SHEEPLINK_LANGUAGE: language,
          SHEEPLINK_PRERENDER_CHILD: "1",
        },
        stdio: "inherit",
      },
    );
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
} else {
  const { renderPage, PUBLIC_PAGES, SITE_URL, structuredData } = await import(
    "../.prerender/prerender.js"
  );
  const language = process.env.SHEEPLINK_LANGUAGE;
  const template = await fs.readFile("dist/index.html", "utf8");
  const escape = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  for (const page of PUBLIC_PAGES) {
    const localizedPath = "/" + language + (page.path === "/" ? "" : page.path);
    const canonical = SITE_URL + localizedPath;
    const alternates =
      ["es", "en", "pt"]
        .map(
          (code) =>
            `<link rel="alternate" hreflang="${code}" href="${SITE_URL}/${code}${page.path === "/" ? "" : page.path}" />`,
        )
        .join("") +
      `<link rel="alternate" hreflang="x-default" href="${SITE_URL + page.path}" />`;
    let html = template
      .replace(/<html lang="[^"]*"/, `<html lang="${language}"`)
      .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`);
    for (const [attribute, value] of Object.entries({
      'name="description"': page.description,
      'property="og:title"': page.title,
      'property="og:description"': page.description,
      'property="og:url"': canonical,
      'property="og:locale"': { es: "es_PE", en: "en_US", pt: "pt_BR" }[
        language
      ],
      'name="twitter:title"': page.title,
      'name="twitter:description"': page.description,
    }))
      html = html.replace(
        new RegExp(`<meta ${attribute} content="[^"]*"\\s*/?>`),
        `<meta ${attribute} content="${escape(value)}" />`,
      );
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`,
    );
    const graph = structuredData(page.path);
    for (const node of graph["@graph"]) {
      if (node["@type"] === "WebPage") {
        node.url = canonical;
        node["@id"] = canonical + "#webpage";
      }
      if (node["@type"] === "BreadcrumbList")
        node.itemListElement.at(-1).item = canonical;
    }
    const json = JSON.stringify(graph).replaceAll("<", "\\u003c");
    html = html
      .replace(
        "</head>",
        `${alternates}<script id="public-structured-data" type="application/ld+json">${json}</script></head>`,
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root">${renderPage(page.path, true)}</div>`,
      );
    const file = path.join("dist", localizedPath.slice(1), "index.html");
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, html);
  }
  console.log(`Prerendered ${PUBLIC_PAGES.length} pages in ${language}.`);
}
