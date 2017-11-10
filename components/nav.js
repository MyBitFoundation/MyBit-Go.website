import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './nav.scss'

const nav = ({ scrollToSection = () => {} }) => {
  const listItems = ['about', 'how it works', 'roadmap', 'team']
      .map(listItem => (<li key={listItem} onClick={function() { scrollToSection(listItem) }} className="Nav__listItem">{listItem}</li>))
  const navList = (<ul className="Nav__list">{listItems}</ul>)
  return (
    <nav className="Nav">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {navList}
    </nav>
  )
}

nav.defaultProps = {
  scrollToSection: () => {}
}

nav.propTypes = {
  scrollToSection: PropTypes.function,
}

export default nav