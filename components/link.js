import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './link.scss'

export const Link = ({isInHomePage, isLight, name, path}) => {
  const className= isInHomePage ? "Link__text--is-home" : "Link__text";
  return (
    <div className={isLight ? "Link" : "Link Link__dark"}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <a className={"Link__text " + className} href={path}>{name}</a>
    </div>
  )
}


Link.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isInHomePage: PropTypes.bool.isRequired,
  isLight: PropTypes.bool.isRequired
}
