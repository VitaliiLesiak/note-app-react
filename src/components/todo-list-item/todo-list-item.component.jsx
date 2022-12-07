import './todo-list-item.styles.css'
export default function TodoListItem(props) {
    const { name, check,id } = props.data
    let checkActive = check ? 'name checkActive' : 'name'
    function checkBool() {
        props.bool(props.data)
    }
    function deleteTodo() {
        props.delete(id)
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr className='tr'>
                        <td><p>
                            <label>
                                <input type="checkbox" className='filled-in' onClick={checkBool} defaultChecked={check} />
                                <span></span>
                            </label>
                        </p></td>
                        <td className={checkActive}>{name}</td>
                        <td className='close'><i className="material-icons" onClick={deleteTodo}>close</i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}