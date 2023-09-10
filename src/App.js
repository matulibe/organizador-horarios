import React from 'react';
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';
import './App.css';
import Actividad from './components/Actividad'
import Dia from './components/Dia';

//Las actividades a crear seran widgets. Por lo tanto ademas de implementarlos, la planilla debera ser
// un mapa de widgets. 

/*
 * Aqui es donde se renderiza la pagina. Aqui es donde estara renderizada la planilla y sus botones para sus funciones.
 * Tambien deberan estar renderizadod los widgets de las actividades ya creadas, asi como sus funciones.
 * 
 */
function App() {

  const [dias, setDias] = useState([
    {
      id: 0,
      titulo: 'Horas',
      actividades:[]
    },
    {
      id: 1,
      titulo: 'Actividades',
      actividades: [{ id: 1, titulo: "Proba", diaID: 1 }, { id: 2, titulo: "Boxeo", diaID: 1 }]
    },
    {
      id: 2,
      titulo: 'Lunes',
      actividades:[]
    },
    {
      id: 3,
      titulo: 'Martes',
      actividades:[]
    },
    {
      id: 4,
      titulo: 'Miercoles',
      actividades:[]
    },
    {
      id: 5,
      titulo: 'Jueves',
      actividades:[]
    },
    {
      id: 6,
      titulo: 'Viernes',
      actividades:[]
    },
    {
      id: 7,
      titulo: 'Sabado',
      actividades:[]
    },
    {
      id: 9,
      titulo: 'Domingo',
      actividades:[]
    }
  ]);

  const sumarActividad = (actividad, diaID) => {
    setDias((dias) => {
      const diasNuevos = [...dias];
      const indice = diasNuevos.findIndex((dia) => dia.id === diaID);

      if (indice !== -1) {
        diasNuevos[indice].actividades.push(actividad);
      }

      return diasNuevos;
    });
  };

  return (
    <div>
        <h1>Organizador de Horarios</h1>
      <SortableContext items={dias} strategy={verticalListSortingStrategy}>
        <div className="column-container">
          {dias.map((dia) => (
            <Dia key={dia.id} dia={dia} actividades={dia.actividades} sumarActividad={sumarActividad} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default App;
