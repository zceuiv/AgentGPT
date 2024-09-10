import { type Language } from "../utils/languages";

export const [GPT360_PRO, GPT_35_TURBO, GPT_35_TURBO_16K, GPT_4] = [
  "360gpt-pro" as const,
  "gpt-3.5-turbo" as const,
  "gpt-3.5-turbo-16k" as const,
  "gpt-4" as const,
];
export const GPT_MODEL_NAMES = [GPT360_PRO, GPT_35_TURBO, GPT_35_TURBO_16K, GPT_4];
export type GPTModelNames = "360gpt-pro" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-4";

export const MAX_TOKENS: Record<GPTModelNames, number> = {
  "360gpt-pro": 7000,
  "gpt-3.5-turbo": 4000,
  "gpt-3.5-turbo-16k": 16000,
  "gpt-4": 4000,
};

export interface ModelSettings {
  language: Language;
  customApiKey: string;
  customModelName: GPTModelNames;
  customTemperature: number;
  customMaxLoops: number;
  maxTokens: number;
}
