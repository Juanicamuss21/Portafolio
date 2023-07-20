import React from 'react'
import "./About.css"
import {FaAward} from "react-icons/fa"
// import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import imgJuani from "../../assets/img-juani-sinfondo.png"

const About = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <h2>Sobre Mí</h2>

      <div className="container about__container">

        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={imgJuani} alt=''/>
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>

              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>+1 año trabajando en proyectos</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>6 Proyectos Completados</small>
            </article>
          </div>
        
        
        <p>¡Bienvenidos a mi portafolio web! Mi objetivo es mostrarle una variedad de trabajos que he realizado como desarrollador web, así como información sobre mí. Mis habilidades incluyen diseño y desarrollo de sitios web, integración de API y optimización de motores de búsqueda. Espero que este portafolio lo ayude a comprender la amplia gama de servicios que ofrezco como desarrollador web y le brinde la confianza para contactarme para sus futuros proyectos. ¡Gracias por la visita!.        
        </p>
            
       <a href="#contact" className='btn btn-primary'>Contacto</a>
       
       </div>
      </div>
    </section>
  )
}

export default About