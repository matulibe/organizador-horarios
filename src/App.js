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
      id: 1,
      titulo: 'lunes'
    }
  ]);

  return (
    <div>
        <h1>Organizador de Horarios</h1>
      <SortableContext items={dias} strategy={horizontalListSortingStrategy}>
        {
          dias.map((dia) => (
            <Dia key={dia.id} dia={dia} />
          ))
        }
      </SortableContext>
    </div>
  );
}

export default App;
