import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { DndContext, closestCenter } from '@dnd-kit/core';
import './App.css';

//Las actividades a crear seran widgets. Por lo tanto ademas de implementarlos, la planilla debera ser
// un mapa de widgets. 

/*
 * Aqui es donde se renderiza la pagina. Aqui es donde estara renderizada la planilla y sus botones para sus funciones.
 * Tambien deberan estar renderizadod los widgets de las actividades ya creadas, asi como sus funciones.
 * 
 */
function App() {

  const [actividades, setActividades] = useState([
    {
      id: 0,
      titulo: 1,
      list: "lunes"
    },
    {
      id: 1,
      titulo: 2,
      list: "lunes"
    },
    {
      id: 2,
      titulo: 3,
      list: "lunes"
    },
    {
      id: 3,
      titulo: 4,
      list: "lunes"
    }
  ]);

  const getList = (list) => {
    return actividades.filter(item => item.list === list)
  }

  const startDrag = (e, item) => {
    e.dataTransfer.setData('itemId', item.id);
  }

  const dragginOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (e, list) => {
    const itemId = e.dataTransfer.getData('itemId');
    const item = actividades.find(item => item.id === itemId);
    item.list = list;

    const newState = actividades.map(actividad => {
      if (actividad.id === itemId) return item;
      return actividad
    });

    setActividades(newState);
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={e=>dragginOver(e)}>
      <h1>Organizador de Horarios</h1>
    </DndContext>
  );
}

export default App;
