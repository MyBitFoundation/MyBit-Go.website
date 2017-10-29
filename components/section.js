import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './section.scss';

const section = ({ title }) => (
  <section className='Section'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h3 className='Section__title'>{ title }</h3>
  </section>
)

section.propTypes = {
    title: PropTypes.string.isRequired
}

export default section;