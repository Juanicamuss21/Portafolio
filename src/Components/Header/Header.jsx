import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import imgHeader from '../../assets/Img Header.jpeg'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
        <h5 className='headline'>Hola! Soy</h5>
        <h1>Juan Ignacio Camus</h1>
        <h5 className='text-light headline'>Full Stack Developer</h5>
        <h5 className='text-light'>HTML | CSS | Javascript | Typescript | React | Redux | NodeJS | ExpressJS | SQL | MongoDB</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={imgHeader} alt="Me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
