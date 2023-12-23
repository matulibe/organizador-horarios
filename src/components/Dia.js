import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Actividad from "./Actividad";

export default function Dia({ nombre, actividades, id }) {

    // const handleOnDrop = e =>{
    //     const id = e.dataTransfer.getData("id");
    //     const actividad = actividades.find((act) => act.id == id)
    //     if(actividad){
    //         updateActividad()
    //     }

    // }

    return (
        <div>
            <h1>{nombre}</h1>
            <Droppable /*onDrop={handleOnDrop}*/ droppableId={id.toString()} className='dia-container'>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {actividades.map((actividad, index) => (
                            <Actividad key={actividad.id} index={index} actividad={actividad} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </div>
    );
}