import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './section.scss';

const section = ({ title, isLight = false, isWhite = false }) => (
  <section className='Section'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h3 
      dangerouslySetInnerHTML={{ __html: title }} 
      className={
        `Section__title 
        ${isLight && 'Section__title--is-light'} 
        ${isWhite && 'Section__title--is-white'}
      `}
    />
  </section>
)

section.defaultProps = {
    isLight: false,
    isWhite: false
}

section.propTypes = {
    title: PropTypes.string.isRequired,
    isLight: PropTypes.bool,
    isWhite: PropTypes.bool
}

export default section;