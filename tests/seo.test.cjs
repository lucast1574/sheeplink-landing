const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "../dist");
const site = "https://sheeplink.nexode.app";
test("cada URL pública entrega contenido HTML y metadatos propios sin ejecutar JavaScript", () => {
  const titles = new Set();
  for (const slug of ["", "terminos", "privacidad", "cookies"]) {
    const html = fs.readFileSync(path.join(root, slug, "index.html"), "utf8");
    const title = /<title>(.*?)<\/title>/.exec(html)[1];
    assert.ok(!titles.has(title));
    titles.add(title);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.ok(/<h2/.test(html));
    assert.doesNotMatch(html, /<div id="root"><\/div>/);
    const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)[1];
    assert.equal(canonical, site + (slug ? "/" + slug : "/"));
    assert.match(html, /<meta name="description" content="[^"]{40,180}"/);
    assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`));
    assert.match(html, /summary_large_image/);
    assert.match(html, /og-sheeplink-20261016.png/);
    assert.match(html, /og:image:width" content="1200"/);
    assert.match(html, /og:image:height" content="630"/);
    const graph = JSON.parse(
      /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/.exec(
        html,
      )[1],
    );
    assert.ok(
      graph["@graph"].some(
        (n) => n["@type"] === "WebPage" && n.url === canonical,
      ),
    );
    assert.doesNotMatch(JSON.stringify(graph), /aggregateRating|reviewCount/);
  }
  const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(
    home,
    /<a[^>]+href="https:\/\/dashboard-sheeplink.nexode.app\/registro\?plan=redil"/,
  );
  assert.match(home, /gestión para iglesias/);
});
test("imagen social horizontal ligera, sitemap canónico y página inexistente sin indexación", () => {
  const bytes = fs.readFileSync(path.join(root, "og-sheeplink-20261016.png"));
  assert.equal(bytes.readUInt32BE(16), 1200);
  assert.equal(bytes.readUInt32BE(20), 630);
  assert.ok(bytes.length < 300000);
  const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  assert.equal((sitemap.match(/<loc>/g) || []).length, 4);
  assert.doesNotMatch(sitemap, /login|registro|dashboard/);
  assert.match(
    fs.readFileSync(path.join(root, "robots.txt"), "utf8"),
    /Allow: \/\nSitemap: https:/,
  );
  assert.match(fs.readFileSync(path.join(root, "404.html"), "utf8"), /noindex/);
});

test("la portada describe sus precios reales, conserva todas las pestañas y sirve la fuente desde su propio origen", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const graph = JSON.parse(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/.exec(
      html,
    )[1],
  );
  const app = graph["@graph"].find(
    (node) => node["@type"] === "WebApplication",
  );
  assert.deepEqual(
    app.offers.map((o) => [o.name, o.price, o.priceCurrency]),
    [
      ["Redil", "25", "USD"],
      ["Viña", "50", "USD"],
      ["Mies", "80", "USD"],
    ],
  );
  assert.match(html, /id="panel-service"/);
  assert.match(html, /id="panel-academy"/);
  assert.match(html, /id="panel-events"/);
  assert.match(html, /figtree-latin\.woff2/);
  assert.doesNotMatch(html, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
  assert.ok(
    fs.readFileSync(path.join(root, "fonts/figtree-latin.woff2")).length <
      30000,
  );
  assert.match(html, /devocionales\/publicados/);
});
