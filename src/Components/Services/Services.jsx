import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Skills</h5>
      <h2>Habilidades</h2>
      <div className="container services__container">
        <article className='service'>
         <div className="service__head">
          <h3>Habilidades Blandas</h3>
         </div>

         <ul className='service__list'>

          <li><BiCheck className='service__list-icon'/>
          <p>Disponibilidad de tiempo completo.</p>
          </li>

          <li><BiCheck className='service__list-icon'/>
          <p>Trabajo en equipo.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Comunicación efectiva.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Resolución del problema.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Creatividad.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Empatía.</p>
          </li>

         </ul>
        </article>
        {/* End Of Article UI/UX */}
        <article className='service'>
         <div className="service__head">
          <h3>Otras Experiencias</h3>
         </div>

         <ul className='service__list'>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>NextJS 13.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Figma.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Asana.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Deploy.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Lenguajes: Español. <br/> Ingles (Intermedio).</p>
          </li>

         </ul>
        </article>
        {/* End Of Web Development */}
        <article className='service'>
         <div className="service__head">
          <h3>Habilidades Blandas</h3>
         </div>

         <ul className='service__list'>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Gestión del tiempo.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Adaptabilidad.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Pensamiento crítico.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Orientación a resultados.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Curiosidad y Aprendizaje Constante.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
          <p>Dedicación.</p>
          </li>

         </ul>
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  )
}

export default Services
