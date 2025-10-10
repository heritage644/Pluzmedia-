// supabase-client.ts
import { createClient } from "@supabase/supabase-js";

let supabase: any = null;

export function getSupabaseClient() {
  if (!supabase) {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn("⚠ Supabase not initialized — missing environment variables");
      return null;
    }

    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  }

  return supabase;
}