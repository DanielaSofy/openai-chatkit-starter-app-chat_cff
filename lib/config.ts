// lib/config.ts
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// Si ya usas la var de entorno en Vercel, déjalo así:
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

// El endpoint del starter (no lo cambies)
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

/**
 * Prompts que aparecen en la pantalla de inicio del chat.
 * Personalízalos a tu flujo legal.
 */
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Redactar escrito al SAT",
    prompt: "Ayúdame a redactar un escrito al SAT solicitando la línea de captura para regularizarme dentro de un acuerdo conclusivo. Considera tono formal y estructura jurídica.",
    icon: "file-text",
  },
  {
    label: "Recursos y plazos",
    prompt: "¿Cuáles son los plazos y requisitos para interponer un recurso de revocación ante el SAT en México? Responde de forma clara y con fundamento.",
    icon: "scale",
  },
  {
    label: "Mejorar redacción",
    prompt: "Mejora este texto con estilo técnico, formal y breve: ",
    icon: "wand-magic",
  },
  {
    label: "Checklist de anexos",
    prompt: "Dame un checklist de anexos para acompañar un escrito de aclaración ante la autoridad recaudadora (originales para cotejo y copias legibles).",
    icon: "check",
  },
];

/** Placeholder del input */
export const PLACEHOLDER_INPUT = "Escribe tu consulta legal…";

/** Título de bienvenida */
export const GREETING = "¿En qué puedo ayudarte hoy?";

/**
 * Tema visual del chat.
 * - Cambia `accent.primary` para ajustar el color de marca.
 * - `theme` será "light" o "dark" según cómo lo llame tu app.
 */
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    // Color principal (elige uno):
    // Azul Bootstrap: "#0d6efd"
    // Azul que usaste en el botón flotante: "#0071e3"
    accent: {
      primary: "#0071e3",
      level: 1,
    },
  },
  // Bordes redondeados del UI del chat: "none" | "soft" | "round" (depende del starter)
  radius: "round",
  // Puedes agregar más opciones soportadas por tu versión del starter aquí.
  // Revisa el playground: chatkit.studio/playground
});
