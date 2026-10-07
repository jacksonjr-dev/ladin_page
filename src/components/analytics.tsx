import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  getConsent,
  loadTracking,
  setConsent,
  trackWhatsAppClick,
  trackingConfigured,
} from "@/lib/analytics";

const WHATSAPP_HOST = "api.whatsapp.com";

/** Loads measurement after consent, counts WhatsApp clicks, and shows the cookie notice. */
export function Analytics() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!trackingConfigured) return;

    const consent = getConsent();
    if (consent === "granted") loadTracking();
    if (consent === null) setOpen(true);

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      try {
        if (new URL(link.href).hostname === WHATSAPP_HOST) {
          trackWhatsAppClick(link.closest("header, footer, main")?.tagName.toLowerCase() ?? "page");
        }
      } catch {
        // Not a valid URL: nothing to track.
      }
    };
    const reopen = () => setOpen(true);

    document.addEventListener("click", onClick);
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(CONSENT_EVENT, reopen);
    };
  }, []);

  if (!trackingConfigured || !open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <p>
        Usamos cookies para medir o uso do site e a eficácia dos nossos anúncios, mas só se você
        aceitar. Saiba mais na <Link to="/privacidade">política de privacidade</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-button secondary" onClick={() => choose("denied")}>
          Recusar
        </button>
        <button type="button" className="cookie-button primary" onClick={() => choose("granted")}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
