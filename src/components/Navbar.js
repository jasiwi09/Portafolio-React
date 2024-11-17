import './Navbar.css';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div className="nav-box">
                <ul>
                    <Link to="/"><li><i className="fa-solid fa-house"></i>Inicio</li></Link>
                    <Link to="/projects"><li><i className="fa-solid fa-rocket"></i>Proyectos</li></Link>
                    <Link to="/contact"><li><i className="fa-solid fa-rocket"></i>Contacto</li></Link>
                    <Link to="/newsletter"><li><i className="fa-solid fa-envelope"></i>Newsletter</li></Link>
                </ul>
            </div>
        </header>
    );
}