import React, { useRef } from 'react'
import './Contact.css'
import { SiGmail } from 'react-icons/si'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { toast, Toaster } from 'react-hot-toast'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_vumsxww', 'template_o6zq5pf', form.current, '4U9cfwaK154485vNs')
      .then((result) => {
        toast.success('Mensaje enviado')
      }, (error) => {
        toast.error(error.text)
      })

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Contact</h5>
      <h2>Contacto</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='text-light'>juanicamuss15@gmail.com</h5>
            <a href="mailto:juanicamuss15@gmail.com" target="_blank" rel='noreferrer'>Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5 className='text-light'>Juani Camus</h5>
            <a href="https://www.facebook.com/juani.camus" target="_blank" rel='noreferrer'>Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5 className='text-light'>+54 9 3854353077</h5>
            <a href="https://api.whatsapp.com/send?phone=+5493854353077&text=Hola!" target="_blank" rel='noreferrer'>Enviar Mensaje</a>
          </article>
        </div>
        { /* END OF CONTACT OPTIONS */ }
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre y Apellido' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Su Mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
      <Toaster
                position='bottom-right'
                reverseOrder={true}
                toastOptions={{
                  className: '',
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: 'white',
                    fontSize: '15px'
                  }
                }}
              />
    </section>
  )
}

export default Contact
