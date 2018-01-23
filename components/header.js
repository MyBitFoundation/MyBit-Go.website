import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './header.scss'

import { default as Logo } from './logo'
import { default as Nav } from './nav'
import { default as Links } from './links'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleMobileMenu = this.handleToggleMobileMenu.bind(this)
    this.clickMenuOption = this.clickMenuOption.bind(this)
    this.state = { isMobileMenuActive: false }
  }
  handleToggleMobileMenu() {
    this.setState({ isMobileMenuActive: !this.state.isMobileMenuActive })
  }
  clickMenuOption(listItem) {
    this.setState({ isMobileMenuActive: false }); 
    this.props.scrollToSection(listItem)
  }
  render () {
    const { changeLanguage } = this.props;
    const { isMobileMenuActive } = this.state;
    return (
      <header className='Header row'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className='col-md-2 col-sm-2 col-xs-5'>
          <Logo />
        </div>
        <div className='col-md-6 col-sm-10 col-xs-7'>
          <Nav 
            isMobileMenuActive={isMobileMenuActive} 
            onHandleToggleMobileMenu={this.handleToggleMobileMenu}
            clickMenuOption={this.clickMenuOption}
          />
        </div>
        <div className='col-md-4 col-sm-0 col-xs-0'>
          <Links 
            changeLanguage={changeLanguage} 
            isMobileMenuActive={isMobileMenuActive}
          />
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  scrollToSection: () => {},
  changeLanguage: () => {}
}

Header.propTypes = {
  scrollToSection: PropTypes.function,
  changeLanguage: PropTypes.function
}

export default Header;