import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylesheet from './highlights.scss';

export const Highlight = ({
  title,
  content,
  icon = null,
  isDiamond = false,
  isLight = false,
  isCentered = false
}) => {
  const highlightWrapperClass = classNames({
    'Highlight__wrapper': true,
    'Highlight__wrapper--is-diamond': isDiamond,
    'Highlight__wrapper--is-light': isLight,
    'Highlight__wrapper--is-centered': isCentered || icon,
    'Highlight__wrapper--has-icon': icon
  })
  const highlightCardClass = classNames({
    'Highlight__card': true,
    'Highlight__card--is-diamond': isDiamond,
    'Highlight__card--is-light': isLight,
  })
  const highlightTitleClass = classNames({
    'Highlight__card-title': true,
    [icon]: icon,
  })
  return (
    <article key={title} className={highlightWrapperClass}>
      <div className={highlightCardClass}>
        <h2 className={highlightTitleClass}>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  )
}

export class Highlights extends Component {
  render() {
    const { highlights, hasAlternateColors = true, startsFromLight = true } = this.props;
    return (
      <section className='Highlight__group'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          highlights.map((highlight, index) => (
            <Highlight
              key={highlight.title}
              title={highlight.title}
              content={highlight.content}
              icon={highlight.icon}
              isLight={hasAlternateColors && (index + 1) % 2 === (startsFromLight ? 1 : 0)}
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
  icon: PropTypes.string,
  isDiamond: PropTypes.bool,
  isLight: PropTypes.bool,
  isCentered: PropTypes.bool,
}

Highlight.defaultProps = {
  isDiamond: false,
  isLight: false,
  isCentered: false,
  icon: null,
}

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.element),
  hasAlternateColors: PropTypes.bool,
  startsFromLight: PropTypes.bool
};

Highlights.defaultProps = [];
