import Note from '../note/note.component'
import './notes-grid.styles.css'
function NotesGrid(props) {
    let notes = props.data
    function deleteNote(text) {
        props.deleteNote(text)
    }
    return (
        <div className='dflex'>
            {
                notes.map((note) => {
                    return <Note key={note.id} data={note} idnotes={deleteNote} />
                })
            }
            
        </div>
    )
}
export default NotesGrid