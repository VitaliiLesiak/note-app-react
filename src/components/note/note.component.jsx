import './note.styles.css'

function Note(props) {
    const {id, title, text, color} = props.data
    function deleteNote(id) {
        props.idnotes(id.target.attributes.idnote.value)
    }
    const style = {
        backgroundColor: color
    }
    return (
        <div className="posrel" style={style}>
            <div className="deleteObj"><span className="material-icons" onClick={deleteNote} idnote={id}>
close
</span></div>
            <h3>{title}</h3>
            <h5>{text}</h5>
        </div>
    )
}
export default Note