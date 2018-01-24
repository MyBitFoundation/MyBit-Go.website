import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '../svgs/icons/facebook.svg'
import Medium from '../svgs/icons/medium.svg'
import Twitter from '../svgs/icons/twitter.svg'
import Slack from '../svgs/icons/slack.svg'
import SlackButton from '../svgs/icons/slack-button.svg'
import YouTube from '../svgs/icons/youtube.svg'
import Reddit from '../svgs/icons/reddit.svg'

import Spanish from '../svgs/flags/es.svg'
import English from '../svgs/flags/gb.svg'
import Russian from '../svgs/flags/ru.svg'
import Korean from '../svgs/flags/ko.svg'
import Japanese from '../svgs/flags/jp.svg'
import Portuguese from '../svgs/flags/pt.svg'
import Chinese from '../svgs/flags/cn.svg'

import stylesheet from './links.scss'

const links = ({ isFooter = false, changeLanguage, isMobileMenuActive }) => {
  const icons = [
    { el: YouTube, id: 'youtube', href: 'https://www.youtube.com/channel/UCtLn7Vi-3VbsY5F9uF1RJYg'},
    { el: Reddit, id: 'reddit', href: 'https://www.reddit.com/user/MyBit_DApp/'},
    { el: Medium, id: 'medium', href: 'https://medium.com/@MyBit_Blog' }, 
    { el: Facebook, id: 'facebook', href: 'https://www.facebook.com/MyBitDApp/' },
    { el: Twitter, id: 'twitter', href: 'https://twitter.com/MyBit_DApp' },
    { el: [ Slack, SlackButton ], id: 'slack', href: 'http://slack.mybit.io' }
  ]
  
  const flags = [
    { el: Chinese, id: 'chinese', handleOnClick: () => changeLanguage('cn') },
    { el: English, id: 'english', handleOnClick: () => changeLanguage('en') },
    { el: Spanish, id: 'spanish', handleOnClick: () => changeLanguage('es') },
    { el: Russian, id: 'russian', handleOnClick: () => changeLanguage('ru') },
    { el: Korean, id: 'korean', handleOnClick: () => changeLanguage('kr') },
    { el: Japanese, id: 'japanese', handleOnClick: () => changeLanguage('jp') },
    { el: Portuguese, id: 'portuguese', handleOnClick: () => changeLanguage('pt') },
    
  ]
  
  const iconsToRender = isFooter ? icons : flags;
  const renderedIcons = iconsToRender
    .map(icon => {
      if (icon.id === 'youtube' && !isFooter) return null;
      if (icon.id === 'reddit' && !isFooter) return null;
      if (icon.id === 'kakaostory' && !isFooter) return null;
      const Icon = icon.id === 'slack' ? isFooter ? icon.el[0] : icon.el[1] : icon.el
      return (
        <div 
          key={icon.id}
          className={`Links__icon ${ isFooter && 'Links__icon--is-footer' } ${ !isFooter && 'Links__icon--is-flag' } Links__icon--is-${icon.id}`}
        >
          <a 
            onClick={icon.handleOnClick}
            href={icon.href}
            rel="noopener noreferrer"
            target='_blank'
          >
            <Icon/>
          </a>
        </div>
      )
    })
  return (
    <div className={`Links ${isFooter && 'Links--is-footer'} ${!isFooter && 'Links--is-header'} ${isMobileMenuActive && 'Links--is-active'} `}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { renderedIcons }
    </div>
  )
}

links.defaultProps = {
  isFooter: false,
  isMobileMenuActive: false,
  changeLanguage: () => {}
}

links.propTypes = {
  isFooter: PropTypes.bool,
  isMobileMenuActive: PropTypes.bool,
  changeLanguage: PropTypes.function
}

export default links