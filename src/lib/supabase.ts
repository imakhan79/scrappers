import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Null when env vars are missing, so the site still renders (the form reports the problem).
export const supabase = url && anonKey ? createClient(url, anonKey, { auth: { persistSession: false } }) : null
