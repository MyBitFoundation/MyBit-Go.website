import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './section.scss';

class Section extends React.Component {
  render() {
    const { title, isLight = false, isWhite = false } = this.props;
    return (
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
  }
}

Section.defaultProps = {
    isLight: false,
    isWhite: false
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    isLight: PropTypes.bool,
    isWhite: PropTypes.bool
}

export default Section;