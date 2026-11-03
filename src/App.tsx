import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./SiteRoutes";
import ChatbotWidget from "./features/chatbot/ChatbotWidget";
export default function App() {
  return (
    <BrowserRouter>
      <SiteRoutes />
      <ChatbotWidget />
    </BrowserRouter>
  );
}
