import React from 'react';
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {SortableContext, verticalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';
import './App.css';
import Actividad from './Actividad'

//Las actividades a crear seran widgets. Por lo tanto ademas de implementarlos, la planilla debera ser
// un mapa de widgets. 

/*
 * Aqui es donde se renderiza la pagina. Aqui es donde estara renderizada la planilla y sus botones para sus funciones.
 * Tambien deberan estar renderizadod los widgets de las actividades ya creadas, asi como sus funciones.
 * 
 */
function App() {

  const [actividades, setActividades] = useState([
    { id: 1, titulo: "Proba" },
    { id: 2, titulo: "Boxeo" },
    { id: 3, titulo: "Apollo" },
  ]);

  const handleDragEnd = (e) => {
    // A tener en cuenta a futuro
    // onDragEnd recibe parametros active y over, 
    // Estos nombres *NO* se pueden modificar
    const {active, over} = e;

    if (!active.id !== over.id) {
      setActividades((actividades) => {
        const oldIndex = actividades.findIndex((actividad) => actividad.id === active.id);
        const newIndex = actividades.findIndex((actividad) => actividad.id === over.id);
        return arrayMove(actividades, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h1>Organizador de Horarios</h1>

      <SortableContext items={actividades} strategy={verticalListSortingStrategy}>
        {
          actividades.map((actividad) => (
            <Actividad key={actividad.id} actividad={actividad}  />
          ))
        }
      </SortableContext>

    </DndContext>
  );
}

export default App;
