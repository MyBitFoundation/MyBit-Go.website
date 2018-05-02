import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesheet from './highlights.scss';

export const Highlight = ({ title, content }) => (
  <article key={title} className="Highlights__card">
    <h2 className="Highlights__card-title">{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </article>
)

export class Highlights extends Component {
  render() {
    const { highlights } = this.props;
    return (
      <section className='Highlights'>
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
      </section>
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
