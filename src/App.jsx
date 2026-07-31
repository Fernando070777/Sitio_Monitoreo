import { useState } from 'react';
import { Login } from './Login';
import MenuNavegacion from './Home'; 
import Texto from './Texto';
import Telemetrias from './Telemetrias';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setOpcionSeleccionada('');
  };

  // Función para capturar lo que el usuario presiona en el Mega Menu
  const handleSeleccionarSubopcion = (subopcion) => {
    console.log("Subopción seleccionada:", subopcion);
    setOpcionSeleccionada(subopcion);
  };

  return (
    <main className="app-container">
      {isAuthenticated ? (
        <div className="dashboard-layout">
          <MenuNavegacion onSeleccionarSubopcion={handleSeleccionarSubopcion} />
          
          {/* Contenido principal tras iniciar sesión */}
          <section className="contenido-principal">
            <button onClick={handleLogout} className="btn_logout">Cerrar Sesión</button>
            
            {opcionSeleccionada && (
              <p>Estás viendo: <strong>{opcionSeleccionada}</strong></p>
            )}

            <Texto />

            {/* Muestra Telemetrias si se selecciona en el menú o lo renderiza por defecto */}
            {opcionSeleccionada === 'Telemetrias' ? (
              <Telemetrias />
            ) : (
              <Telemetrias />
            )}
          </section>
          <section></section>
        </div>
      ) : (
        <Login onLoginSuccess={handleLogin} />
      )}
    </main>
  );
}