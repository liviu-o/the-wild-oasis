import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bwdujngysuvtwrofkqdk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZHVqbmd5c3V2dHdyb2ZrcWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NDQzODQsImV4cCI6MjAxMjUyMDM4NH0.ksaONAFu6Vgwg3t3DSnexbZ8V7xHODtHazKqWCURhxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
