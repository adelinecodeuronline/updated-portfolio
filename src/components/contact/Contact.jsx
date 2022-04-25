import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-simple-toasts';
import Zoom from 'react-reveal/Zoom';
import './contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vkhuyh8', 'template_zk4mtqw', form.current, 'd3h_aiKsWP4mi5s72')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };


    return(
        <section id="contact">
            <div className="container contact__container">
                <Zoom right> 
                    <article className="contact-mail">
                        <h4>Contact</h4>
                        <p>contact(at)kemister.fr</p>
                        <p>+33 6 77 87 94 84</p>
                    </article>
                </Zoom>
                <Zoom left> 
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Nom" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <input type="number" name="phone" placeholder="Téléphone" required/>
                        <textarea name="message" rows="7" placeholder="Votre message" required></textarea>
                        <button type="submit" className="btn btn-form" onClick={() => toast('Merci, votre message a bien été envoyé', 3000)}>Envoyer</button>
                    </form>
                </Zoom>
            </div>
        </section>
    )
}

export default Contact