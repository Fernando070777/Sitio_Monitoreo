import React from 'react';

function Texto() {
  return (
    <div className="Texto">
      <header className="hero-header">
        <h1>Sistema de Monitoreo, Telemetría y Alertas en Tiempo Real</h1>
        <p className="subtitulo-hero">
          Plataforma integral para el control de dispositivos y detección de anomalías
        </p>
      </header>

      <main className="main-content">
        <section className="seccion-intro">
          <h2>¿Qué es el proyecto?</h2>
          <p>
            Este proyecto es una plataforma diseñada para la <strong>telemetría y supervisión remota de dispositivos</strong>. 
            Su objetivo principal es monitorear métricas clave de forma precisa y continua, permitiendo detectar 
            cualquier anomalía en el sistema para <strong>generar alertas oportunas</strong> antes de que ocurra una falla crítica.
          </p>
        </section>

        <section className="seccion-ambitos">
          <h2>Potencial y Ámbitos de Aplicación</h2>
          <p className="descripcion-seccion">
            La arquitectura del sistema permite recolectar, procesar y almacenar datos métricos en cualquier entorno de trabajo. 
            Entre los principales sectores donde se puede implementar destacan:
          </p>

          <div className="grid-cards">
            <div className="card">
              <h3>Transporte y Flotillas</h3>
              <p>Rastrear ubicación GPS, nivel de combustible, velocidad y estado del motor en vehículos de carga y reparto.</p>
            </div>

            <div className="card">
              <h3>Manufactura e Industria</h3>
              <p>Supervisar temperatura, vibraciones y desgaste en maquinaria pesada para habilitar mantenimiento predictivo.</p>
            </div>

            <div className="card">
              <h3>Sector Salud</h3>
              <p>Monitorear signos vitales de pacientes a distancia y asegurar la cadena de frío en reactivos y vacunas.</p>
            </div>

            <div className="card">
              <h3>Agricultura Inteligente</h3>
              <p>Medir la humedad del suelo, variables climáticas y automatizar sistemas de riego a distancia.</p>
            </div>

            <div className="card">
              <h3>Energía y Minería</h3>
              <p>Vigilar pozos, consumo eléctrico o hídrico y controlar maquinaria pesada en zonas de difícil acceso.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <small>Sistema de Monitoreo Remoto &copy; 2026</small>
      </footer>
    </div>
  );
}

export default Texto;