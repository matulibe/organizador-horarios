import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Dia from "./Dia";
import {dias, actividades} from "./DataActividades"
import "./Planilla.css"

export default function Planilla() {
    /*
     *
     *  Funcion destinada a cambiar de lugar los horarios
     *  Tomara los datos que tienen son el id del arrastrable,
     *  la fila de destino y la de origen.
     *  Chequeara cada caso posible y hara el analisis necesario
     * 
     *  **Nota: esto puede ser mejorado y se lo esta trabajando**.
     * 
     */
    // const handleDragEnd = (e) => {
    //     const { destination, source, draggableId } = e;
    //     if (source.droppableId === destination.droppableId){
    //         return;
    //     }  
        
        
    //     if (source.droppableId === "martes") {
    //         var draggedActivity = actMar.find((act) => act.id === draggableId);
    //         setActMar((prevMar) => prevMar.filter((act) => act.id !== draggableId));
    //         setActMar((prevMar) => [...prevMar, draggedActivity]);
    //     } else {
    //         draggedActivity = actLun.find((act) => act.id === draggableId);
    //         setActLun((prevLun) => prevLun.filter((act) => act.id !== draggableId));
    //         setActLun((prevLun) => [...prevLun, draggedActivity]);
    //     }
    // }

    const columnas = dias.map((dia)=>{
        const actividadEnDia = actividades.filter((actividad)=> actividad.dia == dia)
        return{
            dia,
            id: dia.toLowerCase(),
            actividades: actividadEnDia
        }
    })

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="titulo">
                <h1>Organizacion de Horarios</h1>
            </div>
            <div className="Dias">
                {columnas.map((columna)=>(
                    <div className="Dia">
                        <Dia nombre={columna.dia} actividades={columna.actividades} id={columna.id} />
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
}