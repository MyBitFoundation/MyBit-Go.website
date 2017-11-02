import React from 'react'
import stylesheet from './roadmap.scss'

const Roadmap = () => {
  const events = [{
    title: 'Q4 2016',
    description: 'Idea conceived'
  },{
    title: 'Q1 2017',
    description: 'Whitepaper Published and Architecture Designed.'
  },{
    title: 'Q3 2017',
    description: 'Ethereum TestNet Demo and Token Pre-sale'
  },{
    title: 'Q1 2018',
    description: 'Alpha Launch'
  }, {
    title: 'Q3 2018',
    description: 'Token Sale phase 2'
  }, {
    title: 'Q4 2018',
    description: 'Platform Launch'
  }]
  const roadmapEvents = events.map(event => (
    <li key={event.title} className='Roadmap__event'>
      <span className='Roadmap__event-title'>{event.title}</span>
      <span className='Roadmap__event-description'>{event.description}</span>
    </li>
  ))
  return (
    <div className='Roadmap'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <ol className='Roadmap__events'>
        { roadmapEvents }
      </ol>
    </div>
  )
}

export default Roadmap