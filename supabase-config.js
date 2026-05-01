// supabase-config.js - FIXED VERSION
// No "const supabase" - we'll attach to window

const SUPABASE_URL = 'https://yakusekcvidtvgcbbeap.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_s0CWHnbcqVTVHScSM4dMGQ_GYliBfEu';

// Create supabase client and attach to window
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);