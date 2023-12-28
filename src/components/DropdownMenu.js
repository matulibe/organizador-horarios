import React, { useState } from 'react'
import './DropdownMenu.css'
import { dias } from './DataActividades';

function DropdownMenu() {
    return (
        <div className='dropdown-menu'>
            <h1>Seleccione un dia</h1>
            <select>
                {dias.map((dia) => (
                    <option value={dia}>
                        {dia}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropdownMenu;