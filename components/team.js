import React from 'react'
import LinkedIn from '../svgs/icons/linkedin.svg'
import connorImg from '../../static/team/connor.png'
import stylesheet from './team.scss'

const connor = {
  name: 'Connor Howe',
  job: 'Blockchain Engineer',
  img: connorImg
}

export default () => {
  const teamMembers = [connor, connor, connor, connor, connor, connor].map(member => (
    <div key={connor.name} className='Team__member col-md-4 col-xs-6'>
      <div className='row'>
        <div className='col-md-6'>
          <img className='Team__member-img' src={member.img} />  
        </div>
        <div className='Team__member-description col-md-6'>
          <span className='Team__member-name'>{member.name}</span>
          <span className='Team__member-job'>{member.job}</span>
          <a 
            href='https://www.linkedin.com/in/connorhowe' 
            target='_blank' 
            className='Team__member-linkedin'
            rel='noopener noreferrer'
          >
            <LinkedIn />
          </a>
          <div className='Team__member-country'>
            <span>🇨🇭</span>
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
