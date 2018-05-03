import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylesheet from './highlights.scss';

export const Highlight = ({
  title,
  content,
  isDiamond = false,
  isLight = false
}) => {
  const highlightWrapperClass = classNames({
    'Highlight__wrapper': true,
    'Highlight__wrapper--is-diamond': isDiamond,
    'Highlight__wrapper--is-light': isLight,
  })
  const highlightCardClass = classNames({
    'Highlight__card': true,
    'Highlight__card--is-diamond': isDiamond,
    'Highlight__card--is-light': isLight,
  })
  return (
    <article key={title} className={highlightWrapperClass}>
      <div className={highlightCardClass}>
        <h2 className="Highlight__card-title">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
}

export class Highlights extends Component {
  render() {
    const { highlights, hasAlternateColors = true } = this.props;
    return (
      <section className='Highlight__group'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          highlights.map((highlight, index) => (
            <Highlight
              key={highlight.title}
              title={highlight.title}
              content={highlight.content}
              isLight={hasAlternateColors && (index + 1) % 2 === 0}
            />)
          )
        }
      </section>
    );
  };
}

Highlight.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isDiamond: PropTypes.bool,
  isLight: PropTypes.bool,
}

Highlight.defaultProps = {
  isDiamond: false,
  isLight: false
}

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.element),
  hasAlternateColors: PropTypes.bool
};

Highlights.defaultProps = [];
