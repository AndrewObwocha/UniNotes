import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar-logo">UniNotes</h2>
            <div className='navbar-links'>
                <Link className='navbar-link' to="/">Home</Link>
                <Link className='navbar-link' to="/logout">Login</Link>
            </div>
            <input className="navbar-search" placeholder="Search" />
        </div>
    )
}

export default Navbar