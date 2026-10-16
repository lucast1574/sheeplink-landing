import { appPath } from "../../../shared/config/sites";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mark from "../../../assets/sheeplink-mark-green.svg";
import {
  LEGAL_CONTACT,
  LEGAL_DOCUMENTS,
  LEGAL_VERSION,
  type LegalDocumentKey,
} from "../legal.content";
import { LegalLinks } from "../LegalLinks";
import "./legal.css";

export default function LegalPage({
  document: kind,
}: {
  document: LegalDocumentKey;
}) {
  const content = LEGAL_DOCUMENTS[kind];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content.title]);
  return (
    <div className="legal-page">
      <header className="legal-top">
        <Link to="/" className="legal-brand">
          <img src={mark} alt="" width={34} height={34} />
          SHEEPLINK
        </Link>
        <a href={appPath("/login")}>Iniciar sesión</a>
      </header>
      <main className="legal-main">
        <div className="legal-intro">
          <span>INFORMACIÓN LEGAL</span>
          <h1>{content.title}</h1>
          <p>{content.summary}</p>
          <small>
            Última actualización:{" "}
            <time dateTime={LEGAL_VERSION}>16 de octubre de 2026</time> ·
            Versión {LEGAL_VERSION}
          </small>
        </div>
        <LegalLinks />
        <div className="legal-body">
          {content.sections.map((section, index) => (
            <section key={section.title} id={`seccion-${index + 1}`}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        {kind === "privacy" && (
          <p className="legal-source">
            Referencias para Perú:{" "}
            <a
              href="https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/243470"
              target="_blank"
              rel="noreferrer"
            >
              Ley N.º 29733
            </a>
            ,{" "}
            <a
              href="https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus"
              target="_blank"
              rel="noreferrer"
            >
              reglamento vigente
            </a>{" "}
            y{" "}
            <a href="https://www.gob.pe/anpd" target="_blank" rel="noreferrer">
              ANPD
            </a>
            .
          </p>
        )}
        <aside className="legal-contact">
          <h2>¿Necesitas ayuda?</h2>
          <p>
            Para consultas del servicio o solicitudes relacionadas con tus
            datos, escribe a{" "}
            <a href={`mailto:${LEGAL_CONTACT}`}>{LEGAL_CONTACT}</a>.
          </p>
        </aside>
      </main>
      <footer className="legal-footer">
        <LegalLinks />
        <Link to="/">Volver a SHEEPLINK</Link>
      </footer>
    </div>
  );
}
