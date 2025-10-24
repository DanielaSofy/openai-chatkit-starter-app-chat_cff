// lib/config.ts
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  { label: "Redactar escrito al SAT", prompt: "Ayúdame a redactar un escrito al SAT solicitando la línea de captura para regularizarme dentro de un acuerdo conclusivo. Tono formal y estructura jurídica.", icon: "file-text" },
  { label: "Recursos y plazos", prompt: "¿Cuáles son los plazos y requisitos para interponer un recurso de revocación ante el SAT en México? Responde claro y con fundamento.", icon: "scale" },
  { label: "Mejorar redacción", prompt: "Mejora este texto con estilo técnico, formal y breve: ", icon: "wand-magic" },
];

export const PLACEHOLDER_INPUT = "Escribe tu consulta legal…";
export const GREETING = "¿En qué puedo ayudarte hoy?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: { hue: 220, tint: 6, shade: theme === "dark" ? -1 : -4 },
    accent: { primary: "#0071e3", level: 1 },
  },
  radius: "round",
});

