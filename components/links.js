import React from 'react'
import Facebook from '../svgs/icons/facebook.svg'
import Medium from '../svgs/icons/medium.svg'
import Twitter from '../svgs/icons/twitter.svg'
import Slack from '../svgs/icons/slack.svg'

import stylesheet from './links.scss'

export default () => {
  const icons = [
    { el: Medium, id: 'medium' }, 
    { el: Facebook, id: 'facebook' },
    { el: Twitter, id: 'twitter' },
    { el: Slack, id: 'slack' }]
    .map(iconWrapper => {
      const Icon = iconWrapper.el
      return (
        <div 
          key={iconWrapper.id}
          className={`Links__icon Links__icon--is-${iconWrapper.id}`}
        >
          <Icon/>
        </div>
      )
    })
  return (
    <div className="Links">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { icons }
    </div>
  )
}