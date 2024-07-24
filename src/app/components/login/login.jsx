import { useState } from 'react';
import './login.css';
import { useRouter } from 'next/router';



function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signIn({
            email,
            password
        });
        if (error) setError(error.message);
    };

    return (
        <form className='frm' onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input className='frm-btn-login' type="submit" value='Iniciar Sesión' />
            <span>ó</span>
            <input className='frm-btn-create' type="button" value='Crear cuenta'
                onClick={() => {
                    router.push('/registro');
                }}/>
            {error && <p>{error}</p>}
        </form>
    );
}

export default Login;