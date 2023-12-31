import React, { useState } from 'react'
import './PopupModificar.css'
import SelectorHorarios from '../SelectorHorarios/SelectorHorarios.js';

function PopupModificar(props) {
    const [nombre, setNombre] = useState('');

    const handleSave = () => {
        props.modificarActividad(nombre, props.actividadId);

        setNombre(''); // Vuelvo al estado inicial
        props.setTrigger(false);
    }

    const handleDelete= () => {
        props.borrarActividad(props.actividadId);
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className='fondoPopup'>
            <div className='centroPopup'>
                <button className='botonCancelar' onClick={() => props.setTrigger(false)}>X</button>
                <div className='seteoActividad'>
                    <h1>Actividad:</h1>
                    <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <SelectorHorarios />
                    <br />
                    <br />
                    <br />
                    <button className='botonGuardar' onClick={handleSave}>Finalizar</button>
                    <button className='BotonEliminar' onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    ) : ""
}

export default PopupModificar;