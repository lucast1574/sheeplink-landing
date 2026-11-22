import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import SiteRoutes from "../src/SiteRoutes";
import ChatbotWidget from "../src/features/chatbot/ChatbotWidget";
import {
  language,
  localizedPath,
  SUPPORTED_LANGUAGES,
} from "../src/shared/i18n/index";
export {
  PUBLIC_PAGES,
  SITE_URL,
  SOCIAL_IMAGE_ALT,
  OG_LOCALE,
  pageAlternates,
} from "../src/shared/config/seo";
export { language, localizedPath, SUPPORTED_LANGUAGES };

export function renderPage(path: string) {
  return renderToString(
    <StaticRouter basename={localizedPath("/")} location={localizedPath(path)}>
      <SiteRoutes />
      <ChatbotWidget />
    </StaticRouter>,
  );
}

export { structuredData } from "../src/structuredData";
