import React from "react";
import './SelectorHorarios.css'
import { TimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function SelectorHorarios(){
    return(
        <div>
            <h1>Hora en la que se realiza:</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker></TimePicker>
            </LocalizationProvider>
        </div>
    )
}

export default SelectorHorarios;