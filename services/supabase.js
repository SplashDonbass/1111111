import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const SUPABASE_URL = 'https://zhzayljqaekrnkdthluy.supabase.co'
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoemF5bGpxYWVrcm5rZHRobHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5MzAzNjUsImV4cCI6MjA0NTUwNjM2NX0.qHha6dCXcTo0TaBPGcwkJLuswGyMHaME_HjzMuOu7do'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase
