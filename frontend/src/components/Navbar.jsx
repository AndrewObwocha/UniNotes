import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar-logo">UniNotes</h2>
            <div className='navbar-links'>
                <a className='navbar-link' href=''>Home</a>
                <a className='navbar-link' href=''>Login</a>
            </div>
            <input className="navbar-search" placeholder="Search" />
        </div>
    )
}

export default Navbar