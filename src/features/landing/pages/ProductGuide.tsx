import { translate, localizedPath } from "../../../shared/i18n/index.ts";
import {
  PRICING,
  FAQ,
  CAPACITY_COPY,
  MIGRATION_COPY,
  EXPORTS_COPY,
} from "../landing.content";
import { appPath } from "../../../shared/config/sites";
import { LegalLinks } from "../../legal/LegalLinks";
import "../landing.css";
import "./product-guide.css";

const capabilities = [
  {
    id: "inventario",
    title: translate("Inventario y préstamos"),
    text: translate(
      "Lleva el registro de los bienes de la iglesia, su estado y sus préstamos. Registra reparaciones, costos y bajas para conservar el historial de cada bien. Los costos de reparación pueden quedar pendientes de registro en Tesorería.",
    ),
    link: translate("Conocer la plataforma web"),
    href: "/#funciones",
  },
  {
    id: "administracion",
    title: translate("Tesorería y finanzas"),
    text: translate(
      "Registra diezmos, ofrendas, recaudaciones, ingresos y gastos por cuenta y categoría, en soles o dólares. Consulta movimientos, aportes por integrante y reportes mensuales. Exporta los movimientos en CSV y el reporte mensual de diezmos en Excel. El presupuesto de actividades se gestiona junto con cada evento.",
    ),
    link: translate("Conocer la plataforma web"),
    href: "/#funciones",
  },
  {
    id: "programacion",
    title: translate("Programación de cultos y seguimiento pastoral"),
    text: translate(
      "Programa cultos y reuniones en el calendario, ordena cada momento del culto con su hora y responsable, y coordina las responsabilidades del equipo. Los pastores pueden dar seguimiento a las células que acompañan.",
    ),
    link: translate("Conocer la plataforma web"),
    href: "/#funciones",
  },
  {
    id: "formularios",
    title: translate("Formularios para la congregación"),
    text: translate(
      "Crea formularios con preguntas propias para recibir visitas, peticiones de oración, inscripciones y actualizaciones de datos. Comparte un enlace, consulta las respuestas de tu iglesia y pausa el formulario cuando termine.",
    ),
    link: translate("Conocer la plataforma web"),
    href: "/#funciones",
  },
  {
    id: "idiomas",
    title: translate("Tres idiomas automáticos"),
    text: translate(
      "La plataforma, la app y esta web detectan automáticamente el idioma del navegador o dispositivo: español, inglés o portugués. Si el idioma no es compatible, se muestra español. No necesitas elegirlo en un selector.",
    ),
    link: translate("Conocer la plataforma web"),
    href: "/#funciones",
  },
  {
    id: "celulas",
    title: translate("Células y asistencia"),
    text: translate(
      "Organiza integrantes, zonas y células en una estructura compartida. El líder de célula registra la asistencia de cada encuentro y el líder de zona revisa los grupos que acompaña. Así, la información de las reuniones queda vinculada a cada comunidad.",
    ),
    link: translate("Ver la gestión de células"),
    href: "/#funciones",
  },
  {
    id: "ministerios",
    title: translate("Ministerios y servicio"),
    text: translate(
      "Reúne a los integrantes de cada ministerio y programa sus turnos de servicio. Los responsables organizan la participación de su equipo y cada persona consulta sus responsabilidades. La app móvil permite tener los turnos a mano fuera de la computadora.",
    ),
    link: translate("Explorar los turnos de servicio"),
    href: "/#funciones",
  },
  {
    id: "formacion",
    title: translate("Escuela bíblica"),
    text: translate(
      "Administra cursos, períodos académicos, inscripciones, alumnos y materiales de formación. Registra asistencia y calificaciones, consulta reportes y descárgalos en Excel. Los responsables acceden según sus cursos y permisos.",
    ),
    link: translate("Conocer la plataforma web"),
    href: "/#funciones",
  },
  {
    id: "comunidad",
    title: translate("Actividades y devocionales"),
    text: translate(
      "Organiza retiros y actividades con formularios de inscripción, participantes, responsables, tareas, abonos y presupuesto. Marca la llegada de los inscritos y descarga su lista en CSV. Comparte devocionales de iglesia y célula para acompañar a tu comunidad durante la semana.",
    ),
    link: translate("Leer devocionales públicos"),
    href: appPath("/devocionales/publicados"),
  },
];
export default function ProductGuide() {
  return (
    <div className="landing product-guide">
      <header className="guide-header landing-container">
        <a
          href={localizedPath("/")}
          aria-label={translate("SheepLink, inicio")}
        >
          <img
            src="/brand/sheeplink-logo-green.svg"
            alt={translate("SheepLink")}
            width="170"
            height="44"
          />
        </a>
        <a href={localizedPath("/#precios")}>{translate("Ver planes")}</a>
      </header>
      <main className="landing-container">
        <nav
          className="guide-breadcrumb"
          aria-label={translate("Ruta de navegación")}
        >
          <a href={localizedPath("/")}>{translate("Inicio")}</a>
          <span aria-hidden="true">/</span>
          <span>{translate("Qué es SheepLink")}</span>
        </nav>
        <section className="guide-intro">
          <h1>
            {translate("SheepLink para")}
            <br />
            {translate("tu iglesia.")}
          </h1>
          <div>
            <p>
              {translate(
                "SheepLink es un software de gestión para iglesias en español, inglés y portugués. Reúne integrantes, células, asistencia, ministerios, escuela bíblica, actividades y devocionales en una plataforma web.",
              )}
            </p>
            <p>
              {translate(
                "Está pensado para pastores y líderes que necesitan organizar a su comunidad y dar seguimiento a las personas. Su app móvil acerca las tareas del día a día a quienes sirven en la iglesia.",
              )}
            </p>
            <a
              className="guide-cta"
              href={localizedPath(appPath(PRICING.registrationPath))}
            >
              {PRICING.cta}
            </a>
            <small>{PRICING.disclosure}</small>
          </div>
        </section>
        <nav
          className="guide-topics"
          aria-label={translate("Funciones de SheepLink")}
        >
          {capabilities.map((c) => (
            <a href={localizedPath(`#${c.id}`)} key={c.id}>
              {c.title}
            </a>
          ))}
          <a href="#datos">{translate("Migración y exportaciones")}</a>
          <a href="#app">{translate("App móvil")}</a>
        </nav>
        {capabilities.map((c) => (
          <section className="guide-chapter" id={c.id} key={c.id}>
            <h2>{c.title}</h2>
            <div>
              <p>{c.text}</p>
              <a className="landing-text-link" href={localizedPath(c.href)}>
                {c.link}
              </a>
            </div>
          </section>
        ))}
        <section className="guide-chapter" id="datos">
          <h2>{translate("Migración y exportaciones")}</h2>
          <div>
            <p>{MIGRATION_COPY}</p>
            <p>{EXPORTS_COPY}</p>
          </div>
        </section>
        <section className="guide-chapter" id="app">
          <h2>{translate("Tu iglesia en el celular.")}</h2>
          <div>
            <p>
              {translate(
                "App para integrantes y líderes de iglesias: cumpleaños, turnos de servicio, célula, asistencia y perfil. Requiere una cuenta activa de tu iglesia. Disponible para iPhone; APK para Android por envío y Google Play próximamente.",
              )}
            </p>
            <p>
              {translate(
                "La plataforma web también funciona en el navegador del celular y reúne cursos, materiales, actividades, presupuesto, tesorería e inventario. Las funciones disponibles en la app dependen de los permisos y de la versión instalada.",
              )}
            </p>
            <a
              className="landing-text-link"
              href={localizedPath("/#app-movil")}
            >
              {translate("Ver la app y descargar para iPhone")}
            </a>
          </div>
        </section>
        <section className="guide-chapter">
          <h2>{translate("Roles y acceso.")}</h2>
          <div>
            <p>
              {translate(
                "Cada persona usa una cuenta propia. El líder de célula accede a las células que tiene asignadas; los líderes de zona y sector trabajan dentro de su ámbito. Tesorería tiene permisos específicos de lectura, gestión y acceso. Los datos se separan por iglesia y las acciones se validan en el servidor.",
              )}
            </p>
            <p>
              {translate(
                "Los permisos acompañan estas responsabilidades. La información de la iglesia requiere autenticación; esta web pública muestra funciones y ejemplos de demostración.",
              )}
            </p>
            <a
              className="landing-text-link"
              href={localizedPath("/privacidad")}
            >
              {translate("Consultar la política de privacidad")}
            </a>
          </div>
        </section>
        <section className="guide-chapter" id="capacidad">
          <h2>{translate("Planes para tu comunidad.")}</h2>
          <div>
            <p>
              {translate(
                "Los planes mensuales y anuales se muestran en dólares estadounidenses y varían según los límites de integrantes, células, ministerios y cuentas de usuario. Consulta los precios y condiciones vigentes antes de registrar tu iglesia.",
              )}
            </p>
            <p>{CAPACITY_COPY}</p>
            <p>
              {PRICING.disclosure} {PRICING.cancellation}
            </p>
            <a className="landing-text-link" href={localizedPath("/#precios")}>
              {translate("Comparar planes y precios de SheepLink")}
            </a>
          </div>
        </section>
        <section className="guide-questions">
          <h2>{translate("Preguntas sobre SheepLink")}</h2>
          <div className="landing-faq-list">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="guide-footer landing-container">
        <a href={localizedPath("/")}>{translate("Volver a SheepLink")}</a>
        <a href={localizedPath("/soporte")}>{translate("Ayuda con la app")}</a>
        <LegalLinks />
      </footer>
    </div>
  );
}
