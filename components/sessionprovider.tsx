// components/SessionProvider.tsx
"use client";

import React, { useEffect, useState, createContext } from "react";
import { supabase } from "@/supabase-client";

export const SessionContext = createContext<any>(null);

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      console.log("Initial session:", data.session);
    };
    getSession();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log("Auth state changed:", session);
    });

    // cleanup
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}