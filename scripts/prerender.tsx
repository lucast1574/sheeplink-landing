import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import SiteRoutes from "../src/SiteRoutes";
export {
  PUBLIC_PAGES,
  SITE_URL,
  APP_URL,
  SOCIAL_IMAGE,
} from "../src/shared/config/seo";
export function renderPage(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <SiteRoutes />
    </StaticRouter>,
  );
}
