import './Personal.css';
import About from './About';
import Skills from './Skills';
import { Link } from 'react-router-dom';

export default function Personal() {
    return (
        <>
            <div className="container-main" id="home">
                <div className="left-side">
                    <h1>antonio martinez</h1>
                    <h2>administrador de sistemas</h2>
                    <h2>programador fullstack</h2>
                    <Link to="/projects"><a href="#projects"><button>ver mis proyectos</button></a></Link>
                </div>
                <div className="right-side">
                    <img src="/img/persona.png" alt="" />
                    <img src="/img/persona2.png" className="secondImg" alt="" />
                    <span className="hello">¡Hola!</span>
                </div>
            </div>

            <About />
            <Skills />
        </>
    );
}