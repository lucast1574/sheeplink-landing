import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./SiteRoutes";
import ChatbotWidget from "./features/chatbot/ChatbotWidget";
import { language } from "./shared/i18n/index.ts";
export default function App() {
  return (
    <BrowserRouter basename={"/" + language}>
      <SiteRoutes />
      <ChatbotWidget />
    </BrowserRouter>
  );
}
