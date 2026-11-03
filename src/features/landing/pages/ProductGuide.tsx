import { PRICING, FAQ } from "../landing.content";
import { appPath } from "../../../shared/config/sites";
import { LegalLinks } from "../../legal/LegalLinks";
import "../landing.css";
import "./product-guide.css";

const capabilities = [
  {
    id: "celulas",
    title: "Células y asistencia",
    text: "Organiza integrantes, zonas y células en una estructura compartida. El líder de célula registra la asistencia de cada encuentro y el líder de zona revisa los grupos que acompaña. Así, la información de las reuniones queda vinculada a cada comunidad.",
    link: "Ver la gestión de células",
    href: "/#funciones",
  },
  {
    id: "ministerios",
    title: "Ministerios y servicio",
    text: "Reúne a los integrantes de cada ministerio y programa sus turnos de servicio. Los responsables organizan la participación de su equipo y cada persona consulta sus responsabilidades. La app móvil permite tener los turnos a mano fuera de la computadora.",
    link: "Explorar los turnos de servicio",
    href: "/#funciones",
  },
  {
    id: "formacion",
    title: "Escuela bíblica",
    text: "La plataforma web reúne cursos y materiales para acompañar la formación de la iglesia. La escuela bíblica forma parte del mismo sistema que las células y los ministerios, para que el equipo pueda organizar tanto el servicio como el aprendizaje.",
    link: "Conocer la plataforma web",
    href: "/#funciones",
  },
  {
    id: "comunidad",
    title: "Actividades y devocionales",
    text: "Organiza actividades con inscripciones y presupuesto, y comparte devocionales de iglesia y célula. SheepLink acompaña tanto la preparación de los encuentros como el contenido que la comunidad consulta durante la semana.",
    link: "Leer devocionales públicos",
    href: appPath("/devocionales/publicados"),
  },
];
export default function ProductGuide() {
  return (
    <div className="landing product-guide">
      <header className="guide-header landing-container">
        <a href="/" aria-label="SheepLink, inicio">
          <img
            src="/brand/sheeplink-logo-green.svg"
            alt="SheepLink"
            width="170"
            height="44"
          />
        </a>
        <a href="/#precios">Ver planes</a>
      </header>
      <main className="landing-container">
        <nav className="guide-breadcrumb" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          <span aria-hidden="true">/</span>
          <span>Qué es SheepLink</span>
        </nav>
        <section className="guide-intro">
          <h1>
            SheepLink para
            <br />
            tu iglesia.
          </h1>
          <div>
            <p>
              SheepLink es un software de gestión para iglesias de habla
              hispana. Conecta integrantes, células, asistencia, ministerios,
              escuela bíblica, actividades y devocionales en una plataforma web.
            </p>
            <p>
              Está pensado para pastores y líderes que necesitan organizar a su
              comunidad y dar seguimiento a las personas. Su app móvil acerca
              las tareas del día a día a quienes sirven en la iglesia.
            </p>
            <a className="guide-cta" href={appPath(PRICING.registrationPath)}>
              {PRICING.cta}
            </a>
            <small>{PRICING.disclosure}</small>
          </div>
        </section>
        <nav className="guide-topics" aria-label="Funciones de SheepLink">
          {capabilities.map((c) => (
            <a href={`#${c.id}`} key={c.id}>
              {c.title}
            </a>
          ))}
          <a href="#app">App móvil</a>
        </nav>
        {capabilities.map((c) => (
          <section className="guide-chapter" id={c.id} key={c.id}>
            <h2>{c.title}</h2>
            <div>
              <p>{c.text}</p>
              <a className="landing-text-link" href={c.href}>
                {c.link}
              </a>
            </div>
          </section>
        ))}
        <section className="guide-chapter" id="app">
          <h2>Tu iglesia en el celular.</h2>
          <div>
            <p>
              La app de SheepLink para iPhone reúne cumpleaños próximos, turnos
              de servicio, tu célula, asistencia y perfil. Necesitas una cuenta
              activa de tu iglesia y las funciones disponibles dependen de tus
              permisos. Android está en preparación.
            </p>
            <p>
              La plataforma web también se puede usar desde el navegador del
              celular. La gestión de cursos, actividades y presupuesto se
              presenta en la plataforma web; la app móvil se centra en el
              acompañamiento diario.
            </p>
            <a className="landing-text-link" href="/#app-movil">
              Ver la app y descargar para iPhone
            </a>
          </div>
        </section>
        <section className="guide-chapter">
          <h2>Roles y acceso.</h2>
          <div>
            <p>
              El pastor principal tiene una visión de toda la iglesia. Los
              líderes de zona acompañan a sus células; los líderes de célula
              registran integrantes y asistencia; los líderes de ministerio
              organizan el servicio. Una misma persona puede tener varios roles.
            </p>
            <p>
              Los permisos acompañan estas responsabilidades. La información de
              la iglesia requiere autenticación; esta web pública muestra
              funciones y ejemplos de demostración.
            </p>
            <a className="landing-text-link" href="/privacidad">
              Consultar la política de privacidad
            </a>
          </div>
        </section>
        <section className="guide-chapter">
          <h2>Planes para tu comunidad.</h2>
          <div>
            <p>
              Los planes mensuales se muestran en dólares estadounidenses y
              varían según los límites de integrantes, células, ministerios y
              cuentas de usuario. Consulta los precios y condiciones vigentes
              antes de registrar tu iglesia.
            </p>
            <p>
              {PRICING.disclosure} {PRICING.cancellation}
            </p>
            <a className="landing-text-link" href="/#precios">
              Comparar planes y precios de SheepLink
            </a>
          </div>
        </section>
        <section className="guide-questions">
          <h2>Preguntas sobre SheepLink</h2>
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
        <a href="/">Volver a SheepLink</a>
        <a href="/soporte">Ayuda con la app</a>
        <LegalLinks />
      </footer>
    </div>
  );
}
