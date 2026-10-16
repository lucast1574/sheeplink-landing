import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./features/landing/pages/Landing";
import LegalPage from "./features/legal/pages/LegalPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terminos" element={<LegalPage document="terms" />} />
        <Route path="/privacidad" element={<LegalPage document="privacy" />} />
        <Route path="/cookies" element={<LegalPage document="cookies" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
