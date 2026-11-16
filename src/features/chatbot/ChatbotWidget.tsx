import {
  translate,
  localizedPath,
  systemMessage,
  language,
} from "../../shared/i18n/index.ts";
import { FormEvent, useEffect, useRef, useState } from "react";
import "./chatbot.css";

declare global {
  interface Window {
    __SHEEPLINK_CONFIG__?: { appUrl?: string; apiUrl?: string };
  }
}

type Message = { role: "assistant" | "user"; text: string };

function renderMessage(text: string) {
  return text
    .split(
      /(https:\/\/app\.sheeplink\.app\/soporte|https:\/\/wa\.me\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g,
    )
    .map((part, index) => {
      if (part === "https://app.sheeplink.app/soporte") {
        return (
          <a
            key={index}
            href={localizedPath(part)}
            target="_blank"
            rel="noreferrer"
          >
            {translate("Contactar soporte")}
          </a>
        );
      }
      if (part.startsWith("https://wa.me/")) {
        return (
          <a
            key={index}
            href={localizedPath(part)}
            target="_blank"
            rel="noreferrer"
          >
            {translate("Abrir WhatsApp")}
          </a>
        );
      }
      if (part === "krecarfaz@gmail.com") {
        return (
          <a key={index} href="mailto:krecarfaz@gmail.com">
            {part}
          </a>
        );
      }
      return part;
    });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: translate(
        "¡Hola! Soy el asistente de SHEEPLINK. Puedo orientarte sobre Dashboard, Mi espacio, mensajes, comunidad, organización, formación, actividades, planes y uso desde el celular. Si encuentras un bug o error, te indico cómo contactar soporte. ¿Qué necesitas saber?",
      ),
    },
  ]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, sending, open]);

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = draft.trim();
    if (!message || sending) return;
    setDraft("");
    setMessages((current) => [...current, { role: "user", text: message }]);
    setSending(true);
    try {
      const apiUrl = (
        window.__SHEEPLINK_CONFIG__?.apiUrl || "https://api.sheeplink.app"
      ).replace(/\/$/, "");
      const response = await fetch(`${apiUrl}/api/chatbot/message`, {
        method: "POST",
        credentials: "omit",
        headers: {
          "content-type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          "Accept-Language": language,
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (!response.ok || typeof data.reply !== "string")
        throw new Error(translate("Chat request failed"));
      setMessages((current) => [
        ...current,
        { role: "assistant", text: systemMessage(data.reply) },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: translate(
            "No pude conectar ahora. Contacta soporte aquí: https://app.sheeplink.app/soporte. También puedes escribirnos a krecarfaz@gmail.com o por WhatsApp al +51 981 427 532.",
          ),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="sl-chat" aria-label={translate("Chat de SHEEPLINK")}>
      {open && (
        <section
          className="sl-chat__panel"
          aria-label={translate("Asistente SHEEPLINK")}
        >
          <header className="sl-chat__header">
            <span className="sl-chat__avatar" aria-hidden="true">
              {translate("S")}
            </span>
            <span>
              <strong>{translate("Asistente SHEEPLINK")}</strong>
              <small>{translate("Respuestas automáticas")}</small>
            </span>
            <button
              className="sl-chat__close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label={translate("Cerrar chat")}
            >
              ×
            </button>
          </header>
          <div className="sl-chat__messages" ref={listRef} aria-live="polite">
            {messages.map((item, index) => (
              <p
                className={`sl-chat__message sl-chat__message--${item.role}`}
                key={`${item.role}-${index}`}
              >
                {renderMessage(item.text)}
              </p>
            ))}
            {sending && (
              <p className="sl-chat__message sl-chat__message--assistant">
                {translate("Escribiendo…")}
              </p>
            )}
          </div>
          <form className="sl-chat__form" onSubmit={send}>
            <input
              aria-label={translate("Escribe tu consulta")}
              maxLength={500}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={translate("Escribe tu consulta…")}
            />
            <button
              type="submit"
              disabled={!draft.trim() || sending}
              aria-label={translate("Enviar consulta")}
            >
              {translate("Enviar")}
            </button>
          </form>
          <p className="sl-chat__notice">
            {translate(
              "Asistente automático de reglas. No uses el chat para compartir datos privados.",
            )}
          </p>
        </section>
      )}
      <button
        className="sl-chat__launcher"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? "×" : "✦"}</span>
        {open ? translate("Cerrar") : translate("¿Necesitas ayuda?")}
      </button>
    </div>
  );
}
