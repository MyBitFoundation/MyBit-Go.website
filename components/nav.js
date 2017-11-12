import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './nav.scss'

class Nav extends React.Component {
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
  render() {
    const { isMobileMenuActive } = this.state;
    const listItems = ['about', 'how it works', 'roadmap', 'team']
      .map(listItem => (<li key={listItem} onClick={() => this.clickMenuOption(listItem)} className="Nav__listItem">{listItem}</li>))
    const navList = (<ul className="Nav__list">{listItems}</ul>)
    const mobileIcon = isMobileMenuActive ? 'x' : '☰';
    return (
      <nav className="Nav">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <span onClick={this.handleToggleMobileMenu} className={`Nav__mobile-menu ${isMobileMenuActive && 'Nav__mobile-menu--is-active'}`}>{mobileIcon}</span>
        <div className={`Nav__list-wrapper ${isMobileMenuActive && 'Nav__list-wrapper--is-active'}`}>
          {navList}
        </div>
      </nav>
    )
  }
}

Nav.defaultProps = {
  scrollToSection: () => {}
}

Nav.propTypes = {
  scrollToSection: PropTypes.function,
}

export default Nav