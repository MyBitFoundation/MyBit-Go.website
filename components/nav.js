import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './nav.scss'

const nav = ({ onHandleToggleMobileMenu, clickMenuOption, isMobileMenuActive }) => {
  const listItems = [{label: 'about'}, {label:'how it works'}, {label:'roadmap'}, {label:'team'}, {label: 'faq', link: 'https://github.com/MyBitFoundation/MyBit.io/tree/master/faqs'}]
    .map(listItem => {
      const item = listItem.link ?
        <a href='https://github.com/MyBitFoundation/MyBit.io/tree/master/faqs' target='_blank' rel='noopener noreferrer'>{listItem.label}</a> :
        listItem.label
      return (
        <li key={listItem.label} onClick={() => clickMenuOption(listItem.label)} className="Nav__listItem">
          {item}
        </li>
      )
    })
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