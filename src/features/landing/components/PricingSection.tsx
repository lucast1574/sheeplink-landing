import { appPath } from "../../../shared/config/sites";
import { PLANS, PRICING } from "../landing.content";
import { Icon } from "./LandingIcons";
import { MarketingButton } from "./MarketingButton";
export function PricingSection() {
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
          <p>{PRICING.introduction}</p>
        </div>
        <div className="landing-plan-grid">
          {PLANS.map((plan) => (
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
        <p className="landing-billing-note">{PRICING.terms}</p>
      </div>
    </section>
  );
}
