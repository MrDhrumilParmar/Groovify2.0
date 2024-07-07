// import { Database } from "@/app/interfaces/types_db"
// import { createClient } from "@supabase/supabase-js"

// export const supabaseAdmin = createClient<Database>(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_ROLE_KEY,
// )

// export default supabaseAdmin
import { Database } from "@/app/interfaces/types_db"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseKey)

export default supabaseAdmin