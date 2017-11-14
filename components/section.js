import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './section.scss';

class Section extends React.Component {
  render() {
    const { title, isLight = false, isWhite = false, hasLessSpacing = false } = this.props;
    return (
      <section className='Section'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <h3 
          dangerouslySetInnerHTML={{ __html: title }} 
          className={
            `Section__title 
            ${isLight && 'Section__title--is-light'} 
            ${isWhite && 'Section__title--is-white'}
            ${hasLessSpacing && 'Section__title--has-less-spacing'}
          `}
        />
      </section>
    )
  }
}

Section.defaultProps = {
    isLight: false,
    isWhite: false,
    hasLessSpacing: false
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    isLight: PropTypes.bool,
    isWhite: PropTypes.bool,
    hasLessSpacing: PropTypes.bool
}

export default Section;