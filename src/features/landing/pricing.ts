import { translate, locale } from "../../shared/i18n/index.ts";
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
/** Capacity and prices come from the public catalog used by checkout. */
export function capacityCopy(plans: readonly PublicPlan[], members = 1500) {
  const fits = (plan: PublicPlan) =>
    plan.maxMembers === null || plan.maxMembers >= members;
  const monthly = plans
    .filter((plan) => plan.interval !== "year" && fits(plan))
    .sort((a, b) => a.amount - b.amount)[0];
  if (!monthly)
    return translate(
      "Consulta los planes vigentes para confirmar la capacidad que necesita tu iglesia.",
    );
  const annual = plans.find(
    (plan) =>
      plan.interval === "year" && plan.name === monthly.name && fits(plan),
  );
  return translate(
    "Para {{p0}} integrantes, {{p1}} cuesta {{p2}} al mes. {{p3}}{{p4}}",
    {
      p0: members.toLocaleString(locale),
      p1: monthly.name,
      p2: priceLabel(monthly),
      p3: annual
        ? translate(
            "La modalidad anual cuesta {{p0}} por año, en un solo cobro. ",
            { p0: priceLabel(annual) },
          )
        : "",
      p4:
        monthly.maxMembers === null
          ? translate(
              "Este plan no tiene límite de integrantes: crecer a 2.000 o 3.000 personas no cambia su tarifa por cantidad de integrantes. Los importes y condiciones vigentes se muestran al contratar.",
            )
          : translate(
              "Incluye hasta {{p0}} integrantes; si tu iglesia supera ese límite, necesitarás un plan con más capacidad.",
              { p0: monthly.maxMembers.toLocaleString(locale) },
            ),
    },
  );
}
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
