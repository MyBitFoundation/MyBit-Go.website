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
    { name: 'blockchainnews', href: 'http://www.the-blockchain.com/2018/01/30/iot-platform-mybit-partners-alpine-sustainable-mining/' },
    { name: 'coinjournal', href: 'https://coinjournal.net/mybit-partners-alpine-bring-sustainable-cryptocurrency-mining-investors/' },
    { name: 'cryptoinsider', href: 'https://cryptoinsider.21mil.com/enterprise-level-investing-possible-blockchain/' },
    { name: 'express', href: 'https://www.express.co.uk/finance/city/915842/cryptocurrency-news-dow-jones-what-could-collapse-mean-bitcoin-ripple-ethereum' },
    { name: 'forbes', href: 'https://www.forbes.com/sites/omribarzilay/2017/08/14/why-blockchain-is-the-future-of-the-sharing-economy/#7e4b48b83342' },
    { name: 'futuretechpodcast', href: 'https://www.futuretechpodcast.com/podcasts/mybit-io-a-platform-for-crowdfunding-machine-ownership-investments/' },
    { name: 'nasdaq', href: 'http://www.nasdaq.com/article/blockchain-technology-could-disrupt-and-reboot-the-sharing-economy-cm836757' },
    { name: 'newsbtc', href: 'https://www.cryptocoinsnews.com/ground-success-story-mybit/' },
    { name: 'tnw', href: 'https://thenextweb.com/contributors/2017/09/21/blockchain-tech-missing-link-success-iot/' },
  ]
  return (<IconListWrapper icons={icons} />)
}

export const PartnersList = () => {
  const icons = {
    'eea': { name: 'Business', link: 'https://entethalliance.org/members/' },
    'ei':  { name: 'Public Relations', link: 'http://emerginginsider.com/' },
    'mll': { name: 'Legal', link: 'http://www.mll-legal.com/' },
    'arabco': { name: 'Smart Tech', link: 'https://medium.com/mybit-dapp/mybit-partner-with-arabco-smart-technology-8a54d39f17de' },
    'alpine': { name: 'Crypto Mining', link: 'https://alpinemining.ch/en/' },
    'slockit': { name: 'Smart Tech', link: 'https://slock.it/' }
  }
  return (
    <div className="IconList">
      {Object.keys(icons).map(icon => <LinkedIcon key={icon} name={icon} label={icons[icon].name} href={icons[icon].link} />)}
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
