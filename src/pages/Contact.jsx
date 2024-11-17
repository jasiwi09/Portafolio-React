import { useState } from 'react';
import './Contact.css';


export default function Contact() {

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

        setMessage(<span style={{color: 'lime'}}>¡Email recibido! Pronto contactaré contigo 😀</span>);
    }

    return (
        <div className="container-contact" id="contact">
            <form action="">
                <h2>¿Tienes algún proyecto en mente?</h2>
                <h3>¡Contacta conmigo!</h3>
                <input type="email" placeholder="Introduce tu email" required />
                <button type="submit" onClick={handleSendButton}>Enviar</button>
                {message}
            </form>
        </div>
    );
}