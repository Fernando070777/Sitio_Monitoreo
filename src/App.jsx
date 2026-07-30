// src/App.jsx
import { useState } from 'react';
import { Login } from './Login';
import { Home } from './Home';

export default function App() {
  // Estado para saber si el usuario está logueado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Funciones para cambiar el estado
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <main className="app-container">
      {/* Renderizado condicional mediante operador ternario */}
      {isAuthenticated ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLogin} />
      )}
    </main>
  );
}