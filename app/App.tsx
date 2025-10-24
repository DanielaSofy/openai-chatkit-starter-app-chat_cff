"use client";

import { useEffect, useRef } from "react";
import {
  CREATE_SESSION_ENDPOINT,
  STARTER_PROMPTS,
  PLACEHOLDER_INPUT,
  GREETING,
  getThemeConfig,
} from "@/lib/config";

export default function Home() {
  const elRef = useRef<any>(null);

  useEffect(() => {
    customElements.whenDefined("openai-chatkit").then(() => {
      const el = elRef.current as any;
      if (!el) return;

      el.setOptions({
        // 👇 Tu personalización desde lib/config.ts
        startScreen: { greeting: GREETING, prompts: STARTER_PROMPTS },
        placeholder: PLACEHOLDER_INPUT,
        theme: getThemeConfig("light"), // usa "dark" si prefieres tema oscuro

        // 👇 Endpoint del starter (no cambiar)
        api: {
          async getClientSecret() {
            const res = await fetch(CREATE_SESSION_ENDPOINT, {
              method: "POST",
              credentials: "include",
            });
            const { client_secret } = await res.json();
            return client_secret;
          },
        },
      });
    });
  }, []);

  return (
    <main style={{ height: "100vh", width: "100%" }}>
      <openai-chatkit ref={elRef} style={{ display: "block", height: "100%" }} />
    </main>
  );
}
