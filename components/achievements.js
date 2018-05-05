import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesheet from './achievements.scss';

class Achievements extends Component {
  render() {
    return (
      <ol className="Achievements">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.achievements.map(milestone => (
          <li key={milestone.description} className="Achievements__list-item">
            <div className="Achievements__list-item--wrapper">
              <b className="Achievements__list-item--title">
                {milestone.title}
              </b>
              <span className="Achievements__list-item--description">
                {milestone.description}
              </span>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

Achievements.propTypes = {
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

Achievements.defaultProps = [];

export default Achievements;
