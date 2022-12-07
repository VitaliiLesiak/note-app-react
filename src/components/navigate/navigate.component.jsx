import { NavLink } from "react-router-dom"
import './navigate.styles.css'

function Navigate() {
    return (
        <nav>
            <NavLink end to='/'>About</NavLink>
            <NavLink to='/notes'>Notes</NavLink>
            <NavLink to='/todo'>Todo</NavLink>
        </nav>
    )
}

export default Navigate