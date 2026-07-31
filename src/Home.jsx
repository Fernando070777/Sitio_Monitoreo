import { useState } from 'react';
import './App.css'; 

export default function MenuNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(null);

  // Mapeamos cada subopción a un id de sección (ej: #seccion-1, #seccion-2, etc.)
  const opcionesMenu = [
    {
      id: 'opcion1',
      titulo: 'Sección 1',
      seccionId: 'seccion-1',
      columnas: [
        {
          tituloColumna: 'CATEGORÍA 1.1',
          subopciones: [
            { nombre: 'Subopción 1.1.1', targetId: 'seccion-1' },
            { nombre: 'Subopción 1.1.2', targetId: 'seccion-1' },
          ],
        },
      ],
    },
    {
      id: 'opcion2',
      titulo: 'Sección 2',
      seccionId: 'seccion-2',
      columnas: [
        {
          tituloColumna: 'CATEGORÍA 2.1',
          subopciones: [
            { nombre: 'Subopción 2.1.1', targetId: 'seccion-2' },
          ],
        },
      ],
    },
    {
      id: 'opcion3',
      titulo: 'Sección 3',
      seccionId: 'seccion-3',
      columnas: [
        {
          tituloColumna: 'CATEGORÍA 3.1',
          subopciones: [
            { nombre: 'Subopción 3.1.1', targetId: 'seccion-3' },
          ],
        },
      ],
    },
    {
      id: 'opcion4',
      titulo: 'Sección 4',
      seccionId: 'seccion-4',
      columnas: [
        {
          tituloColumna: 'CATEGORÍA 4.1',
          subopciones: [
            { nombre: 'Subopción 4.1.1', targetId: 'seccion-4' },
          ],
        },
      ],
    },
  ];

  // Función para desplazarse suavemente a un elemento por su ID
  const irASeccion = (idSeccion) => {
    const elemento = document.getElementById(idSeccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuAbierto(null); // Cierra el mega menú
  };

  return (
    <header className="header-menu">
      <nav className="nav-menu">
        <ul className="lista-menu">
          {opcionesMenu.map((item) => (
            <li
              key={item.id}
              className="item-menu"
              onMouseEnter={() => setMenuAbierto(item.id)}
              onMouseLeave={() => setMenuAbierto(null)}
            >
              {/* Al hacer clic en el título principal también navega a su sección */}
              <button
                className={`boton-menu ${menuAbierto === item.id ? 'activo' : ''}`}
                onClick={() => irASeccion(item.seccionId)}
              >
                {item.titulo}
              </button>

              {menuAbierto === item.id && (
                <div className="mega-menu-panel">
                  <div className="contenedor-columnas">
                    {item.columnas.map((col, idx) => (
                      <div key={idx} className="columna-menu">
                        <h4 className="titulo-columna">{col.tituloColumna}</h4>
                        <ul className="lista-subopciones">
                          {col.subopciones.map((subItem, subIdx) => (
                            <li key={subIdx} className="item-subopcion">
                              <button
                                onClick={() => irASeccion(subItem.targetId)}
                                className="boton-subopcion"
                              >
                                {subItem.nombre}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}