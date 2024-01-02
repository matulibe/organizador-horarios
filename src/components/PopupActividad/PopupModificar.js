import React, { useState } from 'react'
import './PopupModificar.css'
import SelectorHorarios from '../SelectorHorarios/SelectorHorarios.js';
import { Alert } from '@mui/material';

function PopupModificar(props) {
    const [nombre, setNombre] = useState('');
    const [warning, setWarning] = useState(false);


    const handleSave = () => {

        if(nombre === ''){
            setWarning(true);
        } else {
            props.funciones.modificarActividad(nombre, props.actividadId, true);
            setNombre(''); // Vuelvo al estado inicial
            props.setTrigger(false);
            setWarning(false);
        }
    }

    const handleCancel = () => {
        setNombre('');
        props.setTrigger(false)
        setWarning(false);
    }

    const handleDelete= () => {
        props.funciones.borrarActividad(props.actividadId);
        props.setTrigger(false);
    }

    const handleDuplicate = () =>{
        props.funciones.duplicarActividad(props.actividadId)
        props.setTrigger(false);
        setWarning(false);
    }

    return (props.trigger) ? (
        <div className='fondoPopup'>
            <div className='centroPopup'>
                <button className='botonCancelar' onClick={handleCancel}>X</button>
                <div className='seteoActividad'>
                    <h1>Actividad:</h1>
                    <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <p></p>
                    <SelectorHorarios />
                    <br />
                    <br />
                    <br /> 
                    <button className='botonGuardar' onClick={handleSave}>Finalizar</button>
                    <button className='botonBorrar' onClick={handleDelete}>Eliminar</button>
                    <button className='botonDuplicar' onClick={handleDuplicate}>Duplicar</button>
                </div>
                {warning && (
                    <Alert className='alertError' severity='error' onClose={()=>setWarning(false)}>Por favor complete todos los campos</Alert>
                )}
            </div>
        </div>
    ) : ""
}

export default PopupModificar;