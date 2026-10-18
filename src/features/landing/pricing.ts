export interface PublicPlan {
  id: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  trialDays: number;
  maxUsers: number | null;
  maxMembers: number | null;
  maxCells: number | null;
  maxMinistries: number | null;
}
export const priceLabel = (plan: PublicPlan) =>
  `US$${(plan.amount / 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
export function pricingCopy(plans: readonly PublicPlan[]) {
  const trial = plans.find((p) => p.trialDays > 0);
  const first = trial ?? plans[0];
  const terms = plans
    .map((p) =>
      p.trialDays > 0
        ? `${p.name} incluye ${p.trialDays} días gratis con tarjeta, una sola vez. Después se cobran ${priceLabel(p)} al mes automáticamente; cancela antes de terminar la prueba para evitar el cobro.`
        : `${p.name} (${priceLabel(p)}/mes) se cobra al contratar.`,
    )
    .join(" ");
  return {
    registrationPath: first
      ? `/registro?plan=${encodeURIComponent(first.id)}`
      : "/registro",
    navCta: trial ? "Probar gratis" : "Elegir plan",
    cta: trial
      ? `Empezar mis ${trial.trialDays} días gratis`
      : "Elegir mi plan",
    introduction: trial
      ? `Prueba ${trial.name} durante ${trial.trialDays} días con tarjeta. Después, ${priceLabel(trial)} al mes. Cancela antes para evitar el cobro.`
      : "Elige el espacio que necesita tu iglesia. El pago se realiza al contratar.",
    cancellation: trial
      ? "Cancela antes de terminar la prueba para evitar el cobro."
      : "Administra o cancela la renovación desde Facturación.",
    disclosure: first
      ? `${first.name} · ${first.trialDays ? `Con tarjeta. Después, ${priceLabel(first)}/mes. Cancela antes para evitar el cobro.` : `${priceLabel(first)}/mes. Pago desde el inicio.`}`
      : "Consulta los planes disponibles en Facturación.",
    terms: `Precios en dólares estadounidenses. Renovación mensual automática con Stripe. ${terms}`,
    faq: `${trial ? "Sí. " : ""}${terms} Crear una cuenta por sí solo no activa tu iglesia.`,
    legal: `Crear una cuenta no activa el acceso ni genera un cobro por sí solo. Para activar la iglesia debes contratar un plan en Stripe. ${terms} Stripe muestra el importe y la periodicidad antes de confirmar.`,
  };
}
