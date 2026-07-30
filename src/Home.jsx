// src/components/Home.jsx
export function Home({ onLogout }) {
  return (
    <div className="home-container">
      <h1>Bienvenido a la Página Principal 🎉</h1>
      <p>Aquí va el contenido principal de tu aplicación.</p>
      
      {/* Botón para cerrar sesión si el usuario quiere salir */}
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
}