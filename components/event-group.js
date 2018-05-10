import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylesheet from './event-group.scss';

class EventGroup extends Component {
  render() {
    return (
      <section className="Group">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.group.map(member => (
          <article key={member.name} className="Team__members--card">
            <div className="Team__members--intro">
              <p>{member.where}</p>
            </div>
          </article>
        ))}
      </section>
    )
  }
}

EventGroup.propTypes = {
  group: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      where: PropTypes.string.isRequired
    })
  )
}

EventGroup.defaultProps = []

export default EventGroup
