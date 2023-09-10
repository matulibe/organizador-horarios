import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import {Draggable} from "react-beautiful-dnd"


function Actividad({actividad}){
   const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: actividad.id})
   const style = {
    transform: CSS.Transform.toString(transform),
    transition
   }
    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
            <h2>{actividad.titulo}</h2>
        </div>
    )
}

export default Actividad