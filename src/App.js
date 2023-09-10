import React from 'react';
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';
import './App.css';
import Actividad from './components/Actividad'
import Planilla from './components/Planilla';
function App() {

  
  return (
    <div>
        <Planilla/>
    </div>
  );
}

export default App;
