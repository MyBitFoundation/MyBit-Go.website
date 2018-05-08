import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './container.scss'

const LinkWrapper = ({ link, children }) => (
  <a  href={link}>
    { children }
  </a>
)

export const Container = ({
  children,
  leftNode,
  leftLink,
  rightNode,
  rightLink,
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

  const rightNodeContent = (
    <div className='Container__helper-right-wrapper'>
      <div className={containerHelperRightClass}>
        <div className='before'/>
        { rightNode }
      </div>
    </div>)

  const leftNodeContent = (
    <div className='Container__helper-left-wrapper'>
      <div className={containerHelperLeftClass}>
        <div className='before' />
        { leftNode }
      </div>
    </div>)

  return (
    <div className={containerClass}>
      <div className='Container__wrapper'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          leftLink ?
            (
              <LinkWrapper link={leftLink}>
                { leftNodeContent }
              </LinkWrapper>
            ) :
          leftNodeContent
        }
        <div className={containerHelperCenterClass}>{ centerNode }</div>
        {
          rightLink ?
            (
              <LinkWrapper link={rightLink}>
                { rightNodeContent }
              </LinkWrapper>
            ) :
          rightNodeContent
        }
        { children }
      </div>
    </div>
  )
}

LinkWrapper.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node.isRequired
}

LinkWrapper.defaultProps = {
  link: null
}

Container.propTypes = {
  isStyled: PropTypes.bool,
  isStyledShort: PropTypes.bool,
  hasCenteredDiamond: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftNode: PropTypes.node,
  rightNode: PropTypes.node,
  centerNode: PropTypes.node,
  rightLink: PropTypes.string,
  leftLink: PropTypes.string,
}

Container.defaultProps = {
  isStyled: false,
  isStyledShort: false,
  hasCenteredDiamond: false,
  leftNode: <div />,
  rightNode: <div />,
  centerNode: <div />,
  rightLink: null,
  leftLink: null,
}

