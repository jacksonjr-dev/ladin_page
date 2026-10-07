// Measurement for Google Analytics 4 and Google Ads. Nothing loads, and no cookie banner is shown,
// until at least one ID is configured at build time (see .env.example). Scripts are only loaded
// after the visitor accepts cookies (LGPD).

const env = import.meta.env;
const GA_ID = env["VITE_GA_MEASUREMENT_ID"] as string | undefined;
const ADS_ID = env["VITE_GADS_ID"] as string | undefined;
const ADS_WHATSAPP_LABEL = env["VITE_GADS_WHATSAPP_LABEL"] as string | undefined;
const ADS_LEAD_LABEL = env["VITE_GADS_LEAD_LABEL"] as string | undefined;

export const trackingConfigured = Boolean(GA_ID || ADS_ID);

export type Consent = "granted" | "denied";

const STORAGE_KEY = "jpglabs-cookie-consent";
export const CONSENT_EVENT = "jpglabs:open-cookie-preferences";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage can be blocked (private mode); the choice then only lasts for this visit.
  }
  if (value === "granted") loadTracking();
}

let loaded = false;

export function loadTracking() {
  if (loaded || typeof window === "undefined" || !trackingConfigured) return;
  loaded = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function () {
    // gtag.js only understands the `arguments` object, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  if (GA_ID) window.gtag("config", GA_ID);
  if (ADS_ID) window.gtag("config", ADS_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID ?? ADS_ID}`;
  document.head.appendChild(script);
}

function canTrack() {
  return trackingConfigured && getConsent() === "granted" && Boolean(window.gtag);
}

/** A visitor opened the WhatsApp chat from a button or link on the site. */
export function trackWhatsAppClick(location: string) {
  if (!canTrack()) return;
  window.gtag?.("event", "whatsapp_click", { link_location: location });
  if (ADS_ID && ADS_WHATSAPP_LABEL) {
    window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${ADS_WHATSAPP_LABEL}` });
  }
}

/** A visitor sent the contact form (which opens WhatsApp with the message written). */
export function trackFormSubmit() {
  if (!canTrack()) return;
  window.gtag?.("event", "generate_lead", { method: "contact_form" });
  if (ADS_ID && ADS_LEAD_LABEL) {
    window.gtag?.("event", "conversion", { send_to: `${ADS_ID}/${ADS_LEAD_LABEL}` });
  }
}
