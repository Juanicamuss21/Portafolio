import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer>
      {/* <a href="logo" className="footer__logo">JUANI CAMUS</a> */}

      <ul className="permalinks">
        <Link to='home'>
        <li><a href="home">Home</a></li>
        </Link>
        <Link to='about'>
        <li><a href="about">About</a></li>     
        </Link> 
        <Link to='experience'>           
        <li><a href="experience">Experience</a></li>  
        </Link>
        <Link to='services'>
        <li><a href="services">Services</a></li>
        </Link>
        <Link to='portfolio'>
        <li><a href="portfolio">Projects</a></li>
        </Link>
        {/* <Link to='testimonials'>
        <li><a href="testimonials">Testimonials</a></li>
        </Link> */}
        <Link to='contact'>
        <li><a href="contact">Contact</a></li>
        </Link>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/juan-ignacio-camus-703102251/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
      <a href="https://github.com/Juanicamuss21" target="_blank" rel='noreferrer'><FaGithub/></a>
      <a href="mailto:juanicamuss15@gmail.com" target="_blank" rel='noreferrer'><SiGmail/></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Juan Ignacio Camus - Portafolio</small>
      </div>

    </footer>
  )
}

export default Footer