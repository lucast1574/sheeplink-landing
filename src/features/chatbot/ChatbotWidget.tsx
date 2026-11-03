import { FormEvent, useEffect, useRef, useState } from "react";
import "./chatbot.css";

declare global {
  interface Window {
    __SHEEPLINK_CONFIG__?: { appUrl?: string; apiUrl?: string };
  }
}

type Message = { role: "assistant" | "user"; text: string };

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "¡Hola! Soy el asistente de SHEEPLINK. Puedo orientarte sobre funciones, grupos, asistencia, planes y contacto. ¿Qué necesitas saber?" },
  ]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, open]);

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = draft.trim();
    if (!message || sending) return;
    setDraft("");
    setMessages((current) => [...current, { role: "user", text: message }]);
    setSending(true);
    try {
      const apiUrl = (window.__SHEEPLINK_CONFIG__?.apiUrl || "https://api.sheeplink.app").replace(/\/$/, "");
      const response = await fetch(`${apiUrl}/api/chatbot/message`, {
        method: "POST",
        credentials: "omit",
        headers: { "content-type": "application/json", "x-requested-with": "XMLHttpRequest" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (!response.ok || typeof data.reply !== "string") throw new Error("Chat request failed");
      setMessages((current) => [...current, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", text: "No pude conectar ahora. Escríbenos a krecarfaz@gmail.com o por WhatsApp al +51 981 427 532." }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="sl-chat" aria-label="Chat de SHEEPLINK">
      {open && (
        <section className="sl-chat__panel" aria-label="Asistente SHEEPLINK">
          <header className="sl-chat__header">
            <span className="sl-chat__avatar" aria-hidden="true">S</span>
            <span><strong>Asistente SHEEPLINK</strong><small>Respuestas automáticas</small></span>
            <button className="sl-chat__close" type="button" onClick={() => setOpen(false)} aria-label="Cerrar chat">×</button>
          </header>
          <div className="sl-chat__messages" ref={listRef} aria-live="polite">
            {messages.map((item, index) => <p className={`sl-chat__message sl-chat__message--${item.role}`} key={`${item.role}-${index}`}>{item.text}</p>)}
            {sending && <p className="sl-chat__message sl-chat__message--assistant">Escribiendo…</p>}
          </div>
          <form className="sl-chat__form" onSubmit={send}>
            <input aria-label="Escribe tu consulta" maxLength={500} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Escribe tu consulta…" />
            <button type="submit" disabled={!draft.trim() || sending} aria-label="Enviar consulta">Enviar</button>
          </form>
          <p className="sl-chat__notice">Asistente automático de reglas. No uses el chat para compartir datos privados.</p>
        </section>
      )}
      <button className="sl-chat__launcher" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span aria-hidden="true">{open ? "×" : "✦"}</span>{open ? "Cerrar" : "¿Necesitas ayuda?"}
      </button>
    </div>
  );
}
