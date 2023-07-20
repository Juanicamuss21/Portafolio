import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            {/* <small className='text-light'>basic</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Redux</h4>
            {/* <small className='text-light'>basic</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          </div>
        </div>
        {/* frontend development end */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NodeJS</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            {/* <small className='text-light'>intermediate</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Express</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience