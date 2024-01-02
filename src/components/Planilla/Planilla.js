import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';
import Dia from "../Dia/Dia";
import PopupCrear from "../Popup/PopupCrear.js"
import { Alert } from "@mui/material";
import {dias, actividades as actividadesIniciales} from "../DataActividades"
import "./Planilla.css"

export default function Planilla() {

    const [actividades, setActividades] = useState(actividadesIniciales);
    const [popup, setPopup] = useState(false);
    const [success, setSuccess] = useState(false);

    /*
     *
     *  Funcion destinada a cambiar de lugar los horarios
     *  Tomara los datos que tienen son el id del arrastrable,
     *  la fila de destino y la de origen.
     * 
     */
    const handleDragEnd = (e) => {
        const { destination, source, draggableId } = e;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }

        const actMovida = actividades.find((act) => act.id === draggableId);

        const str = destination.droppableId;
        actMovida.dia = str[0].toUpperCase() + str.slice(1);

        const sinActAux = actividades.filter((act) => act.id !== draggableId);
        const actividadesActualizadas = [...sinActAux.slice(0, destination.index), actMovida, ...sinActAux.slice(destination.index)];

        setActividades(actividadesActualizadas);
    };


    /* 
     * Toma el vector de actividades y filtra las actividades por dia y las agrega al 
     * vector del dia al cual pertenecen
     */
    const columnas = dias.map((dia)=>{
        const actividadEnDia = actividades.filter((actividad)=> actividad.dia === dia)
        return{
            dia,
            id: dia.toLowerCase(),
            actividades: actividadEnDia
        }
    })

    /*
    * Recibe los parametros de la actividad a crear, crea dicha actividad y
    * la agrega al vector
    */
    const agregarActividad = (nombre, dia) => {
        const nuevaActividad = {
            nombre: nombre,
            dia: dia,
            id: uuidv4()
        };

        const nuevoArray = [...actividades];
        nuevoArray.push(nuevaActividad)

        setActividades(nuevoArray);
        setSuccess(true);
    };

    /*
     * Recibe el nuevo nombre de la actividad y su id, elimina la actividad
     * de actividades y crea una nueva actividad, la cual es insertada en 
     * reemplazo.
     */

    const modificarActividad = (nombre, id) =>{
        let index = actividades.findIndex(act => act.id === id);
        let diaAux = actividades.find((act) => act.id === id).dia;
        const actModificada = {
            nombre: nombre,
            dia: diaAux,
            id: id
        };


        const sinActAux = actividades.filter((act) => act.id !== id);
        const actividadesActualizadas = [...sinActAux.slice(0, index), actModificada, ...sinActAux.slice(index)];

        setActividades(actividadesActualizadas);
        setSuccess(true);
    }

    const duplicarActividad = (id) => {
        const aux = actividades.find((act) => act.id === id);
        const actDuplicada = {
            nombre: aux.nombre,
            dia: aux.dia,
            id: uuidv4()
        };

        const actividadesActualizadas = [...actividades];
        actividadesActualizadas.push(actDuplicada);
        setActividades(actividadesActualizadas);
        setSuccess(true);
    }


    /*
     * Recibe un el id de la actividad que no se desea tener mas,
     * y se la elimina del array actividades
     */
    const borrarActividad = (id) =>{
        const actividadesActualizadas = actividades.filter((act) => act.id !== id);

        setActividades(actividadesActualizadas)
    }


    const finExito = () =>{
        setSuccess(false);
    }
    setTimeout(finExito, 3000);

    const funciones = {
        borrarActividad: borrarActividad,
        modificarActividad: modificarActividad,
        duplicarActividad: duplicarActividad,
    }


    console.log(actividades)
    return (
        <div>
            <main>
                <div className="titulo">
                    <h1>Organizacion de Horarios</h1>
                </div>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="Dias">
                        {columnas.map((columna)=>(
                            <div className="Dia" key={columna.id}>
                                <Dia nombre={columna.dia} actividades={columna.actividades} id={columna.id} funciones={funciones} />
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
                <PopupCrear trigger={popup} setTrigger={setPopup} agregarActividad={agregarActividad} />
                <p className="beta">Beta 1.0</p>
            {success && (
                <Alert className='alertaExito' severity='success' onClose={()=>setSuccess(true)}>Actividad guardada exitosamente!</Alert>
            )}
        </div>
    );
}