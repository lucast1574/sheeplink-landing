import { writeFile } from "node:fs/promises";
const url = new URL(
  "/api/billing/plans",
  process.env.CATALOG_API_URL || "https://api-sheeplink.nexode.app",
);
const response = await fetch(url, {
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; SHEEPLINK-CatalogSync/1.0)",
    Accept: "application/json",
  },
});
if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
const { plans } = await response.json();
if (
  !Array.isArray(plans) ||
  plans.length !== 3 ||
  plans.some(
    (p) =>
      !p.id ||
      !p.name ||
      !Number.isInteger(p.amount) ||
      p.amount <= 0 ||
      p.currency !== "usd",
  )
)
  throw new Error("Invalid public catalog");
const allowed = [
  "id",
  "name",
  "description",
  "amount",
  "currency",
  "trialDays",
  "maxUsers",
  "maxMembers",
  "maxCells",
  "maxMinistries",
];
const rows = plans.map((p) =>
  Object.fromEntries(allowed.map((k) => [k, p[k]])),
);
await writeFile(
  new URL(
    "../src/features/landing/billing-catalog.generated.ts",
    import.meta.url,
  ),
  "// Public snapshot exported from BillingPlan. Refresh with npm run sync:plans before publishing pricing changes.\nexport const BILLING_CATALOG = " +
    JSON.stringify(rows, null, 2) +
    ";\n",
);
console.log("Public pricing snapshot synchronized from the database.");
