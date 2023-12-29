import React, { useState } from 'react'
import './PopupCrear.css'
import DropdownMenu from './DropdownMenu.js'
import SelectorHorarios from './SelectorHorarios.js';

function PopupCrear(props){
    const [nombre, setNombre]=useState('');
    return (props.trigger) ? (
        <div className='fondoPopup'>
            <div className='centroPopup'>
                <button className='botonCancelar' onClick={()=> props.setTrigger(false)}>X</button>
                <div className='seteoActividad'>
                    <h1>Actividad:</h1>
                    <input type='text' value={nombre} onChange={(e) => setNombre(e.target.nombre)} />
                    <DropdownMenu />
                    <br></br>
                    <SelectorHorarios />
                </div>
            </div>
        </div>
    ) : ""
}

export default PopupCrear;