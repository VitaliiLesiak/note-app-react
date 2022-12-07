
import TodoEditor from '../todo-editor/todo-editor.component'
import TodoList from '../todo-list/todo-list.component'
import TodoItems from '../todo-items/todo-items.component'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function TodosApp() {
    const URL = 'http://localhost:3004/todos'
    const [obj, setObj] = useState([])
    const [allObject, setAllObj] = useState([])

    function checkAxios() {
        axios.get(URL)
      .then(res => {
        const persons = res.data;
        setObj(persons)
        setAllObj(persons)
      })
    }
    useEffect(() => {
      checkAxios()
    }, [])
    function checkActive(text) {
        function check(bool) {
          return setObj(allObject.filter(el => el.check === bool))
        }
        let comOrNew = text === "new" ? check(false) : check(true)
        return text === "new" || text === "completed" ? comOrNew : setObj(allObject)
    }

    function allText(text) {
        axios.post(URL, {
            name: text,
            check: false
          })
          .then(() => {
            checkAxios()
          })
    }
    function checkEl(text) {
        axios.put(`${URL}/${text.id}`, {
            name: text.name,
            check: !text.check
          })
          .then(() => {
            checkAxios()
          })
    }
    function deleteTodo(id) {
      axios.delete(`${URL}/${id}`)
      checkAxios()
    }
    obj.sort(function (a, b) {
      if (a.check < b.check) {
        return 1;
      }
      if (a.check > b.check) {
        return -1;
      }
      return 0;
    });

    return (
        <div>
            <h1>Todo</h1>
            <TodoEditor text={allText} />
            <TodoList delete={deleteTodo} bool={checkEl} data={(obj).reverse()} />
            <TodoItems filter={checkActive} />
        </div>
    )
}


