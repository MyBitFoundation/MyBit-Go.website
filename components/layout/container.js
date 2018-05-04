import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './container.scss'

export const Container = ({ children, leftNode, rightNode, isStyled = false }) => {
  const containerClass = classNames({
    'Container': true,
    'Container--is-styled': isStyled
  })
  return (
    <div className={containerClass}>
      <div className='Container__wrapper'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className='Container__helper-left'>{ leftNode }</div>
        <div className='Container__helper-right'>{ rightNode }</div>
        { children }
      </div>
    </div>
  )
}

Container.propTypes = {
  isStyled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftNode: PropTypes.node,
  rightNode: PropTypes.node,
}

Container.defaultProps = {
  isStyled: false,
  leftNode: <div />,
  rightNode: <div />
}

