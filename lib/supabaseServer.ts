// lib/supabaseServer.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,   // same project URL
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // more powerful key
  {
    auth: { persistSession: false }, // server has no localStorage
  }
);
