import {useState, useEffect} from "react";
import './Newsletter.css';
import ExampleNewsletter from "./ExampleNewsletter";

export default function Newsletter() {

    const [message, setMessage] = useState("");
    const [sended, setSended] = useState(false);

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


    return (
        <>
            <div className="register-container">
                <span>¡Regístrate en mi newsletter y no te pierdas ninguna oferta!</span>
                <input type="email" placeholder="Introduce tu email" />
                <button onClick={handleSendButton}>¡REGÍSTRATE!</button>
                {message && <span className="message">{message}</span>}
            </div>

            <ExampleNewsletter />            
        </>
    );
}