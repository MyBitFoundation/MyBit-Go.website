import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesheet from './highlights.scss';

export const Highlight = ({ title, content }) => (
  <section className="Highlight">
    <article key={title} className="Highlight__card">
      <h2 className="Highlight__card-title">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  </section>
)

export class Highlights extends Component {
  render() {
    const { highlights } = this.props;
    return (
      <div className='Highlights'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          highlights.map(highlight => (
            <Highlight
              key={highlight.title}
              title={highlight.title}
              content={highlight.content}
            />)
          )
        }
      </div>
    );
  };
}

Highlight.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.element)
};

Highlights.defaultProps = [];
