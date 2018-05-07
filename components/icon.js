import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './icon.scss'

export const Icon = ({ name }) => (
  <div className="Icon">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className={`Icon__wrapper Icon--is-${name}`}/>
  </div>
)

export const IconList = () => {
  const icons = ['facebook', 'reddit', 'youtube', 'discord', 'twitter', 'medium', 'github'];
  return (
    <div className='IconList'>
      {
        icons.map(icon => (<Icon key={icon} name={icon} />))
      }
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}
