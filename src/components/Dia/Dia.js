import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Actividad from "../Actividad/Actividad";

export default function Dia(props) {

    return (
        <div>
            <h1>{props.nombre}</h1>
            <Droppable droppableId={props.id.toString()} className='dia-container'>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {props.actividades.map((actividad, index) => (
                            <Actividad key={actividad.id} index={index} actividad={actividad} modificarActividad={props.modificarActividad}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </div>
    );
}