import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f4ecj2m', 'template_1a85uju', form.current, 'BViK66EQUuf-7aKa1')
           
    };
    
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2> Contact Me</h2>

            <div className="container contact_container">

                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>rajmauryakushwah9211@gmail.com</h5>
                        <a href="mailto:rajmauryakushwah9211@gmailcom" type='_blank'>Mail me !</a>
                    </article>
                    <article className='contact_option'>
                        <MdOutlineEmail/>
                        <h4>Messenger</h4>
                        <h5>Thomas_shelby</h5>
                        <a href="mailto:rajmauryakushwah9211@gmail.com">DM me !</a>
                    </article>
                    <article className='contact_option'>
                  <BsWhatsapp/>
                        <h4>Wshat's up</h4>
                        <h5>+916260028844</h5>
                        <a href="https://api.whatsapp.com/send?phone=916260028844" target='_blank'>Whatsapp me !</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name ' required />

                    <input type="email" name='name' placeholder='Your Gmail id ' required />
                    <textarea name="messsage"  cols="30" rows="10" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>

        </section>
    )
}
export default Contact