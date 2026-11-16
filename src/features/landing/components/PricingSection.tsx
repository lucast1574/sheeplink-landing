import { useState } from "react";
import { appPath } from "../../../shared/config/sites";
import { PLANS } from "../landing.content";
import { pricingCopy } from "../pricing";
import { Icon } from "./LandingIcons";
import { MarketingButton } from "./MarketingButton";
export function PricingSection() {
  const [interval, setInterval] = useState<"month" | "year">("month");
  const visiblePlans = PLANS.filter(
    (p) => (p.interval ?? "month") === interval,
  );
  return (
    <section className="landing-section landing-pricing" id="precios">
      <div className="landing-container">
        <div className="landing-section-heading">
          <div>
            <p className="section-caption">Planes de SHEEPLINK</p>
            <h2>
              Espacio para tu iglesia.
              <br />
              En cada etapa.
            </h2>
          </div>
          <p>
            Elige tu plan y cómo pagarlo: mensual o anual con dos meses de
            ahorro.
          </p>
        </div>
        <div className="landing-billing-choice">
          <div
            className="landing-billing-toggle"
            role="group"
            aria-label="Periodicidad de pago"
          >
            <button
              type="button"
              aria-pressed={interval === "month"}
              onClick={() => setInterval("month")}
            >
              Mensual
            </button>
            <button
              type="button"
              aria-pressed={interval === "year"}
              onClick={() => setInterval("year")}
            >
              Anual · Ahorra 2 meses
            </button>
          </div>
          <p aria-live="polite">
            {interval === "year"
              ? "Paga 10 meses y disfruta 12. Un solo cobro anual, sin prueba gratuita."
              : "Pago mes a mes. Redil incluye 7 días de prueba con tarjeta."}
          </p>
        </div>
        <div className="landing-plan-grid">
          {visiblePlans.map((plan) => (
            <article
              key={plan.id}
              className={`landing-plan${plan.highlight ? " landing-plan--featured" : ""}`}
            >
              {plan.highlight && (
                <span className="plan-recommendation">
                  Para seguir creciendo
                </span>
              )}
              <h3>{plan.name}</h3>
              <p className="landing-plan-description">{plan.description}</p>
              <p className="landing-plan-trial">
                {plan.trialDays > 0
                  ? `${plan.trialDays} días gratis con tarjeta`
                  : "Pago desde el inicio"}
              </p>
              <p className="landing-plan-price">
                {plan.price}
                <span>{plan.per}</span>
              </p>
              <MarketingButton
                href={appPath(`/registro?plan=${encodeURIComponent(plan.id)}`)}
                variant={plan.highlight ? "light" : "solid"}
              >
                {plan.cta}
              </MarketingButton>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="landing-billing-note">
          {pricingCopy(visiblePlans).terms}
        </p>
      </div>
    </section>
  );
}
