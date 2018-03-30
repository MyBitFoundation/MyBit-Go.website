import React from 'react'
import Select from 'react-select';
import PropTypes from 'prop-types'
import Facebook from '../svgs/icons/facebook.svg'
import Medium from '../svgs/icons/medium.svg'
import Twitter from '../svgs/icons/twitter.svg'
import YouTube from '../svgs/icons/youtube.svg'
import Reddit from '../svgs/icons/reddit.svg'
import Discord from '../svgs/icons/discord_05.svg'

import stylesheet from './links.scss'
import selectStylesheet from './select/default.scss';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: 'en', label: 'English' },
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(selectedOption) {
    this.setState({ selectedOption });
    this.props.changeLanguage(selectedOption.value)
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { isFooter = false, isMobileMenuActive } = this.props;
    const icons = [
      { el: YouTube, id: 'youtube', href: 'https://www.youtube.com/channel/UCtLn7Vi-3VbsY5F9uF1RJYg'},
      { el: Reddit, id: 'reddit', href: 'https://www.reddit.com/user/MyBit_DApp/'},
      { el: Medium, id: 'medium', href: 'https://medium.com/mybit-dapp' }, 
      { el: Facebook, id: 'facebook', href: 'https://www.facebook.com/MyBitDApp/' },
      { el: Twitter, id: 'twitter', href: 'https://twitter.com/MyBit_DApp' },
      { el: Discord, id: 'discord', href: 'https://discord.gg/pfNkVkJ' },
    ]
    
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    
    const languages = (
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'es', label: 'Español' },
          { value: 'pt', label: 'Português' },
          { value: 'en', label: 'English' },
          { value: 'ru', label: 'русский' },
          { value: 'kr', label: '한국어' },
          { value: 'jp', label: '日本語' },
          { value: 'cn', label: '中文' },
        ]}
      />
    )
    
    const renderedSelection = isFooter ? icons
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
      : languages
    return (
      <div className={`Links ${isFooter && 'Links--is-footer'} ${!isFooter && 'Links--is-header'} ${isMobileMenuActive && 'Links--is-active'} `}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style dangerouslySetInnerHTML={{ __html: selectStylesheet }} />
        { renderedSelection }
      </div>
    )
  }
}

Links.defaultProps = {
  isFooter: false,
  isMobileMenuActive: false,
  changeLanguage: () => {}
}

Links.propTypes = {
  isFooter: PropTypes.bool,
  isMobileMenuActive: PropTypes.bool,
  changeLanguage: PropTypes.function
}

export default Links