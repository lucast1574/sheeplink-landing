import { useEffect, useRef, useState } from "react";
import { appPath } from "../../../shared/config/sites";
import logoWhite from "../../../assets/sheeplink-logo-white.svg";
import logoGreen from "../../../assets/sheeplink-logo-green.svg";
import markWhite from "../../../assets/sheeplink-mark-white.svg";
import { LegalLinks } from "../../legal/LegalLinks";
import { Icon } from "../components/LandingIcons";
import { CommunityScene } from "../components/CommunityScene";
import { ProductTour } from "../components/ProductTour";
import { PricingSection } from "../components/PricingSection";
import { MarketingButton } from "../components/MarketingButton";
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
    day: "En la semana",
    title: "Cada persona, cerca.",
    text: "Tu célula se reúne, comparte la Palabra y registra su asistencia. El acompañamiento continúa cada día.",
    icon: "layers",
  },
  {
    day: "Antes del domingo",
    title: "Cada equipo, preparado.",
    text: "Los ministerios organizan su servicio. Cada siervo sabe dónde y cuándo le toca participar.",
    icon: "star",
  },
  {
    day: "Durante el camino",
    title: "Cada paso, acompañado.",
    text: "Devocionales, formación y encuentros. Una comunidad que crece en la fe y camina junta.",
    icon: "book",
  },
];
export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
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
    <div className={`landing${paused ? " motion-paused" : ""}`}>
      <a className="landing-skip" href="#contenido">
        Ir al contenido
      </a>
      <header className="landing-header">
        <nav className="landing-container landing-nav" aria-label="Principal">
          <a
            className="landing-brand"
            href="#inicio"
            aria-label="SHEEPLINK, inicio"
          >
            <img src={logoWhite} alt="SHEEPLINK" width="170" height="44" />
          </a>
          <div className="landing-nav-links">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="landing-nav-actions">
            <a href={appPath("/login")} className="landing-login">
              Iniciar sesión
            </a>
            <a href={appPath("/registro")} className="landing-nav-trial">
              Probar gratis <Icon name="arrow" size={16} />
            </a>
            <button
              type="button"
              className="landing-menu-toggle"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
            aria-label="Menú móvil"
            onClick={() => setMenuOpen(false)}
          >
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href={appPath("/registro")}>Empezar mis 7 días gratis</a>
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
                <span /> Tecnología al servicio de tu iglesia
              </p>
              <h1 id="hero-title">
                Cada persona
                <br />
                cuenta.
              </h1>
              <p className="landing-hero-subtitle">
                Una iglesia unida. Más tiempo para servir.
              </p>
              <p className="landing-hero-description">
                Células, ministerios y formación en un mismo lugar. Menos listas
                sueltas, más tiempo para cuidar a tu comunidad.
              </p>
              <div className="landing-hero-actions">
                <MarketingButton
                  href={appPath("/registro")}
                  variant="light"
                  arrow
                >
                  Empezar mis 7 días gratis
                </MarketingButton>
                <a className="landing-explore" href="#funciones">
                  <span className="landing-play">▶</span> Explorar SHEEPLINK
                </a>
              </div>
              <div className="landing-hero-foot">
                <span>Para pastores, líderes y toda su comunidad.</span>
                <span>En español. Desde tu celular.</span>
              </div>
            </div>
            <div className="landing-hero-art">
              <CommunityScene />
              <button
                type="button"
                className="landing-motion-control"
                aria-pressed={paused}
                onClick={() => setPaused(!paused)}
              >
                {paused ? "▶ Activar movimiento" : "Ⅱ Pausar movimiento"}
              </button>
            </div>
          </section>
          <div className="landing-bridge landing-container">
            <span>Una comunidad. Muchas manos para servir.</span>
            <a
              href="#funciones"
              aria-label="Descubrir las funciones de SHEEPLINK"
            >
              <span>Descubre cómo</span>
              <span className="landing-scroll-arrow">↓</span>
            </a>
          </div>
        </div>
        <div className="landing-main-content">
          <section className="landing-section landing-product" id="funciones">
            <div className="landing-container">
              <div className="landing-section-heading">
                <div>
                  <p className="section-caption">
                    Software de gestión para iglesias
                  </p>
                  <h2>
                    Todo se conecta.
                    <br />
                    Nadie se pierde.
                  </h2>
                </div>
                <p>
                  La información que necesita tu equipo, en su lugar. Explora
                  cómo se organiza el día a día de tu iglesia.
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
                  La iglesia vive
                  <br />
                  más allá del domingo.
                </h2>
                <p>
                  SHEEPLINK acompaña lo que sucede entre una reunión y la
                  siguiente.
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
                  Una forma más sencilla de organizarse
                </p>
                <h2>
                  Empieza con
                  <br />
                  tu gente.
                </h2>
                <p>
                  No necesitas tenerlo todo ordenado para dar el primer paso.
                </p>
                <MarketingButton href={appPath("/registro")} arrow>
                  Crear mi iglesia
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
                <p className="section-caption">Responsabilidades claras</p>
                <h2>
                  Un mismo propósito.
                  <br />
                  Un lugar para cada uno.
                </h2>
                <p>
                  Cada persona puede tener varios roles y seguir siendo parte de
                  su célula. Los permisos acompañan su responsabilidad.
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
          <section className="landing-section landing-faq">
            <div className="landing-container landing-faq-layout">
              <div>
                <p className="section-caption">Estamos para ayudarte</p>
                <h2>
                  Conversemos
                  <br />
                  tus dudas.
                </h2>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="landing-text-link"
                >
                  Escríbenos por WhatsApp <Icon name="arrow" size={18} />
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
                Tu vocación es cuidar.
                <br />
                Nosotros te ayudamos a organizar.
              </p>
              <MarketingButton
                href={appPath("/registro")}
                variant="light"
                arrow
              >
                Empezar mis 7 días gratis
              </MarketingButton>
              <a
                href={WHATSAPP_URL}
                className="landing-closing-contact"
                target="_blank"
                rel="noreferrer"
              >
                Quiero conocer más
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="landing-footer">
        <div className="landing-container">
          <div className="landing-footer-top">
            <div>
              <a href="#inicio" aria-label="SHEEPLINK, volver al inicio">
                <img src={logoGreen} alt="SHEEPLINK" width="190" height="46" />
              </a>
              <p>
                Personas, vocación y propósito.
                <br />
                Tecnología al servicio de tu iglesia.
              </p>
            </div>
            <nav aria-label="Enlaces del sitio">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
              <a href={appPath("/login")}>Iniciar sesión</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>Contacto por correo</a>
            </nav>
          </div>
          <div className="landing-footer-bottom">
            <span>© 2026 SHEEPLINK</span>
            <LegalLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
