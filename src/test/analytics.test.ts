import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

async function loadModule() {
  vi.resetModules();
  return import("@/lib/analytics");
}

const gtagEvents = () =>
  (window.dataLayer ?? []).map((entry) => Array.from(entry as ArrayLike<unknown>));

describe("analytics consent", () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete window.dataLayer;
    delete window.gtag;
    document.head.querySelectorAll('script[src*="googletagmanager"]').forEach((s) => s.remove());
  });
  afterEach(() => vi.unstubAllEnvs());

  it("does nothing when no tracking ID is configured", async () => {
    const analytics = await loadModule();

    expect(analytics.trackingConfigured).toBe(false);
    analytics.setConsent("granted");
    analytics.trackWhatsAppClick("header");

    expect(window.gtag).toBeUndefined();
    expect(document.head.querySelector('script[src*="googletagmanager"]')).toBeNull();
  });

  it("loads nothing and tracks nothing until the visitor accepts", async () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST123");
    const analytics = await loadModule();

    expect(analytics.trackingConfigured).toBe(true);
    expect(analytics.getConsent()).toBeNull();
    analytics.trackWhatsAppClick("header");
    expect(window.gtag).toBeUndefined();

    analytics.setConsent("denied");
    analytics.trackWhatsAppClick("header");
    expect(window.gtag).toBeUndefined();
    expect(document.head.querySelector('script[src*="googletagmanager"]')).toBeNull();
  });

  it("loads the tag and counts WhatsApp clicks and leads after acceptance", async () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST123");
    vi.stubEnv("VITE_GADS_ID", "AW-111");
    vi.stubEnv("VITE_GADS_WHATSAPP_LABEL", "abc");
    const analytics = await loadModule();

    analytics.setConsent("granted");
    analytics.trackWhatsAppClick("footer");
    analytics.trackFormSubmit();

    const script = document.head.querySelector<HTMLScriptElement>(
      'script[src*="googletagmanager"]',
    );
    expect(script?.src).toContain("id=G-TEST123");
    const events = gtagEvents();
    expect(events).toContainEqual(["config", "G-TEST123"]);
    expect(events).toContainEqual(["event", "whatsapp_click", { link_location: "footer" }]);
    expect(events).toContainEqual(["event", "conversion", { send_to: "AW-111/abc" }]);
    expect(events).toContainEqual(["event", "generate_lead", { method: "contact_form" }]);
  });
});
