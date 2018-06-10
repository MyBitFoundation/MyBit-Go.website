import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Highlight } from '../highlights'
import { Button } from '../button'
import stylesheet from './container.scss'

const LinkWrapper = ({ link, children, className }) => (
  <a  href={link} className={"LinkWrapper " + className}>
    { children }
  </a>
)

export const SecondaryContainer = () => (
  <div className="SecondaryContainer">
    <div className="SecondaryContainer__access">
      <Highlight
        title={'Access'}
        content={`<p>The core utility of the MyBit Token is the access layer. User must "burn" and amount of MYB to access different features of the platform. This means that tokens are removed from circulation forever causing the supply to constantly be reduced.</p>`}
        icon="access"
        isDiamond
        isMedium
        isTransparent
      />
    </div>
    <div className="SecondaryContainer__token">
      <Highlight
        title={'Token'}
        content={
          <div>
            <p>The MyBit Token (MYB) powers the MyBit ecosystem,
          unlocking the future economy.
            </p>
            <a
              href="/access-layer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label={"Learn more"}/>
            </a>
          </div>
        }
        isDiamond
        isLight
      />
    </div>
    <div className="SecondaryContainer__staking">
      <Highlight
        title={'Staking'}
        content={`<p>More details will be released prior to the Beta Release.</p>`}
        icon="staking"
        isDiamond
        isMedium
        isTransparent
      />
    </div>
    <div className="SecondaryContainer__locking">
      <Highlight
        title={'Locking'}
        content={`<p>Asset Managers are required to lock an amount of MYB in order to list an asset. The tokens can be withdrawn after a certain amount of revenue is generated. If asset managers are voted out of their position for lack of performance the tokens are forfeited. This protects investors by creating an incentive for asset managers to complete their duties.`}
        icon="locking"
        isDiamond
        isMedium
        isTransparent
      />
    </div>
  </div>
)

export const MainContainer = ({mobile}) => (
  <Container
    isStyled
    hasCenteredDiamond
    mobile={mobile}
    leftLink="investor"
    classNameLeft="Container__wrapper--is-investor"
    leftNode={
      <Highlight
        title={'Investors'}
        content={`<p>Gain direct access to the 11.1 Trillion
          dollar machine economy.</p>`}
        icon="investors"
        isDiamond
        style={{ margin: 'auto 0'}}
        isTransparent
        link='investors'
        isNestedLink
      />
    }
    centerNode={
      <Highlight
        title={'Industries'}
        content={`<p>The MyBit Ecosystem functions as a global, multi-industrial investment platform.</p>`}
        isDiamond
        isTransparent
      />
    }
    classNameRight="Container__wrapper--is-asset-manager"
    rightLink="asset-manager"
    rightNode={
      <Highlight
        title={'Asset Manager'}
        content={`<p>Profit from operating and maintaining IoT devices.</p>`}
        icon="asset-manager"
        isDiamond
        style={{
          margin: 'auto 0',
          right: "0px",
          left: "auto"
        }}
        isTransparent
        link='asset-manager'
        isNestedLink
      />
    }
  />
)

export const Container = ({
  children,
  leftNode,
  leftLink,
  rightNode,
  rightLink,
  centerNode,
  centerLink,
  isStyled = false,
  isStyledShort = false,
  hasCenteredDiamond = false,
  mobile,
  classNameRight,
  classNameLeft
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

  const rightNodeContent = !mobile && (
    <div className='Container__helper-right-wrapper'>
      <div className={containerHelperRightClass}>
        <div className='before'/>
        { rightNode }
      </div>
    </div>)

  const leftNodeContent = !mobile && (
    <div className='Container__helper-left-wrapper'>
      <div className={containerHelperLeftClass}>
        <div className='before' />
        { leftNode }
      </div>
    </div>)

  const centerNodeContent = (
    <div className='Container__helper-center-wrapper'>
      <div className={containerHelperCenterClass}>
        <div className='before' />
        { centerNode }
      </div>
    </div>
  )

  return (
    <div className={containerClass}>
      <div className='Container__wrapper'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {
          centerLink ?
            (
              <LinkWrapper link={centerLink}>
                { centerNodeContent }
              </LinkWrapper>
            ) :
          centerNodeContent
        }

        {
          leftLink ?
            (
              <LinkWrapper link={leftLink} className={classNameLeft}>
                { leftNodeContent }
              </LinkWrapper>
            ) :
          leftNodeContent
        }
        {
          rightLink ?
            (
              <LinkWrapper link={rightLink} className={classNameRight}>
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

LinkWrapper.defaultProps = {
  link: null,
  className: undefined,
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
  centerLink: PropTypes.string,
  mobile: PropTypes.bool,
  classNameLeft: PropTypes.string,
  classNameRight: PropTypes.string
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
  centerLink: null,
  mobile: false,
  classNameLeft: undefined,
  classNameRight: undefined
}


MainContainer.propTypes = {
  mobile: PropTypes.bool.isRequired,
}
