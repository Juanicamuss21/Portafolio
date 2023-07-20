import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiGmail} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/juan-ignacio-camus-703102251/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Juanicamuss21" target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href="https://gmail.com" target="_blank" rel='noreferrer'><SiGmail/></a>

    </div>
  )
}

export default HeaderSocials