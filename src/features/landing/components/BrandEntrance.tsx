import logoGreen from "../../../assets/sheeplink-logo-green.svg";
import { Icon } from "./LandingIcons";
import "../entrance.css";
export function BrandEntrance() {
  return (
    <div className="brand-arrival arrival-sheeplink">
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
        onClick={() =>
          document.documentElement.removeAttribute("data-brand-arrival")
        }
      >
        Conoce SheepLink <Icon name="arrow" size={18} />
      </button>
    </div>
  );
}
