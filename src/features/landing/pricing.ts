import { translate } from "../../shared/i18n/index.ts";
export interface PublicPlan {
  id: string;
  name: string;
  description: string;
  amount: number;
  currency: string;
  interval?: string;
  trialDays: number;
  maxUsers: number | null;
  maxMembers: number | null;
  maxCells: number | null;
  maxMinistries: number | null;
}
export const priceLabel = (plan: PublicPlan) =>
  `US$${(plan.amount / 100).toLocaleString(translate("en-US"), { maximumFractionDigits: 2 })}`;
export function pricingCopy(plans: readonly PublicPlan[]) {
  const trial = plans.find((p) => p.interval !== "year" && p.trialDays > 0);
  const first = trial ?? plans[0];
  const terms = plans
    .map((p) =>
      p.interval !== "year" && p.trialDays > 0
        ? translate(
            "{{p0}} incluye {{p1}} días gratis con tarjeta, una sola vez. Después se cobran {{p2}} al mes automáticamente; cancela antes de terminar la prueba para evitar el cobro.",
            { p0: p.name, p1: p.trialDays, p2: priceLabel(p) },
          )
        : translate("{{p0}} ({{p1}}/{{p2}}) se cobra al contratar.{{p3}}", {
            p0: p.name,
            p1: priceLabel(p),
            p2: p.interval === "year" ? translate("año") : translate("mes"),
            p3: p.interval === "year" ? translate(" Sin prueba gratuita.") : "",
          }),
    )
    .join(" ");
  return {
    registrationPath: first
      ? `/registro?plan=${encodeURIComponent(first.id)}`
      : "/registro",
    navCta: trial ? translate("Probar gratis") : translate("Elegir plan"),
    cta: trial
      ? translate("Empezar mis {{p0}} días gratis", { p0: trial.trialDays })
      : translate("Elegir mi plan"),
    introduction: trial
      ? translate(
          "Prueba {{p0}} durante {{p1}} días con tarjeta. Después, {{p2}} al mes. Cancela antes para evitar el cobro.",
          { p0: trial.name, p1: trial.trialDays, p2: priceLabel(trial) },
        )
      : translate(
          "Elige el espacio que necesita tu iglesia. El pago se realiza al contratar.",
        ),
    cancellation: trial
      ? translate("Cancela antes de terminar la prueba para evitar el cobro.")
      : translate("Administra o cancela la renovación desde Facturación."),
    disclosure: first
      ? `${first.name} · ${first.trialDays ? translate("Con tarjeta. Después, {{p0}}/mes. Cancela antes para evitar el cobro.", { p0: priceLabel(first) }) : translate("{{p0}}/{{p1}}. Pago desde el inicio.", { p0: priceLabel(first), p1: first.interval === "year" ? translate("año") : translate("mes") })}`
      : translate("Consulta los planes disponibles en Facturación."),
    terms: translate(
      "Precios en dólares estadounidenses. Renovación automática mensual o anual con Stripe según la modalidad elegida. {{p0}}",
      { p0: terms },
    ),
    faq: translate(
      "{{p0}}{{p1}} Crear una cuenta por sí solo no activa tu iglesia.",
      { p0: trial ? translate("Sí. ") : "", p1: terms },
    ),
    legal: translate(
      "Crear una cuenta no activa el acceso ni genera un cobro por sí solo. Para activar la iglesia debes contratar un plan en Stripe. {{p0}} Stripe muestra el importe y la periodicidad antes de confirmar.",
      { p0: terms },
    ),
  };
}
