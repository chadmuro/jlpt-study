import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from "react";
import { Session } from "@supabase/supabase-js";

import { supabase } from "../utils/supabase";

type SessionContextType = {
  session: Session | null;
};

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

const SessionProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const value = { session };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSession };
