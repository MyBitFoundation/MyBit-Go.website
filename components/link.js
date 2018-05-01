import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './link.scss'

export const Link = ({name, handleClick}) => {
  return (
    <div className="Link">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <p className="Link__text" onClick={handleClick}>{name}</p>
    </div>
  )
}


Link.defaultProps = {
  handleClick: () => {}
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.function
}
