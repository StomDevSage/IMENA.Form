// supabase-config.js
// REPLACE WITH YOUR ACTUAL KEYS from Supabase dashboard

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';  // Your URL
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';  // Your anon key

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
