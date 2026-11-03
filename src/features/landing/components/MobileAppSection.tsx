import { useEffect, useRef, useState } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../landing.content";
import { Icon } from "./LandingIcons";
import "./mobile-app.css";

const screens = [
  {
    name: "Hoy",
    image: "hoy",
    title: "Lo importante, a la mano.",
    text: "Cumpleaños próximos y tus turnos de servicio, en un mismo lugar.",
    note: "Tu próximo servicio",
    detail: "Prepárate para servir con tu equipo.",
    icon: "star",
    word: "sirve.",
  },
  {
    name: "Mi célula",
    image: "celula",
    title: "Cada persona cuenta.",
    text: "Consulta a tu grupo y registra la asistencia de cada encuentro.",
    note: "Cada encuentro cuenta",
    detail: "Tu grupo y su asistencia, siempre cerca.",
    icon: "layers",
    word: "conecta.",
  },
  {
    name: "Perfil",
    image: "perfil",
    title: "Tu lugar en la comunidad.",
    text: "Tus responsabilidades, ministerios y preferencias, siempre contigo.",
    note: "Un lugar para ti",
    detail: "Tu célula. Tus ministerios. Tu comunidad.",
    icon: "user",
    word: "pertenece.",
  },
];
function StoreIcon({ apple }: { apple?: boolean }) {
  return apple ? (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="30"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.1 12.7c0-2 1.6-3 1.7-3.1-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-3 .9-3.8 2.2-1.6 2.7-.4 6.8 1.2 9 .8 1.1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.3 0 1.8.7 3 .7s1.9-1.1 2.7-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.7ZM14.8 6.4c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m4 3 16 9-16 9V3Z" />
      <path d="m4 3 10 12m-10 6 10-12" />
    </svg>
  );
}
export function MobileAppSection() {
  const [active, setActive] = useState(0);
  const [manual, setManual] = useState(false);
  const section = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (visible && !manual && !motion.matches)
        timer = setInterval(
          () => setActive((a) => (a + 1) % screens.length),
          6500,
        );
    };
    sync();
    motion.addEventListener("change", sync);
    return () => {
      clearInterval(timer);
      motion.removeEventListener("change", sync);
    };
  }, [visible, manual]);
  return (
    <section
      ref={section}
      className={`pocket-section${visible ? " is-in-view" : ""}`}
      id="app-movil"
      aria-labelledby="landing-app-title"
      data-screen={screens[active].image}
      data-cycling={visible && !manual ? "true" : "false"}
      onFocusCapture={() => setManual(true)}
      onPointerEnter={() => setManual(true)}
    >
      <div className="landing-container pocket-layout">
        <div className="pocket-copy">
          <h2 id="landing-app-title">
            Tu comunidad.
            <br />
            En tu bolsillo.
          </h2>
          <p className="pocket-intro">
            La app de SheepLink lleva tu iglesia contigo. Tu célula, los
            cumpleaños y tus turnos de servicio, más cerca que nunca.
          </p>
          <div className="pocket-stores">
            <a
              className="pocket-store"
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Descargar SheepLink en App Store"
            >
              <StoreIcon apple />
              <span>
                <small>Descárgala en</small>
                <strong>App Store</strong>
              </span>
              <Icon name="arrow" size={18} />
            </a>
            <a
              className="pocket-store pocket-store--android"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver SheepLink en Google Play, lanzamiento en preparación"
            >
              <StoreIcon />
              <span>
                <small>Próximamente en</small>
                <strong>Google Play</strong>
              </span>
              <Icon name="arrow" size={18} />
            </a>
          </div>
          <p className="pocket-access">
            Para entrar necesitas una cuenta activa de tu iglesia.
            <br />
            iOS disponible · Android en preparación.
          </p>
          <div
            className="pocket-selector"
            role="tablist"
            aria-label="Explora la app móvil"
          >
            {screens.map((screen, i) => (
              <button
                key={screen.image}
                id={`pocket-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls="pocket-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => {
                  setActive(i);
                  setManual(true);
                }}
                onKeyDown={(e) => {
                  if (
                    ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                  ) {
                    e.preventDefault();
                    const next =
                      e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 2
                          : (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                    setActive(next);
                    setManual(true);
                    document.getElementById(`pocket-tab-${next}`)?.focus();
                  }
                }}
              >
                {screen.name}
              </button>
            ))}
          </div>
          <div
            className="pocket-explanation"
            id="pocket-panel"
            role="tabpanel"
            aria-labelledby={`pocket-tab-${active}`}
            tabIndex={0}
          >
            <div key={active} className="pocket-explanation-content">
              <h3>{screens[active].title}</h3>
              <p>{screens[active].text}</p>
            </div>
          </div>
        </div>
        <div className="pocket-stage">
          <div className="pocket-stage-word" aria-hidden="true">
            {screens[active].word}
          </div>
          <div className="pocket-stage-heading" aria-hidden="true">
            <img
              src="/brand/sheeplink-mark-green.svg"
              alt=""
              width="28"
              height="28"
            />
            <span>La iglesia va contigo.</span>
          </div>
          <div className="pocket-device-scene">
            <div className="pocket-phone">
              {screens.map((screen, i) => (
                <img
                  key={screen.image}
                  className={active === i ? "is-current" : ""}
                  src={`/app/${screen.image}.webp`}
                  alt={
                    active === i
                      ? `Pantalla real de SheepLink: ${screen.name}, con datos de demostración`
                      : ""
                  }
                  aria-hidden={active !== i}
                  width="1206"
                  height="2622"
                  loading="lazy"
                />
              ))}
            </div>
            <div key={active} className="pocket-note" aria-hidden="true">
              <Icon name={screens[active].icon} size={23} />
              <div>
                <strong>{screens[active].note}</strong>
                <span>{screens[active].detail}</span>
              </div>
            </div>
            <div className="pocket-community" aria-hidden="true">
              <span>LT</span>
              <span>MC</span>
              <span>AV</span>
              <p>
                Un mismo
                <br />
                <strong>propósito.</strong>
              </p>
            </div>
          </div>
          <p className="pocket-caption">
            Explora las pantallas reales de la app.
          </p>
        </div>
      </div>
    </section>
  );
}
