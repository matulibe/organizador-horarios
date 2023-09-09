import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"


function Dia({ dia }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: dia.id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
            <h2>{dia.titulo}</h2>
        </div>
    )
}

export default Dia