// Supabase client. When VITE_* env vars are missing (e.g. GitHub Pages build without secrets),
// createClient(undefined, undefined) throws at import time and the whole app stays blank.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const urlFromEnv = import.meta.env.VITE_SUPABASE_URL?.trim();
const keyFromEnv = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

/** True when real project URL/key are set at build time. */
export function isSupabaseEnvConfigured(): boolean {
  return Boolean(urlFromEnv && keyFromEnv);
}

// Placeholder project (public demo shape) — only used so the module loads; real calls must be gated.
const PLACEHOLDER_URL = "https://placeholder.supabase.co";
const PLACEHOLDER_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";

const SUPABASE_URL = urlFromEnv || PLACEHOLDER_URL;
const SUPABASE_PUBLISHABLE_KEY = keyFromEnv || PLACEHOLDER_ANON_KEY;

// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});