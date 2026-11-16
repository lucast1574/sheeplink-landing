import { translate, localizedPath } from "../../../shared/i18n/index.ts";
import { PRICING } from "../landing.content";
import { useEffect, useRef, useState } from "react";
import { appPath } from "../../../shared/config/sites";
import logoWhite from "../../../assets/sheeplink-logo-white.svg";
import logoGreen from "../../../assets/sheeplink-logo-green.svg";
import markWhite from "../../../assets/sheeplink-mark-white.svg";
import { LegalLinks } from "../../legal/LegalLinks";
import { Icon } from "../components/LandingIcons";
import { BrandEntrance } from "../components/BrandEntrance";
import { CommunityScene } from "../components/CommunityScene";
import { ProductTour } from "../components/ProductTour";
import { PricingSection } from "../components/PricingSection";
import { MarketingButton } from "../components/MarketingButton";
import { MobileAppSection } from "../components/MobileAppSection";
import {
  CONTACT_EMAIL,
  FAQ,
  NAV,
  ROLES,
  STEPS,
  WHATSAPP_URL,
} from "../landing.content";
import "../landing.css";
const moments = [
  {
    day: translate("En la semana"),
    title: translate("Cada persona, cerca."),
    text: translate(
      "Tu célula se reúne, comparte la Palabra y registra su asistencia. El acompañamiento continúa cada día.",
    ),
    icon: "layers",
  },
  {
    day: translate("Antes del domingo"),
    title: translate("Cada equipo, preparado."),
    text: translate(
      "Los ministerios organizan su servicio. Cada siervo sabe dónde y cuándo le toca participar.",
    ),
    icon: "star",
  },
  {
    day: translate("Durante el camino"),
    title: translate("Cada paso, acompañado."),
    text: translate(
      "Devocionales, formación y encuentros. Una comunidad que crece en la fe y camina junta.",
    ),
    icon: "book",
  },
];
export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rhythm = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = rhythm.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <div className="landing">
      <BrandEntrance />
      <a className="landing-skip" href="#contenido">
        {translate("Ir al contenido")}
      </a>
      <header className="landing-header">
        <nav
          className="landing-container landing-nav"
          aria-label={translate("Principal")}
        >
          <a
            className="landing-brand"
            href="#inicio"
            aria-label={translate("SHEEPLINK, inicio")}
          >
            <img
              src={logoWhite}
              alt={translate("SHEEPLINK")}
              width="170"
              height="44"
            />
          </a>
          <div className="landing-nav-links">
            {NAV.map((n) => (
              <a key={n.href} href={localizedPath(n.href)}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="landing-nav-actions">
            <a
              href={localizedPath(appPath("/login"))}
              className="landing-login"
            >
              {translate("Iniciar sesión")}
            </a>
            <a
              href={localizedPath(appPath(PRICING.registrationPath))}
              className="landing-nav-trial"
            >
              {PRICING.navCta} <Icon name="arrow" size={16} />
            </a>
            <button
              type="button"
              className="landing-menu-toggle"
              aria-label={
                menuOpen ? translate("Cerrar menú") : translate("Abrir menú")
              }
              aria-expanded={menuOpen}
              aria-controls="landing-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d={menuOpen ? "M5 5l14 14M19 5L5 19" : "M3 7h18M3 16h18"}
                />
              </svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <nav
            id="landing-mobile-menu"
            className="landing-mobile-menu"
            aria-label={translate("Menú móvil")}
            onClick={() => setMenuOpen(false)}
          >
            {NAV.map((n) => (
              <a key={n.href} href={localizedPath(n.href)}>
                {n.label}
              </a>
            ))}
            <a href={localizedPath(appPath(PRICING.registrationPath))}>
              {PRICING.cta}
            </a>
          </nav>
        )}
      </header>
      <main id="contenido">
        <div className="landing-opening" id="inicio">
          <section
            className="landing-hero landing-container"
            aria-labelledby="hero-title"
          >
            <div className="landing-hero-copy">
              <p className="landing-hero-intro">
                <span /> {translate(" Tecnología al servicio de tu iglesia")}
              </p>
              <h1 id="hero-title">
                {translate("Cada persona")}
                <br />
                {translate("cuenta.")}
              </h1>
              <p className="landing-hero-subtitle">
                {translate("Una iglesia unida. Más tiempo para servir.")}
              </p>
              <p className="landing-hero-description">
                {translate(
                  "SheepLink es el software de gestión para iglesias que reúne células, asistencia, ministerios y escuela bíblica. Menos listas sueltas, más tiempo para cuidar a tu comunidad.",
                )}
              </p>
              <div className="landing-hero-actions">
                <MarketingButton
                  href={localizedPath(appPath(PRICING.registrationPath))}
                  variant="light"
                  arrow
                >
                  {PRICING.cta}
                </MarketingButton>
                <a className="landing-explore" href="#funciones">
                  <span className="landing-play">
                    <Icon name="play" size={16} />
                  </span>{" "}
                  {translate("Explorar SHEEPLINK")}
                </a>
              </div>
              <div className="landing-hero-foot">
                <span>{PRICING.disclosure}</span>
                <span>{PRICING.cancellation}</span>
              </div>
            </div>
            <div className="landing-hero-art">
              <CommunityScene />
            </div>
          </section>
          <div className="landing-bridge landing-container">
            <span>{translate("Una comunidad. Muchas manos para servir.")}</span>
            <a
              href="#funciones"
              aria-label={translate("Descubrir las funciones de SHEEPLINK")}
            >
              <span>{translate("Descubre cómo")}</span>
              <span className="landing-scroll-arrow">↓</span>
            </a>
          </div>
        </div>
        <div className="landing-main-content">
          <MobileAppSection />
          <section className="landing-section landing-product" id="funciones">
            <div className="landing-container">
              <div className="landing-section-heading">
                <div>
                  <p className="section-caption">
                    {translate("Software de gestión para iglesias")}
                  </p>
                  <h2>
                    {translate("Todo se conecta.")}
                    <br />
                    {translate("Nadie se pierde.")}
                  </h2>
                </div>
                <p>
                  {translate(
                    "La información que necesita tu equipo, en su lugar. Explora cómo se organiza el día a día de tu iglesia.",
                  )}{" "}
                  <a
                    className="landing-text-link"
                    href={localizedPath("/software-para-iglesias")}
                  >
                    {translate("Conoce qué ofrece SheepLink")}
                  </a>
                </p>
              </div>
              <ProductTour />
            </div>
          </section>
          <section className="landing-rhythm" ref={rhythm}>
            <div className="landing-container">
              <div className="landing-rhythm-heading">
                <span className="landing-rhythm-mark">
                  <img src={markWhite} alt="" width="48" height="48" />
                </span>
                <h2>
                  {translate("La iglesia vive")}
                  <br />
                  {translate("más allá del domingo.")}
                </h2>
                <p>
                  {translate(
                    "SHEEPLINK acompaña lo que sucede entre una reunión y la siguiente.",
                  )}
                </p>
              </div>
              <div className="landing-moments">
                {moments.map((m, i) => (
                  <article
                    className="landing-moment"
                    key={m.title}
                    style={{ "--moment": i } as React.CSSProperties}
                  >
                    <span className="moment-point">
                      <Icon name={m.icon} size={24} />
                    </span>
                    <p className="moment-day">{m.day}</p>
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="landing-section" id="como-funciona">
            <div className="landing-container landing-get-started">
              <div className="landing-start-heading">
                <p className="section-caption">
                  {translate("Una forma más sencilla de organizarse")}
                </p>
                <h2>
                  {translate("Empieza con")}
                  <br />
                  {translate("tu gente.")}
                </h2>
                <p>
                  {translate(
                    "No necesitas tenerlo todo ordenado para dar el primer paso.",
                  )}
                </p>
                <MarketingButton
                  href={localizedPath(appPath(PRICING.registrationPath))}
                  arrow
                >
                  {translate("Crear mi iglesia")}
                </MarketingButton>
              </div>
              <ol className="landing-steps">
                {STEPS.map((s) => (
                  <li key={s.n}>
                    <span>{s.n}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <section className="landing-roles-section">
            <div className="landing-container landing-roles">
              <div>
                <p className="section-caption">
                  {translate("Responsabilidades claras")}
                </p>
                <h2>
                  {translate("Un mismo propósito.")}
                  <br />
                  {translate("Un lugar para cada uno.")}
                </h2>
                <p>
                  {translate(
                    "Cada persona puede tener varios roles y seguir siendo parte de su célula. Los permisos acompañan su responsabilidad.",
                  )}
                </p>
              </div>
              <div className="landing-role-list">
                {ROLES.map((r, i) => (
                  <details key={r.title} open={i === 0 ? true : undefined}>
                    <summary>
                      {r.title}
                      <Icon name="plus" size={20} />
                    </summary>
                    <p>{r.text}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
          <PricingSection />
          <section
            className="landing-section landing-faq"
            id="preguntas-frecuentes"
          >
            <div className="landing-container landing-faq-layout">
              <div>
                <p className="section-caption">
                  {translate("Estamos para ayudarte")}
                </p>
                <h2>
                  {translate("Conversemos")}
                  <br />
                  {translate("tus dudas.")}
                </h2>
                <a
                  href={localizedPath(WHATSAPP_URL)}
                  target="_blank"
                  rel="noreferrer"
                  className="landing-text-link"
                >
                  {translate("Escríbenos por WhatsApp ")}
                  <Icon name="arrow" size={18} />
                </a>
              </div>
              <div className="landing-faq-list">
                {FAQ.map((f) => (
                  <details key={f.q}>
                    <summary>
                      {f.q}
                      <Icon name="plus" size={20} />
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
          <section className="landing-closing" id="contacto">
            <div className="landing-container">
              <img
                className="landing-closing-mark"
                src={markWhite}
                alt=""
                width="72"
                height="72"
              />
              <p>
                {translate("Tu vocación es cuidar.")}
                <br />
                {translate("Nosotros te ayudamos a organizar.")}
              </p>
              <MarketingButton
                href={localizedPath(appPath(PRICING.registrationPath))}
                variant="light"
                arrow
              >
                {PRICING.cta}
              </MarketingButton>
              <small className="landing-trial-disclosure">
                {PRICING.disclosure}
              </small>
              <a
                href={localizedPath(WHATSAPP_URL)}
                className="landing-closing-contact"
                target="_blank"
                rel="noreferrer"
              >
                {translate("Quiero conocer más")}
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="landing-footer">
        <div className="landing-container">
          <div className="landing-footer-top">
            <div>
              <a
                href="#inicio"
                aria-label={translate("SHEEPLINK, volver al inicio")}
              >
                <img
                  src={logoGreen}
                  alt={translate("SHEEPLINK")}
                  width="190"
                  height="46"
                />
              </a>
              <p>
                {translate("Personas, vocación y propósito.")}
                <br />
                {translate("Tecnología al servicio de tu iglesia.")}
              </p>
            </div>
            <nav aria-label={translate("Enlaces del sitio")}>
              {NAV.map((n) => (
                <a key={n.href} href={localizedPath(n.href)}>
                  {n.label}
                </a>
              ))}
              <a href={localizedPath(appPath("/devocionales/publicados"))}>
                {translate("Devocionales públicos")}
              </a>
              <a href={localizedPath(appPath("/login"))}>
                {translate("Iniciar sesión")}
              </a>
              <a href={localizedPath("/software-para-iglesias")}>
                {translate("Qué es SheepLink")}
              </a>
              <a href={localizedPath("/blog")}>
                {translate("Blog para iglesias")}
              </a>
              <a href={localizedPath(`mailto:${CONTACT_EMAIL}`)}>
                {translate("Contacto por correo")}
              </a>
            </nav>
          </div>
          <div className="landing-footer-bottom">
            <span>{translate("© 2026 SHEEPLINK")}</span>
            <LegalLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
