import { translate } from "../../shared/i18n/index.ts";
import { Link } from "react-router-dom";

export function LegalLinks() {
  return (
    <nav
      aria-label={translate("Información legal")}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px 20px",
        fontSize: "0.85rem",
        padding: "16px 0",
      }}
    >
      <Link to="/terminos">{translate("Términos y condiciones")}</Link>
      <Link to="/privacidad">{translate("Privacidad")}</Link>
      <Link to="/cookies">{translate("Cookies")}</Link>
      <Link to="/soporte">{translate("Soporte")}</Link>
    </nav>
  );
}
