import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './link.scss'

export const Link = ({isInHomePage, isLight, name, handleClick}) => {
  const className= isInHomePage ? "Link__text--is-home" : "Link__text";
  return (
    <div className={isLight ? "Link" : "Link Link__dark"}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <p className={"Link__text " + className} onClick={handleClick}>{name}</p>
    </div>
  )
}


Link.defaultProps = {
  handleClick: () => {}
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.function,
  isInHomePage: PropTypes.bool.isRequired,
  isLight: PropTypes.bool.isRequired
}
