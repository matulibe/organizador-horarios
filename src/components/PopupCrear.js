import React, { useState } from 'react'
import './PopupCrear.css'
import DropdownMenu from './DropdownMenu.js'
import SelectorHorarios from './SelectorHorarios.js';

function PopupCrear(props){
    const [nombre, setNombre]=useState('');
    const [dia, setDia] = useState('')
    console.log(nombre);
    console.log(dia);

    const handleSave = () => {
        props.agregarActividad(nombre, dia)

        setNombre('');
        setDia('');
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className='fondoPopup'>
            <div className='centroPopup'>
                <button className='botonCancelar' onClick={()=> props.setTrigger(false)}>X</button>
                <div className='seteoActividad'>
                    <h1>Actividad:</h1>
                    <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <DropdownMenu value={dia} onChange={(e) => setDia(e.target.value)} />
                    <SelectorHorarios />
                    <br />
                    <br />
                    <br />
                    <button className='botonGuardar' onClick={handleSave}>Finalizar</button>
                </div>
            </div>
        </div>
    ) : ""
}

export default PopupCrear;