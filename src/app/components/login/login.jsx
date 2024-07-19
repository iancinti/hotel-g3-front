import './login.css';


const onLogin = () =>{
    // alert('HOla');
}

function Login() {
    return (
        <form className='frm'>
            <input className='frm-gmail' type="text" placeholder='correo'/>
            <input className='frm-pass' type="text" placeholder='contraseña'/>
            <input className='frm-btn-login' type="submit" value='Iniciar Sesión' />
            <span>ó</span>
            <input className='frm-btn-create' type="submit" value='Crear cuenta' onClick={onLogin()} />
        </form>
    );
}

export default Login;