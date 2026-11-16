import { translate } from "../../../shared/i18n/index.ts";
import { Icon } from "./LandingIcons";

const values = [
  {
    icon: "user",
    title: translate("Cada persona importa"),
    text: translate(
      "Detrás de cada nombre hay una historia. Mantén cerca a tu comunidad y acompaña a quienes necesitan cuidado.",
    ),
  },
  {
    icon: "cross",
    title: translate("Unidos para servir"),
    text: translate(
      "Ayuda a pastores y líderes a trabajar con un mismo propósito, cada uno desde el lugar donde fue llamado a servir.",
    ),
  },
  {
    icon: "book",
    title: translate("Una fe que se comparte"),
    text: translate(
      "Organiza los espacios de formación, los encuentros y el servicio que fortalecen la vida de tu iglesia.",
    ),
  },
];

export function MissionSection() {
  return (
    <section className="lp-mission" aria-labelledby="mission-title">
      <div className="lp-wrap">
        <div className="lp-mission-heading">
          <span className="lp-mission-line" />
          <Icon name={"cross"} size={22} />
          <span className="lp-mission-line" />
        </div>
        <p className="lp-eyebrow">{translate("Nuestra razón de servir")}</p>
        <h2 id="mission-title">
          {translate("Una misma fe.")}
          <br />
          {translate("Muchas manos para cuidar.")}
        </h2>
        <p className="lp-mission-intro">
          {translate(
            "La iglesia es una comunidad de personas que caminan con Cristo. SHEEPLINK te ayuda con la organización para que puedas dedicar más tiempo a acompañarlas.",
          )}
        </p>
        <div className="lp-mission-values">
          {values.map((value) => (
            <article key={value.title}>
              <div className="lp-mission-icon">
                <Icon name={value.icon} size={24} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
