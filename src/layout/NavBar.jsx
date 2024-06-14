import {Link} from 'react-router-dom'
import "./NavBar.css"

export default function NavBar(){
    return(
        <header className='header'>
            <nav>
                <ul><li><Link to="/">All members</Link> </li></ul>
                <ul><li><Link to="/add-member">Add member</Link></li></ul>
            </nav>
        </header>
    )
}