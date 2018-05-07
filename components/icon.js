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

const IconListWrapper = ({ icons }) => (
  <div className="IconList">
    {icons.map(icon => <Icon key={icon} name={icon} />)}
  </div>
)

export const IconList = () => {
  const icons = [
    'facebook',
    'reddit',
    'youtube',
    'discord',
    'twitter',
    'medium',
    'github'
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

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

Icon.defaultProps = {
  label: null
}
