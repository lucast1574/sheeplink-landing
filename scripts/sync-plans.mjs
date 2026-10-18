import { writeFile } from "node:fs/promises";
import { format } from "prettier";
import { readPublicCatalog } from "./billing-catalog.mjs";
const url = new URL(
  "/api/billing/plans",
  process.env.CATALOG_API_URL || "https://api-sheeplink.nexode.app",
);
const response = await fetch(url, {
  signal: AbortSignal.timeout(15000),
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; SHEEPLINK-CatalogSync/1.0)",
    Accept: "application/json",
  },
});
if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
const rows = readPublicCatalog(await response.json());
await writeFile(
  new URL(
    "../src/features/landing/billing-catalog.generated.json",
    import.meta.url,
  ),
  await format(JSON.stringify(rows), { parser: "json" }),
);
console.log("Public pricing snapshot synchronized from the database.");
