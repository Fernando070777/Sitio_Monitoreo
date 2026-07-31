import { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, set, onValue } from 'firebase/database';

function Telemetrias() {
  const [cpu, setCpu] = useState(0);

  // Escucha los cambios en tiempo real desde Firebase
  useEffect(() => {
    const cpuRef = ref(database, 'sistema/cpu');
    return onValue(cpuRef, (snapshot) => {
      setCpu(snapshot.val() || 0);
    });
  }, []);

  // Guarda una nueva métrica simulada en Firebase
  const simularMetrica = () => {
    const nuevoValor = Math.floor(Math.random() * 100);
    set(ref(database, 'sistema/cpu'), nuevoValor);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Panel de Monitoreo en Fedora</h1>
      <p style={{ fontSize: '24px' }}>Uso de CPU simulado: <strong>{cpu}%</strong></p>
      <button onClick={simularMetrica} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Enviar nueva métrica
      </button>
    </div>
  );
}

export default Telemetrias;