import React, {useState} from "react";
import { Draggable } from "react-beautiful-dnd"; 
import PopupModificar from "../PopupActividad/PopupModificar.js";
import "./Actividad.css"

export default function Actividad(props) {
    const [popup, setPopup] = useState(false);


    return (
        <div>
            <Draggable draggableId={props.actividad.id.toString()} index={props.index} key={props.actividad.id}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={() => setPopup(true)}>
                        <div className="actividad">
                            <h3>{props.actividad.nombre}</h3>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
            <PopupModificar trigger={popup} setTrigger={setPopup} modificarActividad={props.modificarActividad} borrarActividad={props.borrarActividad} actividadId={props.actividad.id}/>
        </div>
    );
}