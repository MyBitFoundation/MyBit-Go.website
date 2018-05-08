import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './container.scss'

export const Container = ({
  children,
  leftNode,
  rightNode,
  centerNode,
  isStyled = false,
  isStyledShort = false,
  hasCenteredDiamond = false
}) => {
  const containerClass = classNames({
    'Container': true,
    'Container--is-styled': isStyled || isStyledShort,
    'Container--has-centered-diamond': hasCenteredDiamond,
    'Container--is-styled-short': isStyledShort,
  })
  const containerHelperLeftClass = classNames({
    'Container__helper-left': true,
    'Container__helper-left--is-styled-short': isStyledShort,
  })
  const containerHelperRightClass = classNames({
    'Container__helper-right': true,
    'Container__helper-right--is-styled-short': isStyledShort,
  })
  const containerHelperCenterClass = classNames({
    'Container__helper-center': true,
    'Container__helper-center--is-styled-short': isStyledShort,
  })

  return (
    <div className={containerClass}>
      <div className='Container__wrapper'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className='Container__helper-left-wrapper'>
          <div className={containerHelperLeftClass}>
            <div className='before' />
            { leftNode }
          </div>
        </div>
        <div className={containerHelperCenterClass}>{ centerNode }</div>
        <div className='Container__helper-right-wrapper'>
          <div className={containerHelperRightClass}>
            <div className='before' />
            { rightNode }
          </div>
        </div>
        { children }
      </div>
    </div>
  )
}

Container.propTypes = {
  isStyled: PropTypes.bool,
  isStyledShort: PropTypes.bool,
  hasCenteredDiamond: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftNode: PropTypes.node,
  rightNode: PropTypes.node,
  centerNode: PropTypes.node,
}

Container.defaultProps = {
  isStyled: false,
  isStyledShort: false,
  hasCenteredDiamond: false,
  leftNode: <div />,
  rightNode: <div />,
  centerNode: <div />
}

