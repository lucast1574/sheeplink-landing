import { useEffect, useRef } from "react";
import logoGreen from "../../../assets/sheeplink-logo-green.svg";
import { Icon } from "./LandingIcons";
import "../entrance.css";
const storageKey = "sheeplink-brand-entrance-v1";
export function BrandEntrance() {
  const root = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const element = root.current;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || location.hash || preference.matches) return;
    try {
      if (sessionStorage.getItem(storageKey) && !started.current) return;
      sessionStorage.setItem(storageKey, "seen");
    } catch {
      /* Storage is optional; the entrance always dismisses. */
    }
    started.current = true;
    element.hidden = false;
    const dismiss = () => {
      element.hidden = true;
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Tab") dismiss();
    };
    const timer = setTimeout(dismiss, 1850);
    window.addEventListener("keydown", onKey);
    preference.addEventListener("change", dismiss);
    return () => {
      clearTimeout(timer);
      dismiss();
      window.removeEventListener("keydown", onKey);
      preference.removeEventListener("change", dismiss);
    };
  }, []);
  return (
    <div ref={root} hidden className="brand-arrival arrival-sheeplink">
      <div className="brand-arrival-art" aria-hidden="true">
        <svg className="arrival-community" viewBox="0 0 480 360" fill="none">
          <path
            className="arrival-community-path"
            d="M80 180C80 28 400 28 400 180S80 332 80 180ZM138 72C270 8 408 224 324 286S8 136 138 72Z"
          />
          <circle cx="80" cy="180" r="9" />
          <circle cx="400" cy="180" r="9" />
          <circle cx="138" cy="72" r="6" />
          <circle cx="324" cy="286" r="6" />
        </svg>
        <img
          className="brand-arrival-logo"
          src={logoGreen}
          alt=""
          width="300"
          height="82"
        />
        <p className="brand-arrival-caption">
          Cada persona, cerca.
          <br />
          <span>Una comunidad que camina junta.</span>
        </p>
        <span className="brand-arrival-line" />
      </div>
      <button
        type="button"
        className="brand-arrival-skip"
        onClick={() => {
          if (root.current) root.current.hidden = true;
        }}
      >
        Conoce SheepLink <Icon name="arrow" size={18} />
      </button>
    </div>
  );
}
