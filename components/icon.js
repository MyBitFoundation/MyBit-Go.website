import React from 'react'
import PropTypes from 'prop-types'
import animateScrollTo from 'animated-scroll-to';
import stylesheet from './icon.scss'
import { ArrowButton } from './arrow-button';

export const Icon = ({ name, label }) => (
  <div className="Icon">
    <div className={`Icon__wrapper Icon--is-${name}`} />
    { label && <span className={`Icon__label`}>{label}</span> }
  </div>
)

export const LinkedIcon = ({ name, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <Icon name={name} label={label} />
  </a>

)

class IconListWrapperMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentScroll: 0, isBeginning: true, isEnd: false}
    this.scroll = this.scroll.bind(this);
    this.list = null;

    this.setListRef = element => {
      this.list = element;
    };
  }

  scroll(offset){
    const element = this.list;
    const width = element.offsetWidth;
    const scrollWidth = element.scrollWidth;
    const toScroll = scrollWidth - width;
    const futurePosition = this.state.currentScroll + offset;
    const offSetToMin = 0 + futurePosition;
    const offSetToMax = toScroll - futurePosition;

    // case where we are going to be resetting scroll, which does it as well if there are only 100px left or less
    if(futurePosition <= 0 || offSetToMin <= 100){
      animateScrollTo(0, {minDuration: 500, element, horizontal: true});
      this.setState({currentScroll: 0, isBeginning: true})
    }
    // case where we are going to be scrolling to the end, which does it as well if there are only 100px left or less
    else if(futurePosition >= toScroll || offSetToMax <= 100){
      animateScrollTo(toScroll, {minDuration: 500, element, horizontal: true});
      this.setState({currentScroll: toScroll, isEnd: true})
    }
    // case where we have not reached an endge
    else{
      animateScrollTo(futurePosition, {minDuration: 500, element, horizontal: true});
      this.setState({currentScroll: futurePosition, isBeginning: false, isEnd: false})
    }
  }

  render() {
    const isMobile = this.props.mobile;
    const wrapperClass = isMobile ? "" : "IconListWrapperMedia";
    const listElementClass = isMobile ? "IconList" : "IconList IconListWrapperMedia__list";

    return (
      <div className={wrapperClass}>
        {!isMobile && <ArrowButton onClick={() => this.scroll(-500)} disabled={this.state.isBeginning} />}
        <div ref={this.setListRef} className={listElementClass}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {
            this.props.icons.map(icon => {
              return icon.href ?
                <LinkedIcon
                  key={icon.name}
                  name={icon.name}
                  href={icon.href}
                  label={icon.label}
                /> :
                <Icon
                  key={icon.name ? icon.name : icon}
                  name={icon.name ? icon.name : icon}
                />
              }
            )
          }
        </div>
        {!isMobile && <ArrowButton onClick={() => this.scroll(500)} disabled={this.state.isEnd} rotate/>}
      </div>
    );
  }
}

const IconListWrapper = ({ icons }) => (
  <div className="IconList">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    {
      icons.map(icon => {
        return icon.href ?
          <LinkedIcon
            key={icon.name}
            name={icon.name}
            href={icon.href}
            label={icon.label}
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

export const MediaList = ({mobile}) => {
  const icons = [
    { name: 'forbes', href: 'https://www.forbes.com/sites/omribarzilay/2017/08/14/why-blockchain-is-the-future-of-the-sharing-economy/#7e4b48b83342' },
    { name: 'nasdaq', href: 'http://www.nasdaq.com/article/blockchain-technology-could-disrupt-and-reboot-the-sharing-economy-cm836757' },
    { name: 'wsj', href: 'https://www.wsj.com/articles/switzerland-wants-to-be-the-world-capital-of-cryptocurrency-1524942058'},
    { name: 'express', href: 'https://www.express.co.uk/finance/city/915842/cryptocurrency-news-dow-jones-what-could-collapse-mean-bitcoin-ripple-ethereum' },
    { name: 'tnw', href: 'https://thenextweb.com/contributors/2017/09/21/blockchain-tech-missing-link-success-iot/' },
    { name: 'blockchainnews', href: 'http://www.the-blockchain.com/2018/01/30/iot-platform-mybit-partners-alpine-sustainable-mining/' },
    { name: 'coinjournal', href: 'https://coinjournal.net/?s=mybit' },
    { name: 'cryptoinsider', href: 'https://cryptoinsider.21mil.com/enterprise-level-investing-possible-blockchain/' },
    { name: 'futuretechpodcast', href: 'https://www.futuretechpodcast.com/podcasts/mybit-io-a-platform-for-crowdfunding-machine-ownership-investments/' },
    { name: 'newsbtc', href: 'https://www.cryptocoinsnews.com/ground-success-story-mybit/' },
    { name: 'ccn', href: 'https://www.ccn.com/ground-success-story-mybit/' },
    { name: 'chainbits', href: 'https://www.chainbits.com/reviews/mybit-review/' },
    { name: 'everipedia', href: 'https://everipedia.org/wiki/mybit-token-cryptocurrency/' },
  ]
  return (<IconListWrapperMedia mobile={mobile} icons={icons} />)
}

export const PartnersList = () => {
  const icons = [
    { name: 'eea', label: 'Business', href: 'https://entethalliance.org/members/' },
    { name: 'ei', label: 'Public Relations', href: 'http://emerginginsider.com/' },
    { name: 'mll', label: 'Legal', href: 'http://www.mll-legal.com/' },
    { name: 'arabco', label: 'Smart Tech', href: 'https://medium.com/mybit-dapp/mybit-partner-with-arabco-smart-technology-8a54d39f17de' },
    { name: 'alpine', label: 'Crypto Mining', href: 'https://alpinemining.ch/en/' },
    { name: 'slockit', label: 'Smart Tech', href: 'https://slock.it/' }
  ]
  return (<IconListWrapper icons={icons} />)
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

MediaList.propTypes = {
  mobile: PropTypes.bool.isRequired,
}

IconListWrapperMedia.propTypes = {
  mobile: PropTypes.bool.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
}
