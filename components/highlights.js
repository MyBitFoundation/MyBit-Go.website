import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesheet from './highlights.scss';

class Highlights extends Component {
  render() {
    return (
      <section className="Highlights">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          this.props.highlights.map(highlight => (
            <article key={highlight.title} className="Highlights__card">
              <h2 className="Highlights__card--title">{highlight.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: highlight.content }} />
            </article>
          )
          )
        }
      </section>
    );
  };
}

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

Highlights.defaultProps = [];

export default Highlights;
