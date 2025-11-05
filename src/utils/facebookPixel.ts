interface FacebookPixel {
  (command: "init", pixelId: string): void;
  (command: "track", event: string, parameters?: Record<string, unknown>): void;
  (
    command: "trackCustom",
    event: string,
    parameters?: Record<string, unknown>
  ): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    fbq?: FacebookPixel;
    _fbq?: FacebookPixel;
  }
}

export const initFacebookPixel = (pixelId: string) => {
  if (typeof window === "undefined" || !pixelId) return;

  // Перевірка чи fbq вже повністю завантажено (не просто створено stub)
  if (window.fbq && window.fbq.loaded) {
    return;
  }

  // Офіційний код Meta Pixel (точна копія)
  (function (
    f: Window & typeof globalThis,
    b: Document,
    e: string,
    v: string,
    n?: FacebookPixel,
    t?: HTMLScriptElement,
    s?: Element
  ) {
    if (f.fbq) return;
    n = f.fbq = function () {
      // eslint-disable-next-line prefer-rest-params, @typescript-eslint/no-unused-expressions
      n!.callMethod ? n!.callMethod.apply(n, arguments) : n!.queue!.push(arguments);
    } as FacebookPixel;
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  // Ініціалізація пікселя
  window.fbq!("init", pixelId);
  window.fbq!("track", "PageView");
};

export const trackFacebookEvent = (
  eventName: string,
  data?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, data);
  }
};

export const trackFacebookCustomEvent = (
  eventName: string,
  data?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, data);
  }
};
