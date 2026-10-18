import { writeFile } from "node:fs/promises";
import { format } from "prettier";
import { fetchPublicCatalog } from "./billing-catalog.mjs";
const url = new URL(
  "/api/billing/plans",
  process.env.CATALOG_API_URL || "https://api-sheeplink.nexode.app",
);
const rows = await fetchPublicCatalog(url);
await writeFile(
  new URL(
    "../src/features/landing/billing-catalog.generated.json",
    import.meta.url,
  ),
  await format(JSON.stringify(rows), { parser: "json" }),
);
console.log("Public pricing snapshot synchronized from the database.");
