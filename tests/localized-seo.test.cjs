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
      const html = fs.readFileSync(
        path.join(__dirname, "../dist", language, slug, "index.html"),
        "utf8",
      );
      const url = `https://sheeplink.app/${language}${slug ? "/" + slug : ""}`;
      assert.ok(html.includes(`<html lang="${language}"`));
      assert.ok(html.includes(`<link rel="canonical" href="${url}"`));
      assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
      assert.doesNotMatch(html, /\{\{p\d+\}\}/);
      for (const code of ["es", "en", "pt", "x-default"]) {
        const target = `https://sheeplink.app${code === "x-default" ? "" : "/" + code}${slug ? "/" + slug : code === "x-default" ? "/" : ""}`;
        assert.ok(html.includes(`hreflang="${code}" href="${target}"`));
      }
      assert.doesNotMatch(
        html,
        /de habla hispana|Android (?:está )?en preparación/,
      );
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
        for (const id of ["administracion", "programacion", "idiomas"])
          assert.ok(html.includes(`id="${id}"`));
        const breadcrumbs = schema["@graph"].find(
          (node) => node["@type"] === "BreadcrumbList",
        );
        assert.equal(
          breadcrumbs.itemListElement[0].item,
          `https://sheeplink.app/${language}`,
        );
      }
    }
});
