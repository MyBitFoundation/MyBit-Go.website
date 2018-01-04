import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './wrapper.scss'

const wrapper = ({ children, isLight = false, isWhite = false, isMain = false, isGray = false }) => {
  const modifiers = 
    isLight && 'Wrapper--is-light' || 
    isWhite && 'Wrapper--is-white' ||
    isGray && 'Wrapper--is-gray' ||
    isMain && 'Wrapper--is-main' || ''
  return (
    <div className={`Wrapper ${modifiers}`}>
      <div className='Wrapper__container row'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        { children }
      </div>
    </div>
  )
}

wrapper.defaultProps = {
  isLight: false,
  isWhite: false,
  isMain: false,
  isGray: false
}

wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool,
  isWhite: PropTypes.bool,
  isMain: PropTypes.bool,
  isGray: PropTypes.bool
}

export default wrapper;