import TodoListItem from "../todo-list-item/todo-list-item.component"
import './todo-list.styles.css'
export default function TodoList(props) {
    function checkBool(text) {
        props.bool(text)
    }
    function deleteTodo(text) {
        props.delete(text)
    }
    return (
        <div className="todo-list">
            <ul>
                {
                    props.data.map(el => {
                        return <li key={el.id}><TodoListItem delete={deleteTodo} bool={checkBool} data={el} /></li>
                    })
                }
            </ul>
        </div>
    )
}