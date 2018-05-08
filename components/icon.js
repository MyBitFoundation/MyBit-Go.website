import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './icon.scss'

export const Icon = ({ name, label }) => (
  <div className="Icon">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className={`Icon__wrapper Icon--is-${name}`} />
    { label && <span className={`Icon__label`}>{label}</span> }
  </div>
)

export const LinkedIcon = ({ name, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon name={name} label={label} />
  </a>

)

const IconListWrapper = ({ icons }) => (
  <div className="IconList">
    {
      icons.map(icon => {
        return icon.href ?
          <LinkedIcon
            key={icon.name}
            name={icon.name}
            href={icon.href}
          /> :
          <Icon
            key={icon.name ? icon.name : icon}
            name={icon.name ? icon.name : icon}
          />
        }
      )
    }
  </div>
)

export const IconList = () => {
  const icons = [
    { name: 'facebook', href: 'https://www.facebook.com/MyBitDApp/' },
    { name: 'reddit', href: 'https://www.reddit.com/user/MyBit_DApp/' },
    { name: 'youtube', href: 'https://www.youtube.com/channel/UCtLn7Vi-3VbsY5F9uF1RJYg' },
    { name: 'discord', href: 'https://discord.gg/pfNkVkJ' },
    { name: 'twitter', href: 'https://twitter.com/MyBit_DApp' },
    { name: 'medium', href: 'https://medium.com/mybit-dapp' },
    { name: 'github', href: 'https://github.com/MyBitFoundation' },
  ]
  return (<IconListWrapper icons={icons} />)
}

export const MediaList = () => {
  const icons = [
    'blockchainnews',
    'coinjournal',
    'cryptoinsider',
    'express',
    'forbes',
    'futuretechpodcast',
    'nasdaq',
    'newsbtc',
    'tnw',
  ]
  return (<IconListWrapper icons={icons} />)
}

export const PartnersList = () => {
  const icons = {
    'eea': 'Business',
    'ei':  'Public Relations',
    'mll': 'Legal',
    'arabco': 'Smart Tech',
    'alpine': 'Crypto Mining',
    'slockit': 'Smart Tech'
  }
  return (
    <div className="IconList">
      {Object.keys(icons).map(icon => <Icon key={icon} name={icon} label={icons[icon]} />)}
    </div>
  )
}

IconListWrapper.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired
}

LinkedIcon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  href: PropTypes.string.isRequired
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

LinkedIcon.defaultProps = {
  label: null
}

Icon.defaultProps = {
  label: null
}
