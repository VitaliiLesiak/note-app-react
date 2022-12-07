import TodoItem from '../todo-item/todo-item.component'
import './todo-items.styles.css'
export default function TodoItems(props) {
    let arr = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "New"
        },
        {
            id: 3,
            name: "Completed"
        }
      ]
    
    function checkActive(text) {
        props.filter(text)
    }

    return (
        <div className='block__items'>
            <ul className='ul'>
                {
                    arr.map((el) => {
                        return <li key={el.id}><TodoItem data={el} filter={checkActive} /></li>
                    })
                }
            </ul>

        </div>
    )
}