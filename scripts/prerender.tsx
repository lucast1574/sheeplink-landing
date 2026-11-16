import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import SiteRoutes from "../src/SiteRoutes";
import { language, localizedPath } from "../src/shared/i18n/index";
export {
  PUBLIC_PAGES,
  SITE_URL,
  APP_URL,
  SOCIAL_IMAGE,
  SOCIAL_IMAGE_ALT,
  OG_LOCALE,
  pageAlternates,
} from "../src/shared/config/seo";
export function renderPage(path: string, localized = false) {
  return renderToString(
    <StaticRouter
      basename={localized ? "/" + language : undefined}
      location={localized ? localizedPath(path) : path}
    >
      <SiteRoutes />
    </StaticRouter>,
  );
}

export { structuredData } from "../src/structuredData";
