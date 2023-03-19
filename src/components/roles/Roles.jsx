import React from 'react'
import './roles.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'


const Roles = () => {
  return (
    <section id='roles'>
      <h5>My Recent Work</h5>
      <h2>Roles and Responsibilities</h2>
      
      <div className="container roles__container">
        <div className="roles__reactjs">
            <h3>ReactJS Frontend Developer</h3>
            <div className="roles__content">
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Develop new features</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Enhance existing features</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Create customized components</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Implementing UI design</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Collaborate with the team members</h4>
                    </div>
                </article>
            </div>
        </div>
        <div className="roles__servicenow">
            <h3>ServiceNow Developer</h3>
            <div className="roles__content">
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Create Service Portal</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Create Catalog Items</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Create Modules</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Create Tables</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Business Rules</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>UI Policies and UI Actions</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Implement Flow Design</h4>
                    </div>
                </article>
            </div>
        </div>
        <div className="roles__scrum">
            <h3>Scrum Master</h3>
            <div className="roles__content">
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Lead the Sprint Planning</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Lead the daily scrum meetings</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Meeting with Product Owner for priorities</h4>
                    </div>
                </article>
            </div>
        </div>
        <div className="roles__systemadmin">
            <h3>System Administrator</h3>
            <div className="roles__content">
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Maintain assigned servers</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Apply latest patches</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Fix vulnerabilities</h4>
                    </div>
                </article>
                <article className='roles__details'>
                    <BsFillCheckCircleFill className="roles__details-icon" />
                    <div>
                        <h4>Fix errors</h4>
                    </div>
                </article>
            </div>
        </div>
      </div>
    </section>
)                 
}

export default Roles