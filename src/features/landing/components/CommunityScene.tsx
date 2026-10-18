import mark from "../../../assets/sheeplink-mark-white.svg";
import { Icon } from "./LandingIcons";
const connections = [
  {
    name: "Células",
    icon: "layers",
    text: "Cada persona, acompañada",
    className: "cells",
  },
  {
    name: "Servicio",
    icon: "star",
    text: "Un equipo con propósito",
    className: "service",
  },
  {
    name: "Formación",
    icon: "book",
    text: "La fe que sigue creciendo",
    className: "study",
  },
  {
    name: "Encuentros",
    icon: "home",
    text: "Más momentos juntos",
    className: "gather",
  },
];
export function CommunityScene() {
  return (
    <div
      className="community-scene"
      aria-label="Células, servicio, formación y encuentros conectados con tu iglesia"
      role="img"
    >
      <svg
        className="community-paths"
        viewBox="0 0 600 560"
        fill="none"
        aria-hidden="true"
      >
        <circle className="community-orbit" cx="300" cy="280" r="208" />
        <circle className="community-orbit inner" cx="300" cy="280" r="155" />
        <g className="community-connections">
          <path d="M300 280C210 280 250 125 112 125" />
          <path d="M300 280C390 280 360 125 505 125" />
          <path d="M300 280C205 280 240 443 100 443" />
          <path d="M300 280C380 280 370 443 510 443" />
        </g>
        <g className="community-signals">
          <path d="M300 280C210 280 250 125 112 125" />
          <path d="M300 280C390 280 360 125 505 125" />
          <path d="M300 280C205 280 240 443 100 443" />
          <path d="M300 280C380 280 370 443 510 443" />
        </g>
        <g className="community-stars">
          <path d="M104 285h14m-7-7v14M449 40h14m-7-7v14M380 511h14m-7-7v14" />
        </g>
      </svg>
      <div className="community-center">
        <img src={mark} width="76" height="76" alt="" />
        <span>Tu iglesia</span>
        <small>Un mismo cuerpo</small>
      </div>
      {connections.map((c) => (
        <div
          key={c.name}
          className={`community-node community-node--${c.className}`}
        >
          <span className="community-node-icon">
            <Icon name={c.icon} size={23} />
          </span>
          <div>
            <strong>{c.name}</strong>
            <small>{c.text}</small>
          </div>
        </div>
      ))}
      <span className="community-person person-one">AV</span>
      <span className="community-person person-two">NR</span>
      <span className="community-person person-three">EL</span>
      <div className="community-note">
        <span className="scene-check">
          <Icon name="check" size={15} />
        </span>{" "}
        Hay un lugar para cada persona.
      </div>
    </div>
  );
}
