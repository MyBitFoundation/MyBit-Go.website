import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './wrapper.scss'

const wrapper = ({ children, isLight = false }) => (
  <div className={`Wrapper ${isLight && 'Wrapper--is-light'} row`}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    { children }
  </div>
)

wrapper.defaultProps = {
  isLight: false
}

wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool
}

export default wrapper;