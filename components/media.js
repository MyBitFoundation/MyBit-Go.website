import React, { Component } from 'react'
import PropTypes from 'prop-types'
import stylesheet from './media.scss'

export const Medium = ({ title, content, iconClassName, isCentered = false }) => (
  <article key={title} className={['Media__card', isCentered ? "Media__card--is-centered" : "" , iconClassName].join(' ')}>
    <h2 className="Media__card-title">{title}</h2>
    {React.isValidElement(content) ? content : <div dangerouslySetInnerHTML={{ __html: content }} />}

  </article>
)

export class Media extends Component {
  render() {
    const { media } = this.props;
    return (
      <section className="Media">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {media.map(medium => <Medium key={medium.title} {...medium} />)}
      </section>
    )
  }
}

Medium.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
  isCentered: PropTypes.bool
}

Media.propTypes = {
  media: PropTypes.arrayOf(PropTypes.element).isRequired
}

Medium.defaultProps = {
  isCentered: false,
}
