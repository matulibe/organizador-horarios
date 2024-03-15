import React, {useState} from "react";
import { Draggable } from "react-beautiful-dnd"; 
import PopupModificar from "../PopupActividad/PopupModificar.js";
import "./Actividad.css"

export default function Actividad(props) {
    const [popup, setPopup] = useState(false);
    const divStyle = {
        backgroundColor: props.actividad.color
    }


    return (
        <div>
            <Draggable draggableId={props.actividad.id.toString()} index={props.index} key={props.actividad.id}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={() => setPopup(true)}>
                        <div className="actividad" style={divStyle}>
                            <h3 style={{ marginBottom: '0px' }}>{props.actividad.nombre}</h3>
                            <h4 style={{ marginTop: '0', marginBottom: '20px' }}>{props.actividad.hora}:{props.actividad.minutos}</h4>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
            <PopupModificar trigger={popup} setTrigger={setPopup} funciones={props.funciones} actividadId={props.actividad.id} nombre={props.actividad.nombre} color={props.actividad.color}/>
        </div>
    );
}