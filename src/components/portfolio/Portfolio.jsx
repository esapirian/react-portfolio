import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Myself 1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Myself 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Myself 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title,github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank">Github Project</a>
                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                  </div>
              </article>
            )
          }
          )
        }
      </div>

      {/* <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='' />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target="_blank">Github Project</a>
              <a href="https://dribble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
      </div> */}
    </section>
  )
}

export default Portfolio