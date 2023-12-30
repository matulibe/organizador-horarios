import React from 'react'
import './DropdownMenu.css'
import { dias } from './DataActividades';

function DropdownMenu(props) {
    const opciones = [...dias];
    return (
        <div className='dropdown-menu'>
            <h1>Seleccione un dia:</h1>
            <select value={props.value} onChange={props.onChange}>
                <option value='' disabled>--Seleccionar Opcion--</option>
                {opciones.map((diaEleccion) => (
                    <option value={diaEleccion} key={diaEleccion.toLowerCase()}>
                        {diaEleccion}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropdownMenu;