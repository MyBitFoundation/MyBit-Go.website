import React from 'react'
import LinkedIn from '../svgs/icons/linkedin.svg'
import stylesheet from './team.scss'

import { connor, ash, ian, josh, kyle, nick } from './constants/index'


export default () => {
  const teamMembers = [ian, ash, kyle, connor, nick, josh].map(member => (
    <div key={member.name} className='Team__member col-md-4 col-xs-6'>
      <div className='row'>
        <div className='col-md-6'>
          <img className='Team__member-img' src={member.img} />  
        </div>
        <div className='Team__member-description col-md-6'>
          <span className='Team__member-name'>{member.name}</span>
          <span className='Team__member-job'>{member.job}</span>
          <a
            href={member.linkedin}
            target='_blank' 
            className='Team__member-linkedin'
            rel='noopener noreferrer'
          >
            <LinkedIn />
          </a>
          <div className='Team__member-country'>
            <span dangerouslySetInnerHTML={{ __html: member.flag }} />
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <div className='Team row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { teamMembers }  
    </div>
  )
}
