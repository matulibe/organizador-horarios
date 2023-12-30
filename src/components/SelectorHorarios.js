import React, { useState } from "react";
import './SelectorHorarios.css'
import { TimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function SelectorHorarios(){
    const [hora, setHora]=useState(null)
    console.log(hora)
    return(
        <div>
            <h1>Hora en la que se realiza:</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker  
                value={hora}
                onChange={(horaNueva)=> {setHora(horaNueva) }}
                />
            </LocalizationProvider>
        </div>
    )
}

export default SelectorHorarios;