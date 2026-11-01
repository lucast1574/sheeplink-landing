import markGreen from "../../../assets/sheeplink-mark-green.svg";
import { GOOGLE_PLAY_SEARCH_URL } from "../landing.content";
import { Icon } from "./LandingIcons";

const mobileFeatures = [
  { icon: "layers", title: "Células", detail: "Personas y encuentros" },
  { icon: "star", title: "Servicio", detail: "Turnos de tu ministerio" },
  { icon: "book", title: "Formación", detail: "Crece junto a tu iglesia" },
];

export function MobileAppSection() {
  return (
    <section
      className="landing-app-section"
      id="app-movil"
      aria-labelledby="landing-app-title"
    >
      <div className="landing-container landing-app">
        <div className="landing-app-copy">
          <p className="section-caption">SHEEPLINK EN TU CELULAR</p>
          <h2 id="landing-app-title">
            Tu iglesia,
            <br />
            más cerca cada día.
          </h2>
          <p className="landing-app-description">
            Acompaña a tu comunidad estés donde estés. Lleva células, servicio y
            formación contigo en la app móvil de SHEEPLINK.
          </p>
          <div className="landing-app-platforms">
            <a
              className="landing-app-play"
              href={GOOGLE_PLAY_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Buscar SHEEPLINK en Google Play"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
                alt="Abrir Google Play"
                width="646"
                height="250"
                loading="lazy"
              />
            </a>
            <div className="landing-app-ios" aria-label="Versión para iOS en desarrollo">
              <span className="landing-app-ios-icon" aria-hidden="true">
                iOS
              </span>
              <span>
                <small>Versión para</small>
                <strong>iOS en desarrollo</strong>
              </span>
            </div>
          </div>
          <p className="landing-app-note">
            Para iniciar sesión necesitas una cuenta activa de SHEEPLINK.
          </p>
        </div>

        <div className="landing-app-art" role="img" aria-label="Vista ilustrativa de la app SHEEPLINK">
          <div className="landing-app-orbit landing-app-orbit--one" />
          <div className="landing-app-orbit landing-app-orbit--two" />
          <div className="landing-app-phone">
            <div className="landing-app-phone-camera" />
            <div className="landing-app-phone-header">
              <img src={markGreen} alt="" width="34" height="34" />
              <span>SHEEPLINK</span>
              <span className="landing-app-avatar" aria-hidden="true">✦</span>
            </div>
            <div className="landing-app-phone-welcome">
              <small>TODO LO QUE IMPORTA</small>
              <strong>Tu comunidad,<br />en movimiento.</strong>
            </div>
            <div className="landing-app-phone-list">
              {mobileFeatures.map((feature) => (
                <div className="landing-app-phone-row" key={feature.title}>
                  <span className="landing-app-phone-icon">
                    <Icon name={feature.icon} size={17} />
                  </span>
                  <span>
                    <strong>{feature.title}</strong>
                    <small>{feature.detail}</small>
                  </span>
                  <span className="landing-app-phone-arrow" aria-hidden="true">›</span>
                </div>
              ))}
            </div>
            <div className="landing-app-phone-footer">
              <span className="is-active"><Icon name="home" size={16} /> Inicio</span>
              <span><Icon name="user" size={16} /> Perfil</span>
              <span><Icon name="layers" size={16} /> Comunidad</span>
            </div>
          </div>
          <span className="landing-app-art-note">Una comunidad. Siempre conectada.</span>
        </div>
      </div>
    </section>
  );
}
