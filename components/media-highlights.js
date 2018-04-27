import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesheet from './media-highlights.scss';

export const MediaHighlight = ({ title, content, iconClassName }) => (
  <section className="MediaHighlight">
    <article key={title} className="MediaHighlight__card">
      <h2 className={["MediaHighlight__card-title", iconClassName].join(' ')}>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  </section>
)

export class MediaHighlights extends Component {
  render() {
    const { highlights } = this.props;
    return (
      <div className='MediaHighlights'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          highlights.map(highlight => (
            <MediaHighlight
              key={highlight.title}
              iconClassName={highlight.iconClassName}
              title={highlight.title}
              content={highlight.content}
            />)
          )
        }
      </div>
    );
  };
}

MediaHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired
}

MediaHighlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.element)
};

MediaHighlights.defaultProps = [];
