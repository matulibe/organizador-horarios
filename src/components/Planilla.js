import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Dia from "./Dia";
import {dias, actividades as actividadesIniciales} from "./DataActividades"
import "./Planilla.css"

export default function Planilla() {

    const [actividades, setActividades] = useState(actividadesIniciales);


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
    const handleDragEnd = (e) => {
        const { destination, source, draggableId } = e;

        // Check if there's no valid destination
        if (!destination) {
            return;
        }

        if(destination.droppableId === source.droppableId){
            return;
        }

        const updatedActivities = [...actividades];

        const draggedActivity = updatedActivities.find((activity) => activity.id === draggableId);

        const str = destination.droppableId;
        console.log(draggedActivity);
        draggedActivity.dia = str[0].toUpperCase() + str.slice(1);
        console.log(draggedActivity);

        updatedActivities.splice(source.index, 1);

        updatedActivities.splice(destination.index, 0, draggedActivity);

        
        //Actualizo
        setActividades(updatedActivities);
    };

    const columnas = dias.map((dia)=>{
        const actividadEnDia = actividadesIniciales.filter((actividad)=> actividad.dia === dia)
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