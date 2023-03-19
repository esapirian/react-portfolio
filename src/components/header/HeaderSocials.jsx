import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/marjon-c-b8479a101/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/esapirian/react-portfolio' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials