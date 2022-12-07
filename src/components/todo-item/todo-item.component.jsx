import { NavLink } from "react-router-dom"

export default function TodosApp(props) {
    const {name} = props.data
    function checkActive(text) {
        text.preventDefault()
        props.filter(text.target.name)
    }
    return <div><NavLink onClick={checkActive} name={(name).toLowerCase()}>{name}</NavLink></div>
}


