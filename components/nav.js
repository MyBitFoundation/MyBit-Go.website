import React from 'react'
import stylesheet from './nav.scss'

export default () => {
  const listItems = ['about', 'how it works', 'roadmap', 'team']
      .map(listItem => (<li key={listItem} className="Nav__listItem">{listItem}</li>))
  const navList = (<ul className="Nav__list">{listItems}</ul>)
  return (
    <nav className="Nav">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {navList}
    </nav>
  )
}