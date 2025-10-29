import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  // 🔹 PRODECON (Acuerdos Conclusivos)
  {
    label: "Acuerdo conclusivo",
    prompt: "¿Qué es un acuerdo conclusivo ante la PRODECON y cuándo puede solicitarlo un contribuyente?"
  },

  // 🔹 Medios Electrónicos
  {
    label: "Firma electrónica y certificados digitales",
    prompt: "¿Qué reglas establece el CFF sobre la firma electrónica avanzada y los certificados de sello digital?"
  },

  // 🔹 Notificaciones y Garantía del Interés Fiscal
  {
    label: "Garantía del interés fiscal",
    prompt: "¿Cómo puede un contribuyente garantizar el interés fiscal según el CFF?"
  },

  // 🔹 Procedimiento Administrativo de Ejecución (PAE)
  {
    label: "Embargo y remate",
    prompt: "¿Qué bienes pueden ser embargados y cuál es el procedimiento de remate conforme al CFF?"
  },

  // 🔹 Recurso de Revocación
  {
    label: "Recurso exclusivo de fondo",
    prompt: "¿Qué es el recurso de revocación exclusivo de fondo y en qué casos procede?"
  },

  // 🔹 Esquemas Reportables
  {
    label: "Revelación de esquemas reportables",
    prompt: "¿Qué se entiende por esquema reportable y quiénes están obligados a revelarlo según el CFF?"
  },
  {
    label: "Sanciones por no revelar esquemas",
    prompt: "¿Qué sanciones prevé el CFF por incumplir la obligación de revelar esquemas reportables?"
  }
];
export const PLACEHOLDER_INPUT = "Escribe tu consulta fiscal aquí…";
export const GREETING = "Hola, soy tu asistente del CFF. ¿Sobre qué tema necesitas fundamento?";
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#3a60b9ff",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});