const { test } = require("node:test");
const assert = require("node:assert/strict");
const plan = {
  id: "plan",
  name: "Plan",
  description: "Local",
  amount: 2500,
  currency: "usd",
  trialDays: 0,
  maxUsers: 1,
  maxMembers: 2,
  maxCells: 3,
  maxMinistries: null,
};
test("catálogo admite cualquier número de planes y descarta campos privados", async () => {
  const { readPublicCatalog } = await import("../scripts/billing-catalog.mjs");
  for (const count of [1, 2, 4]) {
    const rows = readPublicCatalog({
      plans: Array.from({ length: count }, (_, i) => ({
        ...plan,
        id: `plan-${i}`,
        priceId: "private",
      })),
    });
    assert.equal(rows.length, count);
    assert.equal("priceId" in rows[0], false);
  }
  for (const plans of [
    [],
    [plan, plan],
    [{ ...plan, amount: -1 }],
    [{ ...plan, trialDays: "7" }],
    [{ ...plan, maxUsers: 0 }],
  ])
    assert.throws(() => readPublicCatalog({ plans }));
});
