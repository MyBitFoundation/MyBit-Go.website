import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './nav.scss'

const nav = ({ onHandleToggleMobileMenu, clickMenuOption, isMobileMenuActive }) => {
  const listItems = ['about', 'how it works', 'roadmap', 'team']
    .map(listItem => (<li key={listItem} onClick={() => clickMenuOption(listItem)} className="Nav__listItem">{listItem}</li>))
  const navList = (<ul className="Nav__list">{listItems}</ul>)
  const mobileIcon = isMobileMenuActive ? 'x' : '☰';
  return (
    <nav className="Nav">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <span onClick={onHandleToggleMobileMenu} className={`Nav__mobile-menu ${isMobileMenuActive && 'Nav__mobile-menu--is-active'}`}>{mobileIcon}</span>
      <div className={`Nav__list-wrapper ${isMobileMenuActive && 'Nav__list-wrapper--is-active'}`}>
        {navList}
      </div>
    </nav>
  )
}

nav.defaultProps = {
  isMobileMenuActive: false,
  onHandleToggleMobileMenu: () => {},
  clickMenuOption: () => {}
}

nav.propTypes = {
  isMobileMenuActive: PropTypes.bool,
  onHandleToggleMobileMenu: PropTypes.function,
  clickMenuOption: PropTypes.function
}

export default nav