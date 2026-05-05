import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pvjazpxraeyjowijotdm.supabase.co"
const supabaseKey = "sb_publishable_eTcA1lWE7wvKtiOlnD3BEw_dkPx2Xb-"

export const supabase = createClient(supabaseUrl, supabaseKey)