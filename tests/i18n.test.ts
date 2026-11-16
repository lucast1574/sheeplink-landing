import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveLanguage } from "../src/shared/i18n/language.ts";
import es from "../src/shared/i18n/es.ts";
import en from "../src/shared/i18n/en.ts";
import pt from "../src/shared/i18n/pt.ts";
import { i18n, translate, systemMessage } from "../src/shared/i18n/index.ts";

test("detects the first supported browser language and falls back to Spanish", () => {
  assert.equal(resolveLanguage(["en-GB", "es-CO"]), "en");
  assert.equal(resolveLanguage(["fr-FR", "pt-BR", "en-US"]), "pt");
  assert.equal(resolveLanguage(["es-MX"]), "es");
  assert.equal(resolveLanguage(["pt-PT"]), "pt");
  assert.equal(resolveLanguage(["EN_us"]), "en");
  assert.equal(resolveLanguage(["de-DE", "fr"]), "es");
  assert.equal(resolveLanguage([]), "es");
});

test("all catalogs cover the same copy and preserve every interpolation parameter", () => {
  for (const catalog of [en, pt]) {
    assert.deepEqual(Object.keys(catalog).sort(), Object.keys(es).sort());
    for (const [source, value] of Object.entries(catalog)) {
      assert.ok(value.trim(), source);
      assert.deepEqual(
        [...value.matchAll(/\{\{(p\d+)\}\}/g)].map((m) => m[1]).sort(),
        [...source.matchAll(/\{\{(p\d+)\}\}/g)].map((m) => m[1]).sort(),
        source,
      );
    }
  }
});

test("translates UI and server messages while preserving unknown content and Spanish fallback", async () => {
  try {
    await i18n.changeLanguage("en");
    assert.equal(translate("Guardar"), "Save");
    assert.equal(
      systemMessage("Petición no permitida"),
      en["Petición no permitida"],
    );
    assert.equal(
      systemMessage("Una nota escrita por Lucía"),
      "Una nota escrita por Lucía",
    );
    assert.equal(
      translate("Un texto nuevo sin traducción"),
      "Un texto nuevo sin traducción",
    );
    assert.equal(
      translate("Hasta {{p0}} integrantes", { p0: 12 }).includes("12"),
      true,
    );
    await i18n.changeLanguage("pt");
    assert.equal(translate("Guardar"), "Salvar");
  } finally {
    await i18n.changeLanguage("es");
  }
});
