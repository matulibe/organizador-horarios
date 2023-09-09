import React from 'react';
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import Actividad from './Actividad'


function Dia({ dia }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: dia.id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const [actividades, setActividades] = useState([
        { id: 1, titulo: "Proba" },
        { id: 2, titulo: "Boxeo" },
        { id: 3, titulo: "Apollo" },
    ]);

    const handleDragEnd = (e) => {
        /* A tener en cuenta a futuro
         *
         *onDragEnd recibe parametros active y over, 
         *Estos nombres *NO* se pueden modificar
         *
         */
        const { active, over } = e;

        if (!active.id !== over.id) {
            setActividades((actividades) => {
                const oldIndex = actividades.findIndex((actividad) => actividad.id === active.id);
                const newIndex = actividades.findIndex((actividad) => actividad.id === over.id);
                return arrayMove(actividades, oldIndex, newIndex);
            });
        }
    }
    
    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
            <DndContext className="fondo" collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={actividades} strategy={verticalListSortingStrategy}>
                    {
                        actividades.map((actividad) => (
                            <Actividad key={actividad.id} actividad={actividad} />
                        ))
                    }
                </SortableContext>
            </DndContext>
        </div>
    )
}

export default Dia