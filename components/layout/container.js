import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Highlight } from '../highlights'
import { Button } from '../button'
import { MyBitFooter } from '../footer/footer'
import { Header } from '../header'
import stylesheetButton from '../button.scss'
import stylesheet from './container.scss'

export const SecondaryPageContainer = ({children}) => (
  <div className="SecondaryPageContainer">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
      <Header isLight={false} />
      { children }
    </div>
    <div
      className="grid__container"
      style={{ marginTop: '100px', margin: 'auto' }}
    >
      <MyBitFooter />
    </div>
  </div>
)

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
        content={`<p>The core utility of the MyBit Token is the access layer. Users must "burn" an amount of MYB to access different features of the platform. This means that tokens are removed from circulation forever causing the supply to constantly be reduced.</p>`}
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
            <p>The MyBit Token (MYB) powers the MyBit Ecosystem,
          unlocking the future economy.
            </p>
            <Button 
              label={"Learn more"}
              url={"/access-layer"}
              isLink
              isCentered
            />
          </div>
        }
        isDiamond
        isLight
      />
    </div>
    <div className="SecondaryContainer__staking">
      <Highlight
        title={'Staking'}
        content={`<p>More details will be released prior to the Beta release.</p>`}
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
    classNameLeft="Container__wrapper--is-investor"
    leftNode={
      <Highlight
        title={'Investors'}
        content={
          <div style={{display: "flex", flexDirection:"column"}}>
            <p>Gain direct access to the 11.1 Trillion
            dollar machine economy.
            </p>
            <Button 
              label={"Get Started"}
              url={"/investor"}
              isSecondary
              isLight
              isLink
              isCentered
            />
          </div>
        }
        icon="investors"
        isDiamond
        isTransparent
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
        title={'Asset Managers'}
        content={
          <div style={{display: "flex", flexDirection:"column"}}>
            <p>Profit from operating and maintaining IoT devices.</p>
            <Button 
              label={"Register Now"}
              url={"/asset-manager"}
              isSecondary
              isLight
              isLink
              isCentered
            />
          </div>
        }
        icon="asset-manager"
        isDiamond
        isTransparent
      />
    }
  />
)

export const Container = ({
  children,
  leftNode,
  rightNode,
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
  const containerHelperCenterClass = classNames({
    'Container__helper-center': true,
    'Container__helper-center--is-styled-short': isStyledShort,
  })

  const rightNodeContent = !mobile && (
    <div className={classNameRight}>
      {rightNode}
    </div>
  )

  const leftNodeContent = !mobile && (
    <div className={classNameLeft}>
      {leftNode}
    </div>
  )

  const centerNodeContent = (
    <div className='Container__helper-center-wrapper'>
      { centerNode }
      <div className={containerHelperCenterClass}>
        <div className='before' />
      </div>
    </div>
  )

  return (
    <div className={containerClass}>
      <div className='Container__wrapper'>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style dangerouslySetInnerHTML={{ __html: stylesheetButton }} />
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
          leftNodeContent
        }
        {
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
  centerLink: null,
  mobile: false,
  classNameLeft: undefined,
  classNameRight: undefined
}

SecondaryPageContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

MainContainer.propTypes = {
  mobile: PropTypes.bool.isRequired,
}
