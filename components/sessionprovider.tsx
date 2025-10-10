"use client";

import React, { useEffect, useState, createContext } from "react";
import { getSupabaseClient } from "@/supabase-client";

export const SessionContext = createContext<any>(null);

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return; // Prevent crash on build

    // Get initial session
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      console.log("Initial session:", data.session);
    };
    init();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session);
      console.log("Auth state changed:", session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}