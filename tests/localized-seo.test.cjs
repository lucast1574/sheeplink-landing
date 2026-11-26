const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("all language versions have prerendered content, canonical, alternates and valid schema types", () => {
  for (const language of ["es", "en", "pt"])
    for (const slug of [
      "",
      "software-para-iglesias",
      "terminos",
      "privacidad",
      "cookies",
      "soporte",
    ]) {
      const prefix = language === "es" ? "" : "/" + language;
      const html = fs.readFileSync(
        path.join(__dirname, "../dist", prefix, slug, "index.html"),
        "utf8",
      );
      const url = `https://sheeplink.app${prefix}${slug ? "/" + slug : prefix ? "" : "/"}`;
      assert.ok(html.includes(`<html lang="${language}"`));
      assert.match(/<title>(.*?)<\/title>/.exec(html)[1], /sheeplink/i);
      assert.ok(html.includes(`<link rel="canonical" href="${url}"`));
      assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
      assert.equal((html.match(/class="sl-chat__launcher"/g) || []).length, 1);
      assert.doesNotMatch(html, /\{\{p\d+\}\}/);
      for (const code of ["es", "en", "pt", "x-default"]) {
        const targetPrefix =
          code === "es" || code === "x-default" ? "" : "/" + code;
        const target = `https://sheeplink.app${targetPrefix}${slug ? "/" + slug : targetPrefix ? "" : "/"}`;
        assert.ok(html.includes(`hreflang="${code}" href="${target}"`));
      }
      assert.doesNotMatch(
        html,
        /de habla hispana|Android (?:está )?en preparación/,
      );
      if (!slug || slug === "software-para-iglesias") {
        const importCopy = {
          es: "Importa integrantes desde Excel (.xlsx) o CSV.",
          en: "Import members from Excel (.xlsx) or CSV.",
          pt: "Importe integrantes do Excel (.xlsx) ou CSV.",
        };
        const exportCopy = {
          es: "Las descargas cubren los reportes indicados.",
          en: "Downloads cover the listed reports.",
          pt: "Os downloads abrangem os relatórios indicados.",
        };
        assert.ok(html.includes(importCopy[language]));
        assert.ok(html.includes(exportCopy[language]));
        assert.match(
          html,
          /<meta name="description" content="[^"]*Excel[^"]*CSV/,
        );
        assert.match(
          html,
          /<meta property="og:description" content="[^"]*Excel[^"]*CSV/,
        );
        assert.match(
          html,
          /<meta name="twitter:description" content="[^"]*Excel[^"]*CSV/,
        );
        assert.doesNotMatch(
          html,
          /CSV todavía no está disponible|CSV is not available yet|CSV ainda não está disponível/,
        );
      }
      const schema = JSON.parse(
        /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/.exec(
          html,
        )[1],
      );
      assert.ok(
        schema["@graph"].some((node) => node["@type"] === "Organization"),
      );
      assert.ok(
        schema["@graph"].some(
          (node) =>
            node["@type"] === "WebPage" &&
            node.url === url &&
            node.inLanguage === language,
        ),
      );
      if (!slug) {
        const app = schema["@graph"].find(
          (node) => node["@type"] === "WebApplication",
        );
        assert.ok(app.offers.every((offer) => offer["@type"] === "Offer"));
        assert.equal(app.mainEntityOfPage["@id"], url + "#webpage");
        assert.deepEqual(app.inLanguage, ["es", "en", "pt"]);
        assert.ok(app.featureList.length >= 9);
        const mobile = schema["@graph"].find(
          (node) => node["@type"] === "MobileApplication",
        );
        assert.deepEqual(
          mobile.screenshot.map((url) => url.split("/").at(-1)),
          ["hoy.webp", "celula.webp", "perfil.webp"],
        );
      }
      if (slug === "software-para-iglesias") {
        for (const id of [
          "administracion",
          "programacion",
          "idiomas",
          "inventario",
          "datos",
          "capacidad",
        ])
          assert.ok(html.includes(`id="${id}"`));
        const breadcrumbs = schema["@graph"].find(
          (node) => node["@type"] === "BreadcrumbList",
        );
        assert.equal(
          breadcrumbs.itemListElement[0].item,
          `https://sheeplink.app${prefix || "/"}`,
        );
      }
    }
});
