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
      titulo: 'Horas'
    },
    {
      id: 1,
      titulo: 'Actividades'
    },
    {
      id: 2,
      titulo: 'Lunes'
    },
    {
      id: 3,
      titulo: 'Martes'
    },
    {
      id: 4,
      titulo: 'Miercoles'
    },
    {
      id: 5,
      titulo: 'Jueves'
    },
    {
      id: 6,
      titulo: 'Viernes'
    },
    {
      id: 7,
      titulo: 'Sabado'
    },
    {
      id: 9,
      titulo: 'Domingo'
    }
  ]);

  return (
    <div>
        <h1>Organizador de Horarios</h1>
      <SortableContext items={dias} strategy={verticalListSortingStrategy}>
        <div className="column-container">
          {dias.map((dia) => (
            <Dia key={dia.id} dia={dia} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default App;
