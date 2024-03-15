import React, { useState } from "react";
import './SelectorHorarios.css'
import { TimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Alert } from '@mui/material';

function SelectorHorarios(props){
    const [hora, setHora]=useState(null);
    const [warning, setWarning] = useState(false);

    if(hora){
        console.log(hora.getHours(), hora.getMinutes());
    }
    
    return(
        <div>
            <h1>Hora en la que se realiza:</h1>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker  
                value={hora}
                onChange={(horaNueva)=> {setHora(horaNueva) }}
                />
            </LocalizationProvider>
            {warning && (
                <Alert className='alertError' severity='error' onClose={() => setWarning(false)}>Por favor complete todos los campos</Alert>
            )}
        </div>
    )
}

export default SelectorHorarios;