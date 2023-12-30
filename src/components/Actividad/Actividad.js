import React from "react";
import { Draggable } from "react-beautiful-dnd"; 
import "./Actividad.css"

export default function Actividad({ actividad, index }) {
   const handleDragStart = (e) =>{
        e.dataTransfer.setData("id", actividad.id)
    }

    const handleClick = (e) =>  {
        console.log('Click!')
    }
    return (
        <Draggable onDragStart={handleDragStart} draggableId={actividad.id.toString()} index={index} key={actividad.id}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={handleClick}>
                    <div className="actividad">
                        <h3>{actividad.nombre}</h3>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}