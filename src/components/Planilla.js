import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Dia from "./Dia";
import "./Planilla.css"

export default function Planilla() {
    const [actLun, setActLun] = useState([
        {
            nombre: 'Boxeo',
            id: "1"
        }
    ]);

    const [actMar, setActMar] = useState([
        {
            nombre: 'Proba',
            id: "2"
        }
    ]);
    const [actMie, setActMie] = useState([
        {
            nombre: 'Orga',
            id: "3"
        }
    ]);

    const [actJu, setActJu] = useState([
        {
            nombre: 'Tenis',
            id: "4"
        }
    ]);
    const [actVie, setActVie] = useState([
        {
            nombre: 'ArqSoft',
            id: "5"
        }
    ]);

    const [actSab, setActSab] = useState([
        {
            nombre: 'Cocina',
            id: "6"
        }
    ]);
    const [actDom, setActDom] = useState([
        {
            nombre: 'Programar',
            id: "7"
        }
    ]);


    const handleDragEnd = (e) => {
        const { destination, source, draggableId } = e;
        if (source.droppableId === destination.droppableId){
            return;
        } 
        if (source.droppableId === "martes") {
            var draggedActivity = actMar.find((act) => act.id === draggableId);
            setActMar((prevMar) => prevMar.filter((act) => act.id !== draggableId));
            setActMar((prevMar) => [...prevMar, draggedActivity]);
        } else {
            draggedActivity = actLun.find((act) => act.id === draggableId);
            setActLun((prevLun) => prevLun.filter((act) => act.id !== draggableId));
            setActLun((prevLun) => [...prevLun, draggedActivity]);
        }
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="titulo">
                <h1>Organizacion de Horarios</h1>
            </div>
            <div className="Dias">
                <div className="Dia">
                    <Dia nombre={"Lunes"} actividades={actLun} id={"lunes"} />
                </div>
                <div className="Dia">
                    <Dia nombre={"Martes"} actividades={actMar} id={"martes"} />
                </div>
                <div className="Dia">
                    <Dia nombre={"Miércoles"} actividades={actMie} id={"miercoles"} />
                </div>
                <div className="Dia">
                    <Dia nombre={"Jueves"} actividades={actJu} id={"jueves"} />
                </div>
                <div className="Dia">
                    <Dia nombre={"Viernes"} actividades={actVie} id={"viernes"} />
                </div>
                <div className="Dia">
                    <Dia nombre={"Sábado"} actividades={actSab} id={"sabado"} />
                </div>
                <div className="Dia">
                    <Dia nombre={"Domingo"} actividades={actDom} id={"domingo"} />
                </div>
            </div>
        </DragDropContext>
    );
}