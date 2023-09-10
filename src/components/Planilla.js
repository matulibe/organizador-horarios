import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Dia from "./Dia";

export default function Planilla(){
    const [incomplete, setIncomplete] = useState([]);

    const handleDragEnd = (e) =>{
        const {destination, source, draggableId} = e;

        if (source.droppableId === destination.droppableId) return;
    }

    return(
        <DragDropContext onDragEnd={handleDragEnd}>
            <h1>Organizacion de Horarios</h1>
            <div>
               <Dia nombre={"Lunes"} actividades={incomplete} id={"2"}/> 
            </div>
        </DragDropContext>
    );
}