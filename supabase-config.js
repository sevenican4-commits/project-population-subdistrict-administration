// supabase-config.js

import { createClient } from '@supabase/supabase-js';

// Supabase configuration constants
const SUPABASE_URL = 'https://your-supabase-url.supabase.co'; // replace with your Supabase URL
const SUPABASE_ANON_KEY = 'your-anon-key'; // replace with your Supabase anon key

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;