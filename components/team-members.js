import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LinkedIn from '../static/svgs/social/linkedin.svg';
import TeamMemberIcon from '../static/svgs/other/team-member-icon.svg';
import stylesheet from './team-members.scss';

class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTeamMember: null
    }
    this.setActiveTeamMember = this.setActiveTeamMember.bind(this)
  }
  setActiveTeamMember(activeTeamMember) {
    this.setState({ activeTeamMember })
  }
  render() {
    const { activeTeamMember } = this.state;
    return (
      <section className="Team">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.team.map(member => (
          <article
            key={member.name}
            onClick={() => this.setActiveTeamMember(member.name)}
            className={
              classNames({
                "Team__members-card": true,
                "Team__members-card--is-active": member.name === activeTeamMember
              })
            }
          >
            <div className="Team__members-icon">
              <TeamMemberIcon width="104px" height="106px" />
            </div>
            <h2 className="Team__members-name">{member.name}</h2>
            <div className="Team__members-intro">
              <p>{member.job}</p>
            </div>
            <div className="Team__members-bio">
              <p>{member.bio}</p>
            </div>
            <ul className="Team__members-links">
              <li>
                <a href={member.linkedin} rel="noopener noreferrer" target="_blank">
                  <LinkedIn fill="#ffffff" />
                </a>
              </li>
            </ul>
          </article>
        ))}
      </section>
    )
  }
}

TeamMembers.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      linkedin: PropTypes.string
    })
  )
}

TeamMembers.defaultProps = []

export default TeamMembers
