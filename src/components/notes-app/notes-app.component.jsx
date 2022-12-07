import { useEffect, useState } from 'react';
import NoteEditor from '../note-editor/note-editor.component';
import NotesGrid from '../notes-grid/notes-grid.component';
import Search from '../search/search.component';
import axios from 'axios';
import './notes-app.styles.css'

let arr = []

function NotesApp() {
    const URL = 'http://localhost:3004/notes'
    const [obj, setObj] = useState([])
    
    function checkAxios() {
        axios.get(URL)
      .then(res => {
        const persons = res.data;
        arr = persons
        setObj(persons)
      })
    }
    useEffect(() => {
      checkAxios()
    }, [])

    function inputText(note) {
        axios.post(URL, {
            title: note.title,
            text: note.text,
            color: note.color
          })
          .then(function(response) {
            checkAxios()
          })
    }

    function deleteObj(id) {
     axios.delete(`${URL}/${id}`)
     checkAxios()
    }
    
    function filterNote(text) {
      let filterNotes = arr.filter(el => el.title.toLowerCase().search(text.toLowerCase()) !== -1)
      setObj(filterNotes.reverse())
    }
    return (
        <div>
            <NoteEditor text={inputText} />
            <Search searchNote={filterNote}/>
            <NotesGrid data={obj.reverse()} deleteNote={deleteObj} />
            <hr />
        </div>
    )
}
export default NotesApp