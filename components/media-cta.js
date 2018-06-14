import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './media-cta.scss'

export const MediaCTA = ({
  title,
  content,
  button,
  icon = null,
  isDark = false,
  isLeft = false,
  isRight = false
}) => {
  const MediaCTAClass = classNames({
    'MediaCTA__card': true,
    'MediaCTA__card--is-dark': isDark,
    'MediaCTA__card--is-left': isLeft,
    'MediaCTA__card--is-right': isRight,
    [icon]: icon
  })
  const MediaCTAButtonWrapperClass = classNames({
    'MediaCTA__button-wrapper': true,
    'MediaCTA__button-wrapper--is-left': isLeft,
    'MediaCTA__button-wrapper--is-right': isRight
  })

  return (
    <article key={title} className={MediaCTAClass}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <h2 className="MediaCTA__card--title">{title}</h2>
      {React.isValidElement(content) ? content : <div dangerouslySetInnerHTML={{ __html: content }} />}
      {button &&
        <div className={MediaCTAButtonWrapperClass}>
          {button}
        </div>
      }
    </article>
  )
}

MediaCTA.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.arrayOf(PropTypes.element),
  icon: PropTypes.string,
  isDark: PropTypes.bool,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool
}

MediaCTA.defaultProps = []
