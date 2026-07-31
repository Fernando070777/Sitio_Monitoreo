import { useState } from 'react';
import Logo from './assets/Logo.svg';

export function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email !== '' && password !== '') {
      onLoginSuccess();
    } else {
      alert('Por favor llena todos los campos');
    }
  };

  return (
    <main className="login_main">
        <div className="login_">
        <div>
          <img src={Logo} />
        </div>  
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <div className='input_1'>
            <h3>User</h3>
            <input 
            type="email" 
            placeholder="Correo" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            </div>
            <div className='login_2'>
                <h3>Password</h3>
            <input 
            type="password" 
            placeholder="Contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            </div>
            <h5></h5>
            <button type="submit">Entrar</button>
        </form>
        </div>
    </main>
    
  );
}