import { Link } from "react-router-dom";

export function LegalLinks() {
  return (
    <nav
      aria-label="Información legal"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px 20px",
        fontSize: "0.85rem",
        padding: "16px 0",
      }}
    >
      <Link to="/terminos">Términos y condiciones</Link>
      <Link to="/privacidad">Privacidad</Link>
      <Link to="/cookies">Cookies</Link>
    </nav>
  );
}
