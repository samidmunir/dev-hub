import './Navbar.css'
import Logo from './logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={Logo} alt='Logo' />
                <h1>Frontend UI Suite</h1>
            </div>
            <div className='navbar-links'>
                <a href='/'>Overview</a>
                <a href='/components'>Components</a>
                <a href='/pricing'>Pricing</a>
                <a href='/testimonials'>Testimonials</a>  
            </div>
            <div className='navbar-buttons'>
                <p>sami.munir2001@gmail.com</p>
                <button>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;