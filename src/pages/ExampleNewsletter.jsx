import './ExampleNewsletter.css';
import { useState, useEffect } from 'react';

export default function ExampleNewsletter() {

    const [time, setTime] = useState(60);
    const [message, setMessage] = useState("");

    function handleSendButton(event) {
        event.preventDefault();

        const emailInput = document.querySelector('input[type="email"]');
        if (!emailInput.value) {
            setMessage(<span style={{color: 'red'}}>Falta por introducir el email.</span>);
            return;
        } else if (!emailInput.value.includes('@')) {
            setMessage(<span style={{color: 'red'}}>El email introducido no es válido.</span>);
            return;
        }

        setMessage(<span style={{color: 'lime', textAlign: 'center'}}>¡Te has suscrito correctamente al newsletter! 😀</span>);

        if (message !== "") {
            setSended(true);
        }
    }

    useEffect(() => {
        const interval =  setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    })


    return (
        <div className="main-container">
            <div className="name-container">
                <h2>Newsletter</h2>
            </div>

            <div className="offer-container">
                <img src="/img/50offer.png" alt="" />
                <div className="offer-info">
                    <h2>¡Cursos en descuento!</h2>
                    <p>¡Estás de suerte! Aprovecha el 50% de descuento en mis cursos</p>
                </div>
            </div>
            <div className="offer-container" style={{ 'flexDirection': 'row-reverse' }}>
                <img src="/img/25offer.png" alt="" />
                <div className="offer-info">
                    <h2>¡Clases en oferta!</h2>
                    <p>¡Enhorabuena! Ahora mismo puedes optar hasta un 25% de descuento en los packs de clases que estoy ofertando</p>
                </div>
            </div>

            <div className="get-container">
                {time > 0 ? <><span>¡{time} segundos restantes!</span> <button>¡APROVECHAR OFERTAS! <br /> <span id="countdown"></span> </button></> : <button style={{ color: "white", backgroundColor: "red" }}>¡OFERTAS FINALIZADAS!</button>}
            </div>
        </div>
    );
}