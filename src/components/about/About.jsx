import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {BsBuildingFillGear} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <BsBuildingFillGear  className='about__icon'/>
              <h5>IT Industry</h5>
              <small>11 years experience</small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>ReactJS Developer</h5>
              <small>4+ years experience</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>ServiceNow Developer</h5>
              <small>Certified System Administrator</small>
            </article>
          </div>

          <p>
          I am a type of person who is very determined when it comes to success and goals in life. My willingness to learn new things makes me discover my capabilities and strengths. And most of all I always challenge myself to do more and do great.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
