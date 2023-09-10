import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { act } from "react-dom/test-utils";

export default function Actividad({actividad, indice}){
    return(
        <Draggable draggableId={`${actividad.id}`} key={actividad.id} index={indice}>
            {(provided, snapshot) => {
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging}>
                    <div>
                        <h3>{actividad.nombre}</h3>
                    </div>
                    {provided.placeholder}
                </div>
            }}
        </Draggable>
    );
}