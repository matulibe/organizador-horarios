import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Actividad from "./Actividad";

export default function Dia({nombre, actividades, id}){
    return(
        <div>
            <h1>{nombre}</h1>
            <Droppable droppableId={id}>

                {(provided, snapshot) => {
                    <div ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                        <Actividad actividad={{ id: 0, nombre: 'Boxeo' }} indice="1" />
                        {provided.placeholder}
                    </div>
                }}

            </Droppable>
        </div>
    );
}