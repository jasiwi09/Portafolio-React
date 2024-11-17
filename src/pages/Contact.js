import { useState } from 'react';
import './Contact.css';


export default function Contact() {

    const [message, setMessage] = useState("");


    function handleSendButton(event) {
        event.preventDefault();

        const emailInput = document.querySelector('input[type="text"]');
        if (!emailInput.value) {
            setMessage(<span style={{color: 'red'}}>Falta por introducir el email.</span>);
            return;
        }

        const checkbox = document.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            setMessage(<span style={{color: 'red'}}>Debes aceptar recibir información y noticias sobre la web.</span>);
            return;
        }

        setMessage(<span style={{color: 'lime'}}>¡Email recibido! Pronto contactaré contigo 😀</span>);
    }

    return (
        <div className="container-contact" id="contact">
            <form action="">
                <h2>¿Tienes algún proyecto en mente?</h2>
                <h3>¡Contacta conmigo!</h3>
                <input type="text" placeholder="Introduce tu email" />
                <div className="checkbox-box">
                    <input type="checkbox" id="terms" />
                    <label for="">Acepto recibir información y noticias sobre la web</label>
                </div>
                {message}
                <button onClick={handleSendButton}>Enviar</button>
            </form>
        </div>
    );
}