import React from 'react'
import './DropdownMenu.css'
import { dias } from './DataActividades';

function DropdownMenu() {
    const opciones = [...dias];
    return (
        <div className='dropdown-menu'>
            <h1>Seleccione un dia:</h1>
            <select>
                <option value='' disabled selected>--Seleccionar Opcion--</option>
                {opciones.map((dia) => (
                    <option value={dia}>
                        {dia}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropdownMenu;