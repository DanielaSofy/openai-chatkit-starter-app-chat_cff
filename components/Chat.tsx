// components/Chat.tsx
"use client";

import { ChatKit } from "@openai/chatkit/react";
import {
  CREATE_SESSION_ENDPOINT,
  STARTER_PROMPTS,
  PLACEHOLDER_INPUT,
  GREETING,
  getThemeConfig,
} from "@/lib/config";

export default function Chat() {
  return (
    <ChatKit
      // UI en español y tus textos
      options={{
        locale: "es",
        startScreen: {
          greeting: GREETING || "¿En qué puedo ayudarte hoy?",
          prompts: STARTER_PROMPTS,
        },
        placeholder: PLACEHOLDER_INPUT || "Escribe tu consulta legal…",
        theme: getThemeConfig("light"),
        composer: {
          attachments: { enabled: true },
        },
      }}
      // Token efímero
      api={{
        async getClientSecret() {
          const res = await fetch(CREATE_SESSION_ENDPOINT, {
            method: "POST",
            credentials: "include",
          });
          if (!res.ok) {
            throw new Error(`create-session ${res.status} ${await res.text()}`);
          }
          const { client_secret } = await res.json();
          return client_secret;
        },
      }}
      style={{ display: "block", height: "100%", width: "100%" }}
    />
  );
}
