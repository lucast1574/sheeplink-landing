import { useEffect, useState } from "react";
import { appPath } from "../../../shared/config/sites";
import logoGreen from "../../../assets/sheeplink-logo-green.svg";
import markWhite from "../../../assets/sheeplink-mark-white.svg";
import { LegalLinks } from "../../legal/LegalLinks";
import { Icon } from "../components/LandingIcons";
import { MissionSection } from "../components/MissionSection";
import {
  CONTACT_EMAIL,
  DEMO_HOST,
  FAQ,
  FEATURES,
  MOCK_CELLS,
  MOCK_FOLLOW,
  MOCK_SERVERS,
  MOCK_STATS,
  NAV,
  PLANS,
  ROLES,
  STEPS,
  EXAMPLE_STORIES,
  WHATSAPP_URL,
} from "../landing.content";
import "../landing.css";
export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Desplazamiento suave solo mientras se está en la página de inicio
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="lp">
      {/* ---------- Barra superior ---------- */}
      <header className="lp-nav">
        <nav className="lp-nav-in" aria-label="Principal">
          <a
            className="lp-brand"
            href="#inicio"
            aria-label="SHEEPLINK, inicio"
            onClick={() => setMenuOpen(false)}
          >
            <img
              className="lp-wordmark"
              src={logoGreen}
              alt="SHEEPLINK, software de gestión para iglesias"
              width={170}
              height={40}
            />
          </a>
          <div className="lp-links">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="lp-nav-cta">
            <a className="lp-btn link sm" href={appPath("/login")}>
              Iniciar sesión
            </a>
            <a
              className="lp-btn primary sm hide-sm"
              href={appPath("/registro")}
            >
              Empezar gratis
            </a>
            <button
              type="button"
              className="lp-burger"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="lp-menu" onClick={() => setMenuOpen(false)}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a className="lp-btn primary" href={appPath("/registro")}>
              Empezar gratis
            </a>
          </div>
        )}
      </header>

      <main id="inicio">
        {/* ---------- Hero ---------- */}
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-grid">
            <div>
              <span className="lp-pill">
                <Icon name="cross" size={16} /> Al servicio de la iglesia de
                Cristo
              </span>
              <p className="lp-search-context">
                Software de gestión para iglesias
              </p>
              <h1>
                Una iglesia unida.
                <br />
                <em>Más tiempo para servir.</em>
              </h1>
              <p className="lp-lead">
                Menos tiempo entre listas. Más tiempo para escuchar, acompañar y
                cuidar a las personas que Dios ha puesto en tu comunidad.
              </p>
              <p className="lp-lead2">
                Organiza tus células, ministerios y encuentros en un solo lugar.
                Una ayuda para tu labor pastoral, en español.
              </p>
              <div className="lp-cta-row">
                <div className="lp-primary-action">
                  <a className="lp-btn primary" href={appPath("/registro")}>
                    Empezar gratis <Icon name="arrow" size={18} />
                  </a>
                  <p className="lp-micro">Prueba gratis por 7 días</p>
                </div>
                <a className="lp-btn link" href="#como-funciona">
                  Ver cómo funciona
                </a>
              </div>
              <p className="lp-pastoral-note">
                <Icon name="cross" size={15} /> Tecnología para organizar.
                Vocación para cuidar.
              </p>
            </div>

            {/* Panel de ejemplo con datos inventados */}
            <div className="lp-win-wrap" aria-hidden="true">
              <div className="lp-win">
                <div className="lp-win-bar">
                  <span className="lp-dot" style={{ background: "#ff5f57" }} />
                  <span className="lp-dot" style={{ background: "#febc2e" }} />
                  <span className="lp-dot" style={{ background: "#28c840" }} />
                  <span className="lp-url">{DEMO_HOST}</span>
                </div>
                <div className="lp-app">
                  <div className="lp-app-side">
                    <img src={markWhite} alt="" />
                    {[
                      "home",
                      "shield",
                      "layers",
                      "target",
                      "user",
                      "star",
                      "check",
                      "chart",
                      "mail",
                    ].map((i, k) => (
                      <span
                        key={i}
                        className={`lp-app-ico${k === 0 ? " on" : ""}`}
                      >
                        <Icon name={i} size={15} />
                      </span>
                    ))}
                  </div>
                  <div className="lp-app-main">
                    <div className="lp-app-top">
                      <span>Dashboard</span>
                      <span className="lp-app-search">
                        Buscar integrantes, células…
                      </span>
                    </div>
                    <p className="lp-app-h">Bienvenido, Pastor Elian</p>
                    <p className="lp-app-sub">
                      Comunidad Buen Renuevo · Resumen semanal
                    </p>

                    <div className="lp-stats">
                      {MOCK_STATS.map((s) => (
                        <div
                          className="lp-stat"
                          key={s.label}
                          style={{ ["--c" as string]: s.tone }}
                        >
                          <small>{s.label}</small>
                          <b>{s.value}</b>
                          <span>{s.sub}</span>
                        </div>
                      ))}
                    </div>

                    <div className="lp-tiles">
                      <div className="lp-tile g">
                        <small>Asistieron el domingo</small>
                        <b>112 personas</b>
                      </div>
                      <div className="lp-tile a">
                        <small>Turnos de servicio</small>
                        <b>23 esta semana</b>
                      </div>
                      <div className="lp-tile n">
                        <small>Ministerios activos</small>
                        <b>6 equipos</b>
                      </div>
                    </div>

                    <div className="lp-cols">
                      <div className="lp-card">
                        <h4>
                          Células destacadas <span>Ver todas →</span>
                        </h4>
                        {MOCK_CELLS.map((c) => (
                          <div className="lp-row" key={c.name}>
                            <span className="lp-av">{c.initial}</span>
                            <span className="t">
                              <b>{c.name}</b>
                              <i>{c.sub}</i>
                            </span>
                            <span className={`lp-chip${c.ok ? "" : " low"}`}>
                              {c.pct}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="lp-card">
                        <h4>
                          Quiénes sirven esta semana <span>Ver todos →</span>
                        </h4>
                        {MOCK_SERVERS.map((s) => (
                          <div className="lp-row" key={s.group}>
                            <span className="lp-av">
                              <Icon name="star" size={11} />
                            </span>
                            <span className="t">
                              <b>{s.group}</b>
                              <i>{s.people}</i>
                            </span>
                            <span className="lp-chip">{s.day}</span>
                          </div>
                        ))}
                      </div>
                      <div className="lp-card">
                        <h4>
                          Seguimientos pendientes <span>Ver todos →</span>
                        </h4>
                        {MOCK_FOLLOW.map((f) => (
                          <div className="lp-row" key={f.name}>
                            <span className="lp-av">{f.initial}</span>
                            <span className="t">
                              <b>{f.name}</b>
                              <i>{f.task}</i>
                            </span>
                            <span className="lp-chip warn">Sin contacto</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="lp-chat">
                <Icon name="mail" size={16} />
              </span>
            </div>
          </div>
        </section>

        <MissionSection />
        {/* ---------- Funciones ---------- */}
        <section className="lp-sec" id="funciones">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Funciones</span>
              <h2 className="lp-h2">Organización que acompaña tu misión</h2>
              <p className="lp-sub">
                Herramientas sencillas para pastores y líderes: cuida a tu
                comunidad, prepara el servicio y acompaña cada etapa de su
                camino.
              </p>
            </div>
            <div className="lp-feat">
              {FEATURES.map((f) => (
                <article className="lp-fcard" key={f.title}>
                  <div className="lp-fico">
                    <Icon name={f.icon} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Cómo funciona ---------- */}
        <section className="lp-sec alt" id="como-funciona">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Cómo funciona</span>
              <h2 className="lp-h2">Empieza hoy y ordénate en tres pasos</h2>
              <p className="lp-sub">
                Sin instalaciones ni capacitaciones largas. Si sabes usar
                WhatsApp, sabes usar SHEEPLINK.
              </p>
            </div>
            <div className="lp-steps">
              {STEPS.map((s) => (
                <div className="lp-step" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Roles ---------- */}
        <section className="lp-sec" id="roles">
          <div className="lp-wrap lp-roles">
            <div>
              <span className="lp-eyebrow">Para todo tu equipo</span>
              <h2 className="lp-h2">Cada líder ve lo que le corresponde</h2>
              <p className="lp-sub">
                Desde el pastor principal hasta el líder de una célula: cada
                persona entra con su propio usuario y accede solo a la
                información de su zona, su célula o su ministerio.
              </p>
            </div>
            <div className="lp-role-list">
              {ROLES.map((r, i) => (
                <div className="lp-role" key={r.title}>
                  <span className="i">
                    <Icon
                      name={["shield", "layers", "target", "star"][i]}
                      size={20}
                    />
                  </span>
                  <div>
                    <b>{r.title}</b>
                    <span>{r.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Casos ilustrativos ---------- */}
        <section className="lp-sec">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Ejemplos de uso</span>
              <h2 className="lp-h2">Así puedes acompañar a tu comunidad</h2>
            </div>
            <div className="lp-testi">
              {EXAMPLE_STORIES.map((t) => (
                <figure className="lp-quote" key={t.name}>
                  <p>{t.text}</p>
                  <footer>
                    <span className="av">
                      {t.name.replace(/^(Pastor|Líder)\s+/i, "")[0]}
                    </span>
                    <span>
                      <b>{t.name}</b>
                      <small>{t.role}</small>
                    </span>
                  </footer>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Precios ---------- */}
        <section className="lp-sec alt" id="precios">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Precios</span>
              <h2 className="lp-h2">Un plan para cada etapa de tu iglesia</h2>
              <p className="lp-sub">
                Empieza con 7 días de prueba. Los planes de pago se contratan y
                gestionan a través de Stripe.
              </p>
            </div>
            <div className="lp-plans">
              {PLANS.map((p) => (
                <div
                  className={`lp-plan${p.highlight ? " hl" : ""}`}
                  key={p.name}
                >
                  {p.badge && <span className="tagtop">{p.badge}</span>}
                  <h3>{p.name}</h3>
                  <div className="lp-price">{p.price}</div>
                  <div className="lp-per">{p.per}</div>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>
                        <Icon name="check" size={18} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {"signup" in p && p.signup ? (
                    <a
                      className={`lp-btn block ${p.highlight ? "primary" : "ghost"}`}
                      href={appPath("/registro")}
                    >
                      {p.cta}
                    </a>
                  ) : (
                    <a
                      className={`lp-btn block ${p.highlight ? "primary" : "ghost"}`}
                      href={appPath(
                        "/registro?plan=" + encodeURIComponent(p.id),
                      )}
                    >
                      {p.cta}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Preguntas frecuentes ---------- */}
        <section className="lp-sec" id="preguntas">
          <div className="lp-wrap">
            <div className="lp-head center">
              <span className="lp-eyebrow">Preguntas frecuentes</span>
              <h2 className="lp-h2">Resolvemos tus dudas</h2>
            </div>
            <div className="lp-faq">
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

        {/* ---------- Llamado final ---------- */}
        <section id="contacto" style={{ padding: "0 0 84px" }}>
          <div className="lp-final">
            <img src={markWhite} alt="" aria-hidden="true" />
            <h2>
              Más cerca de tu comunidad.
              <br />
              Al servicio de una misma misión.
            </h2>
            <p>
              Da el primer paso para organizar tu iglesia y dedicar más tiempo a
              lo que te mueve: servir a Cristo y cuidar a las personas.
            </p>
            <div className="lp-cta-row">
              <a className="lp-btn light" href={appPath("/registro")}>
                Empezar gratis <Icon name="arrow" size={18} />
              </a>
              <a
                className="lp-btn outline-light"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Agenda una llamada por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Pie de página ---------- */}
      <footer className="lp-foot">
        <div className="lp-wrap">
          <div className="lp-foot-grid">
            <div>
              <a className="lp-brand" href="#inicio">
                <img
                  className="lp-wordmark"
                  src={logoGreen}
                  alt="SHEEPLINK, software de gestión para iglesias"
                  width={170}
                  height={40}
                />
              </a>
              <p>
                Tecnología al servicio de la iglesia. Para organizar el trabajo
                y acompañar a cada persona con amor y propósito.
              </p>
            </div>
            <div className="lp-foot-links">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
              <a href={appPath("/login")}>Iniciar sesión</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="lp-copy">
            <span>© 2026 SHEEPLINK. Todos los derechos reservados.</span>
            <span>
              Para comunidades que comparten la fe y el llamado a servir.
            </span>
          </div>
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
