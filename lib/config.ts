import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  { label: "Redactar escrito al SAT", prompt: "Ayúdame a redactar un escrito al SAT solicitando la línea de captura para regularizarme dentro de un acuerdo conclusivo. Tono formal y estructura jurídica.", icon: "pencil" },
  { label: "Recursos y plazos", prompt: "¿Cuáles son los plazos y requisitos para interponer un recurso de revocación ante el SAT en México? Responde claro y con fundamento.", icon: "book" },
  { label: "Mejorar redacción", prompt: "Mejora este texto con estilo técnico, formal y breve: ", icon: "sparkles" },
];
export const PLACEHOLDER_INPUT = "Ask anything...";
export const GREETING = "How can I help you today?";
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});