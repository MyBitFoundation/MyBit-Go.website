import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Highlight } from '../highlights'
import { Button } from '../button'
import { MyBitFooter } from '../footer/footer'
import { Header } from '../header'
import stylesheetButton from '../button.scss'
import stylesheet from './container.scss'
import Head from '../head';

export const SecondaryPageContainer = ({children, translator, changeLanguage, currentLanguage}) => (
  <div className="SecondaryPageContainer">
    <Head />
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
      <Header
        isLight={false}
        translator={translator}
        changeLanguage={changeLanguage}
        currentLanguage={currentLanguage}
      />
      { children }
    </div>
    <div
      className="grid__container"
      style={{ marginTop: '100px', margin: 'auto' }}
    >
      <MyBitFooter
        translator={translator}
        currentLanguage={currentLanguage}
      />
    </div>
  </div>
)

const LinkWrapper = ({ link, children, className }) => (
  <a  href={link} className={"LinkWrapper " + className}>
    { children }
  </a>
)

export const SecondaryContainer = ({translator, currentLanguage}) => (
  <div className="SecondaryContainer">
    <div className="SecondaryContainer__access">
      <Highlight
        title={translator('common:mybit_home_diamond_access_title')}
        content={`<p>${translator('common:mybit_home_diamond_access')}</p>`}
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
            <p style={{width: "270px", margin: "0 auto"}}>{translator('common:mybit_home_diamond_token')}</p>
            <Button
              label={translator('common:mybit_learn_more')}
              url={currentLanguage !== "en-US" && currentLanguage !== "en" ? `/access-layer?lng=${currentLanguage}` : '/access-layer'}
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
        title={translator('common:mybit_home_diamond_staking_title')}
        content={`<p>${translator('common:mybit_home_diamond_staking')}</p>`}
        icon="staking"
        isDiamond
        isMedium
        isTransparent
      />
    </div>
    <div className="SecondaryContainer__locking">
      <Highlight
        title={translator('common:mybit_home_diamond_locking_title')}
        content={`<p>${translator('common:mybit_home_diamond_locking')}</p>`}
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
