import { useState } from 'react';
import './Contact.css';


export default function Contact() {

    const [message, setMessage] = useState("");

    function handleSendButton(event) {
        event.preventDefault();

        const emailInput = document.querySelector('input[type="email"]');
        const nameInput = document.querySelector('input[type="text"]');
        const messageInput = document.querySelector('textarea');
        if (!emailInput.value || !nameInput.value || !messageInput.value) {
            setMessage(<span style={{color: 'red'}}>Falta por introducir algún campo.</span>);
            return;
        } else if (!emailInput.value.includes('@')) {
            setMessage(<span style={{color: 'red'}}>El email introducido no es válido.</span>);
            return;
        }

        setMessage(<span style={{color: 'lime', textAlign: 'center'}}>¡Email recibido! Pronto contactaré contigo 😀</span>);
        
    }

    return (
        <div className="container-contact" id="contact">
            <form action="">
                <h2>¿Tienes algún proyecto en mente?</h2>
                <h3>¡Contacta conmigo!</h3>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Introduce tu email" required />
                <label htmlFor="name">Nombre completo</label>
                <input type="text" placeholder="Introduce tu nombre" name='name' required />
                <label htmlFor="name">Mensaje</label>
                <textarea name="name" id="name" placeholder='Introduce el mensaje'></textarea>

                <button type="submit" onClick={handleSendButton}>Enviar</button>
                {message}
            </form>
        </div>
    );
}