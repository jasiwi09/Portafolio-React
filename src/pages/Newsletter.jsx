import {useState, useEffect} from "react";
import './Newsletter.css';

export default function Newsletter() {

    const [time, setTime] = useState(60);

    useEffect(() => {
        const interval =  setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    })


    return (
        <div className="main-container">
            <div className="name-container">
                <h1>Antonio Martinez</h1>
                <h2>Newsletter</h2>
            </div>

            <div className="offer-container">
                <img src="/img/50offer.png" alt="" />
                <div className="offer-info">
                    <h2>¡Cursos en descuento!</h2>
                    <p>¡Estás de suerte! Aprovecha el 50% de descuento en mis cursos</p>
                </div>
            </div>
            <div className="offer-container" style={{'flexDirection': 'row-reverse'}}>
                <img src="/img/25offer.png" alt="" />
                <div className="offer-info">
                    <h2>¡Clases en oferta!</h2>
                    <p>¡Enhorabuena! Ahora mismo puedes optar hasta un 25% de descuento en los packs de clases que estoy ofertando</p>
                </div>
            </div>

            <div className="get-container">
                {time > 0 ? <><span>¡{time} segundos restantes!</span> <button>¡APROVECHAR OFERTAS! <br /> <span id="countdown"></span> </button></> : <button style={{color: "white", backgroundColor:"red"}}>¡OFERTAS FINALIZADAS!</button>}
            </div>
        </div>
    );
}