import { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, set, onValue } from 'firebase/database';
import Login from './login';

function Telemetrías() {
  const [cpu, setCpu] = useState(0);
  const [logueado, setLogueado] = useState(false);

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

  if (!logueado) {
    return <Login onLogin= {() => setLogueado(true)} />;
  }

  return (

    <><section className='login_'>
      <div className='#login'>
        <h1>Panel de Monitoreo en Fedora</h1>
        <p style={{ fontSize: '24px' }}>Uso de CPU simulado: <strong>{cpu}%</strong></p>
        <button className='boton' onClick={simularMetrica} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Enviar nueva métrica
        </button>
      </div>
    </section><section className='clase2'>
        <div>
          <h1></h1>
          <a href="login_"></a>
        </div>

        <section>
          <login_prueba/>
        </section>

      </section></>    
  );

}

export default App;