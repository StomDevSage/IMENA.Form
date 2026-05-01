// supabase-config.js
// REPLACE WITH YOUR ACTUAL KEYS from Supabase dashboard

const SUPABASE_URL = 'https://yakusekcvidtvgcbbeap.supabase.co';  // Your URL
const SUPABASE_ANON_KEY = 'sb_publishable_s0CWHnbcqVTVHScSM4dMGQ_GYliBfEu';  // Your anon key

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
