import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './container.scss'

export const Container = ({ children, isStyled = false }) => {
  const containerClass = classNames({
    'Container': true,
    'Container--is-styled': isStyled
  })
  return (
    <div className={containerClass}>
      <div className='Container__wrapper'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className='Container__helper-left'/>
        <div className='Container__helper-right'/>
        { children }
      </div>
    </div>
  )
}

Container.propTypes = {
  isStyled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  isStyled: false,
}

