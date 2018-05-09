import React from 'react'
import PropTypes from 'prop-types'
import './events.scss'

export const Events = ({ events }) => (
  <div className='Events-container'>
    {
      events.map(event => <Event key={event.title} {...event} />)
    }
  </div>)

export const Event = ({ title, description, imageSrc, imageAlt, button }) => {
  return (
    <article className='Event'>
      <h2 className='Event--title'>{title}</h2>
      <figure className='Event__container'>
        <img src={imageSrc} alt={imageAlt} />
        <figcaption>{description}</figcaption>
      </figure>
      {button}
    </article>)
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  button: PropTypes.element.isRequired
}

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape).isRequired
}
