import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Dia from "./Dia";
import PopupCrear from "./PopupCrear.js"
import {dias, actividades as actividadesIniciales} from "./DataActividades"
import "./Planilla.css"

export default function Planilla() {

    const [actividades, setActividades] = useState(actividadesIniciales);
    const [popup, setPopup] = useState(false);

    /*
     *
     *  Funcion destinada a cambiar de lugar los horarios
     *  Tomara los datos que tienen son el id del arrastrable,
     *  la fila de destino y la de origen.
     *  Chequeara cada caso posible y hara el analisis necesario
     * 
     */
    const handleDragEnd = (e) => {
        const { destination, source, draggableId } = e;

        if (!destination) {
            return;
        }

        if(destination.droppableId === source.droppableId){
            return;
        }

        const actividadesActualizadas = [...actividades];

        const actMovida = actividadesActualizadas.find((act) => act.id === draggableId);

        const str = destination.droppableId;
        actMovida.dia = str[0].toUpperCase() + str.slice(1);
        actividadesActualizadas.splice(source.index, 1);

        actividadesActualizadas.splice(destination.index, 0, actMovida);

        
        //Actualizo
        setActividades(actividadesActualizadas);
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
        <div>
            <main>
                <div className="titulo">
                    <h1>Organizacion de Horarios</h1>
                </div>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="Dias">
                        {columnas.map((columna)=>(
                            <div className="Dia">
                                <Dia nombre={columna.dia} actividades={columna.actividades} id={columna.id} />
                            </div>
                        ))}
                    </div>
                </DragDropContext>
                <br></br>
                <div className="botonera">
                    <button className="boton" onClick={()=> setPopup(true)}>Crear</button>
                    <button className="boton">Guardar</button>
                </div>
            </main>
                <PopupCrear trigger={popup} setTrigger={setPopup}>
                </PopupCrear>
        </div>
    );
}