"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

const Logout = () => {
    const router = useRouter();
    
    useEffect(()=>{
        const logOut = async()=>{
            await supabase.auth.signOut();
            router.push('/');
        }

        logOut();
    }, []);

};

export default Logout;
