import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './roadmap.scss'

const roadmap = ({ translator }) => {
  const events = [
    {
      title: 'Q4 2016',
      description: 'common:mybit_roadmap_stage_1'
    },
    {
      title: 'Q1 2017',
      description: 'common:mybit_roadmap_stage_2'
    },
    {
      title: 'Q3 2017',
      description: 'common:mybit_roadmap_stage_3'
    },
    {
      title: 'Q1 2018',
      description: 'common:mybit_roadmap_stage_4'
    },
    {
      title: 'Q3 2018',
      description: 'common:mybit_roadmap_stage_5'
    },
    {
      title: 'Q1 2019',
      description: 'common:mybit_roadmap_stage_6'
    }
  ]
  const roadmapEvents = events.map(event => (
    <li key={event.title} className="Roadmap__event">
      <span className="Roadmap__event-title">{event.title}</span>
      <span className="Roadmap__event-description">
        {translator(event.description)}
      </span>
    </li>
  ))
  return (
    <div className="Roadmap">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <span className="Roadmap__event-line" />
      <ol className="Roadmap__events">{roadmapEvents}</ol>
    </div>
  )
}

roadmap.defaultProps = {
  translator: () => {}
}

roadmap.propTypes = {
  translator: PropTypes.function
}

export default roadmap
