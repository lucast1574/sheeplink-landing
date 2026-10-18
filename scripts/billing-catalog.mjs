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
