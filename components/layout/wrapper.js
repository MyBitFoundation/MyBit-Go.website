import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './wrapper.scss'

const wrapper = ({ children, isLight = false, isWhite = false }) => (
  <div className={`Wrapper ${isLight && 'Wrapper--is-light'} ${isWhite && 'Wrapper--is-white'} row`}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    { children }
  </div>
)

wrapper.defaultProps = {
  isLight: false,
  isWhite: false
}

wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool,
  isWhite: PropTypes.bool
}

export default wrapper;