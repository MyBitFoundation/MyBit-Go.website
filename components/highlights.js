import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './highlights.scss'
import { IconList, PartnersList, MediaList } from './icon'
import { industries } from './constants/industries'
import { achievements } from './constants'
import Achievements from './achievements'

export const RoadmapHighlight = () => (
  <Highlight
    title={'Roadmap'}
    isLight
    isTransparent
    isBig
    isFullWidth
    style={{ margin: 'auto' }}
    content={<Achievements achievements={achievements} />}
  />
)

export const CommunityHighlight = () => (
  <Highlight
    title={'Join our Community'}
    isLight
    isTransparent
    isBig
    isFullWidth
    style={{ margin: 'auto' }}
    content={<IconList />}
  />
)

export const IndustriesHighlight = () => (
  <Highlights
    hasAlternateColors={false}
    highlights={industries}
    className={"Highlight__group--is-industries"}
  />
)

export const MediaHighlight = ({mobile}) => (
  <Highlight
    title={'Media'}
    isLight
    isTransparent
    isBig
    isFullWidth
    style={{ margin: 'auto' }}
    content={<MediaList mobile={mobile}/>}
  />
)

export const PartnersHighlight = () => (
  <Highlight
    title={'Partners'}
    isLight
    isTransparent
    isBig
    isFullWidth
    style={{ margin: 'auto' }}
    content={<PartnersList />}
  />
)

export const InvestorHighlight = ({content, title}) => (
  <div className="InvestorHighlight">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Highlight
      title={title}
      isCentered
      content={content}
      isLight={false}
    />
  </div>
)

export const Highlight = ({
  title,
  content,
  icon = null,
  link = null,
  style,
  isDiamond = false,
  isRectangle = false,
  isLight = false,
  isCentered = false,
  isTransparent = false,
  isThin = false,
  isBig = false,
  isMedium = false,
  isFullWidth = false,
  hasHoverEffect = false,
}) => {
  const highlightWrapperClass = classNames({
    'Highlight__wrapper': true,
    'Highlight__wrapper--is-diamond': isDiamond,
    'Highlight__wrapper--is-rectangle': isRectangle,
    'Highlight__wrapper--is-light': isLight,
    'Highlight__wrapper--is-transparent': isTransparent,
    'Highlight__wrapper--is-thin': isThin,
    'Highlight__wrapper--is-big': isBig,
    'Highlight__wrapper--is-medium': isMedium,
    'Highlight__wrapper--is-full-width': isFullWidth,
    'Highlight__wrapper--is-centered': isCentered || icon,
    'Highlight__wrapper--has-icon': icon,
    'Highlight__wrapper--has-link': link,
    'Highlight__wrapper--has-hover': hasHoverEffect,
  })
  const highlightCardClass = classNames({
    'Highlight__card': true,
    'Highlight__card--is-diamond': isDiamond,
    'Highlight__card--is-rectangle': isRectangle,
    'Highlight__card--is-light': isLight,
    'Highlight__card--is-big': isBig,
    'Highlight__card--is-medium': isMedium,
    'Highlight__card--is-full-width': isFullWidth,
    'Highlight__card--is-transparent': isTransparent
  })

  const highlightTitleClass = classNames({
    'Highlight__card-title': true,
    [icon]: icon
  })

  const highlightContentWrapper = (
    <div className={highlightCardClass}>
      <h2 className={highlightTitleClass}>{title}</h2>
      {React.isValidElement(content) ? content : <div dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  )

  const highlightContent = link ?
    (
      <a
        key={title}
        className={highlightWrapperClass}
        style={style}
        href={link}
      >
        { highlightContentWrapper }
      </a>
    ) :
    (
      <article
        key={title}
        className={highlightWrapperClass}
        style={style}
      >
        { highlightContentWrapper }
      </article>
    )

  return highlightContent;
}

export class Highlights extends Component {
  render() {
    const {
      highlights,
      hasAlternateColors = true,
      startsFromLight = true,
      isDiamond,
      isRectangle,
      className,
    } = this.props
    const highlightGroupClass = classNames({
      'Highlight__group': true,
      'Highlight__group--is-diamond-group': isDiamond,
      'Highlight__group--is-rectangle-group': isRectangle,
      [className]: className,
    })
    return (
      <section className={highlightGroupClass}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {highlights.map((highlight, index) => (
          <Highlight
            key={highlight.title}
            isLight={
              highlight.isLight ||
              (hasAlternateColors &&
                (index + 1) % 2 === (startsFromLight ? 1 : 0))
            }
            {...highlight}
            isRectangle
            className
          />
        ))}
      </section>
    )
  }
}

MediaHighlight.propTypes = {
  mobile: PropTypes.bool.isRequired,
}

InvestorHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

Highlight.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  isRectangle: PropTypes.bool,
  isDiamond: PropTypes.bool,
  isLight: PropTypes.bool,
  isCentered: PropTypes.bool,
  isTransparent: PropTypes.bool,
  isThin: PropTypes.bool,
  isBig: PropTypes.bool,
  isMedium: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  style: PropTypes.object
}

Highlight.defaultProps = {
  isRectangle: false,
  isDiamond: false,
  isLight: false,
  isCentered: false,
  isTransparent: false,
  isThin: false,
  isBig: false,
  isMedium: false,
  isFullWidth: false,
  style: {},
  icon: null,
  link: null
}

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.object),
  hasAlternateColors: PropTypes.bool,
  startsFromLight: PropTypes.bool,
  isDiamond: PropTypes.bool,
  isRectangle: PropTypes.bool,
  className: PropTypes.string,
}

Highlights.defaultProps = []

InvestorHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}
