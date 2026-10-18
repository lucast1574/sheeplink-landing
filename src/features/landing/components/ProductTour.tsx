import { useState, type KeyboardEvent } from "react";
import mark from "../../../assets/sheeplink-mark-white.svg";
import { Icon } from "./LandingIcons";
const modules = [
  {
    id: "cells",
    name: "Células",
    icon: "layers",
    title: "Conoce a cada persona.",
    description:
      "Registra asistencias, acompaña los devocionales y mantén cerca a tu célula.",
  },
  {
    id: "service",
    name: "Servicio",
    icon: "star",
    title: "El domingo empieza con orden.",
    description:
      "Un calendario compartido para saber quién sirve, dónde y a qué hora.",
  },
  {
    id: "academy",
    name: "Academia",
    icon: "book",
    title: "Un espacio para seguir creciendo.",
    description:
      "Cursos por grupos, materiales y un enlace de inscripción para compartir.",
  },
  {
    id: "events",
    name: "Actividades",
    icon: "home",
    title: "Organiza lo que los reúne.",
    description:
      "Inscribe participantes y ordena los abonos, el presupuesto y los responsables.",
  },
];
const people = ["Alina Valnera", "Elio Naviel", "Nerea Solvén", "Iria Terván"];
function AttendancePreview() {
  const [present, setPresent] = useState([true, true, false, true]);
  return (
    <div className="tour-attendance">
      <div className="tour-panel-title">
        <div>
          <small>Tu célula</small>
          <h4>Esperanza</h4>
        </div>
        <span className="tour-tag">
          {present.filter(Boolean).length} de 4 presentes
        </span>
      </div>
      <div className="tour-table-head">
        <span>Integrante</span>
        <span>Asistencia</span>
      </div>
      {people.map((name, i) => (
        <div className="tour-person" key={name}>
          <span className="tour-avatar">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <strong>{name}</strong>
          <button
            type="button"
            className={
              present[i]
                ? "tour-attendance-toggle checked"
                : "tour-attendance-toggle"
            }
            aria-label={`Asistencia de ${name}`}
            aria-pressed={present[i]}
            onClick={() =>
              setPresent((p) => p.map((v, j) => (i === j ? !v : v)))
            }
          >
            {present[i] ? <Icon name="check" size={16} /> : <span>—</span>}
          </button>
        </div>
      ))}
      <p className="tour-instruction">Prueba marcando la asistencia.</p>
    </div>
  );
}
function ServicePreview() {
  const [day, setDay] = useState(0);
  return (
    <div>
      <div className="tour-panel-title">
        <div>
          <small>Servicio del día</small>
          <h4>{day === 0 ? "Domingo, 9:00" : "Miércoles, 19:00"}</h4>
        </div>
        <Icon name="star" />
      </div>
      <div className="tour-day-buttons" aria-label="Explorar días">
        <button
          type="button"
          aria-pressed={day === 0}
          onClick={() => setDay(0)}
        >
          Domingo
        </button>
        <button
          type="button"
          aria-pressed={day === 1}
          onClick={() => setDay(1)}
        >
          Miércoles
        </button>
      </div>
      {(day === 0
        ? [
            ["Alabanza", "Nerea S. y Elio N."],
            ["Ujieres", "Alina V. y Gael O."],
            ["Multimedia", "Iria T."],
          ]
        : [
            ["Alabanza", "Alina V."],
            ["Ujieres", "Elio N."],
          ]
      ).map(([group, names]) => (
        <div className="tour-service-row" key={group}>
          <span className="tour-service-symbol">
            <Icon name={group === "Alabanza" ? "star" : "user"} size={19} />
          </span>
          <div>
            <strong>{group}</strong>
            <small>{names}</small>
          </div>
          <span className="tour-tag">Confirmado</span>
        </div>
      ))}
      <div className="tour-note">
        <Icon name="check" size={18} /> Cada siervo encuentra su turno en su
        calendario.
      </div>
    </div>
  );
}
function AcademyPreview() {
  const [group, setGroup] = useState(0);
  return (
    <div>
      <div className="tour-course-art">
        <Icon name="book" size={46} />
        <span>Crecer en la Palabra</span>
      </div>
      <div className="tour-panel-title">
        <div>
          <small>Escuela bíblica</small>
          <h4>Vida Abundante</h4>
        </div>
        <span className="tour-tag">2 grupos</span>
      </div>
      <div className="tour-day-buttons">
        <button
          type="button"
          aria-pressed={group === 0}
          onClick={() => setGroup(0)}
        >
          Grupo de los martes
        </button>
        <button
          type="button"
          aria-pressed={group === 1}
          onClick={() => setGroup(1)}
        >
          Grupo de los sábados
        </button>
      </div>
      <div className="tour-course-detail">
        <span>{group === 0 ? "Martes, 19:00" : "Sábado, 10:00"}</span>
        <strong>{group === 0 ? "Clase en línea" : "Salón de formación"}</strong>
        <small>
          Materiales, asistencia y calificaciones en el mismo lugar.
        </small>
      </div>
    </div>
  );
}
function ActivityPreview() {
  return (
    <div>
      <div className="tour-event-art">
        <svg viewBox="0 0 600 160" aria-hidden="true">
          <circle cx="460" cy="40" r="24" fill="#e9e2b8" />
          <path d="M0 130L140 30 290 160H0" fill="#92ab82" />
          <path d="M140 160L380 40 600 145V160" fill="#527e63" />
          <path d="M0 150Q150 90 350 140T600 125V160H0" fill="#285b45" />
        </svg>
        <span>Nos encontramos para compartir.</span>
      </div>
      <div className="tour-panel-title">
        <div>
          <small>Retiro</small>
          <h4>Encuentro de familias</h4>
        </div>
        <span className="tour-tag">Inscripciones abiertas</span>
      </div>
      <div className="tour-finance">
        <div>
          <small>Inscritos</small>
          <strong>24</strong>
        </div>
        <div>
          <small>Abonos</small>
          <strong>Por persona</strong>
        </div>
        <div>
          <small>Presupuesto</small>
          <strong>Organizado</strong>
        </div>
      </div>
      <div className="tour-note">
        <Icon name="mail" size={18} /> Comparte el formulario con tu comunidad.
      </div>
    </div>
  );
}
export function ProductTour() {
  const [active, setActive] = useState(0);
  const module = modules[active];
  const keyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % modules.length;
    else if (event.key === "ArrowLeft")
      next = (index + modules.length - 1) % modules.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = modules.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  };
  return (
    <div className="product-tour">
      <div className="tour-tabs" role="tablist" aria-label="Explora SHEEPLINK">
        {modules.map((m, i) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            id={`tab-${m.id}`}
            aria-controls={`panel-${m.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => keyDown(e, i)}
          >
            <Icon name={m.icon} size={19} />
            {m.name}
          </button>
        ))}
      </div>
      <div
        className="tour-stage"
        role="tabpanel"
        id={`panel-${module.id}`}
        aria-labelledby={`tab-${module.id}`}
        tabIndex={0}
      >
        <div className="tour-narrative" key={module.id}>
          <span className="tour-module-label">
            <Icon name={module.icon} size={22} />
            {module.name}
          </span>
          <h3>{module.title}</h3>
          <p>{module.description}</p>
          <div className="tour-narrative-foot">
            <span className="tour-small-mark">
              <img src={mark} alt="" width="25" height="25" />
            </span>
            <span>
              Más claridad para tu equipo.
              <br />
              Más cercanía para tu iglesia.
            </span>
          </div>
        </div>
        <div className="tour-window">
          <div className="tour-window-bar">
            <span />
            <span />
            <span />
            <p>SHEEPLINK / {module.name}</p>
            <Icon name="shield" size={14} />
          </div>
          <div className="tour-window-body" key={module.id}>
            {active === 0 ? (
              <AttendancePreview />
            ) : active === 1 ? (
              <ServicePreview />
            ) : active === 2 ? (
              <AcademyPreview />
            ) : (
              <ActivityPreview />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
