const fields = [
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
export function readPublicCatalog(value) {
  const plans = value?.plans;
  if (
    !Array.isArray(plans) ||
    !plans.length ||
    new Set(plans.map((p) => p?.id)).size !== plans.length ||
    plans.some(
      (p) =>
        !p ||
        typeof p.id !== "string" ||
        !/^[a-z0-9-]+$/.test(p.id) ||
        typeof p.name !== "string" ||
        !p.name.trim() ||
        typeof p.description !== "string" ||
        !Number.isSafeInteger(p.amount) ||
        p.amount <= 0 ||
        p.currency !== "usd" ||
        !Number.isInteger(p.trialDays) ||
        p.trialDays < 0 ||
        p.trialDays > 30 ||
        ["maxUsers", "maxMembers", "maxCells", "maxMinistries"].some(
          (k) => p[k] !== null && (!Number.isSafeInteger(p[k]) || p[k] < 1),
        ),
    )
  )
    throw new Error("Invalid public catalog");
  return plans.map((p) => Object.fromEntries(fields.map((k) => [k, p[k]])));
}

/** Retry transport failures during API rollouts; malformed catalogs fail immediately. */
export async function fetchPublicCatalog(
  url,
  {
    fetcher = fetch,
    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    attempts = 5,
  } = {},
) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    let response;
    try {
      response = await fetcher(url, {
        signal: AbortSignal.timeout(15000),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; SHEEPLINK-CatalogSync/1.0)",
          Accept: "application/json",
        },
      });
    } catch (error) {
      lastError = error;
    }
    if (response?.ok) return readPublicCatalog(await response.json());
    if (response) {
      lastError = new Error(`Catalog HTTP ${response.status}`);
      if (![408, 429].includes(response.status) && response.status < 500)
        throw lastError;
      await response.body?.cancel();
    }
    if (attempt + 1 < attempts)
      await wait(Math.min(2000 * 2 ** attempt, 10000));
  }
  throw lastError ?? new Error("Catalog unavailable");
}
