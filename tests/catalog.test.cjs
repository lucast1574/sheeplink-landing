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

test("catálogo reintenta fallos transitorios y usa únicamente una respuesta válida", async () => {
  const { fetchPublicCatalog } = await import("../scripts/billing-catalog.mjs");
  let calls = 0;
  const waits = [];
  const rows = await fetchPublicCatalog("https://api.example.test", {
    fetcher: async () => {
      calls++;
      if (calls === 1) throw new TypeError("temporary connection failure");
      if (calls === 2) return new Response("", { status: 502 });
      return Response.json({ plans: [plan] });
    },
    wait: async (ms) => waits.push(ms),
  });
  assert.equal(calls, 3);
  assert.deepEqual(waits, [2000, 4000]);
  assert.equal(rows[0].id, plan.id);
});
test("catálogo detiene publicación ante error persistente, 4xx o datos inválidos", async () => {
  const { fetchPublicCatalog } = await import("../scripts/billing-catalog.mjs");
  let calls = 0;
  await assert.rejects(
    () =>
      fetchPublicCatalog("https://api.example.test", {
        fetcher: async () => {
          calls++;
          return new Response("", { status: 503 });
        },
        wait: async () => {},
      }),
    /Catalog HTTP 503/,
  );
  assert.equal(calls, 5);
  for (const response of [
    new Response("", { status: 403 }),
    Response.json({ plans: [] }),
  ]) {
    calls = 0;
    await assert.rejects(() =>
      fetchPublicCatalog("https://api.example.test", {
        fetcher: async () => {
          calls++;
          return response;
        },
        wait: async () => {
          throw new Error("should not retry invalid responses");
        },
      }),
    );
    assert.equal(calls, 1);
  }
});
