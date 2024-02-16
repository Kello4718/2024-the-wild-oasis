import { createClient } from "@supabase/supabase-js";
export const SUPABASE_URL = "https://gpguytmayurzuzrpnzqt.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZ3V5dG1heXVyenV6cnBuenF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MTg5MzksImV4cCI6MjAyMzQ5NDkzOX0.TwsR_nHhzKRKFiKIsaIiERuD_neIm04gD3xWzF4PmsA";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
