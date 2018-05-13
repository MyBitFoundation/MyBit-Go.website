import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Highlight } from '../highlights'
import stylesheet from './container.scss'

const LinkWrapper = ({ link, children }) => (
  <a  href={link} style={{ display: 'inline-block', width: '50%', height: '100%' }}>
    { children }
  </a>
)

export const SecondaryContainer = () => (
  <Container
    isStyled
    isStyledShort
    hasCenteredDiamond
    leftLink="access-layer"
    leftNode={
      <Highlight
        title={'Access'}
        content={`<p>MYB, is the native token of the MyBit Ecosystem
          and acts as an access token, unlocking the future of
          investing. MYB used to access the platform are “burnt”,
          reducing the supply of the token.</p>`}
        icon="access"
        isDiamond
        isMedium
        style={{ margin: 'auto 0' }}
        isTransparent
        link='access-layer'
        isNestedLink
      />
    }
    centerNode={
      <Highlight
        title={'Token'}
        content={`<p>The MyBit Token (MYB) powers the MyBit ecosystem,
        unlocking the future economy.</p>`}
        isDiamond
        isLight
        style={{ margin: 'auto' }}
      />
    }
    rightLink="access-layer"
    rightNode={
      <Highlight
        title={'Staking'}
        content={`<p>Holders of MYB are rewarded for staking their
          tokens. This enables the MyBit Platform to achieve
          distributed consensus and increase the reliability
          of the entire ecosystem.</p>`}
        icon="staking"
        isDiamond
        isMedium
        style={{
          margin: 'auto 0',
          right: 0,
          left: 'auto'
        }}
        isTransparent
        link='access-layer'
        isNestedLink
      />
    }
  />

)

export const MainContainer = () => (
  <Container
    isStyled
    hasCenteredDiamond
    leftLink="investor"
    leftNode={
      <Highlight
        title={'Investors'}
        content={`<p>Gain direct access to the 11.1 Trillion
          dollar machine economy.</p>`}
        icon="investors"
        isDiamond
        style={{ margin: 'auto 0' }}
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
        style={{ margin: 'auto' }}
        isTransparent
      />
    }
    rightLink="asset-manager"
    rightNode={
      <Highlight
        title={'Asset Manager'}
        content={`<p>Profit from operating and maintaining
          IoT devices.</p>`}
        icon="asset-manager"
        isDiamond
        style={{
          margin: 'auto 0',
          right: 0,
          left: 'auto'
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
              <LinkWrapper link={leftLink}>
                { leftNodeContent }
              </LinkWrapper>
            ) :
          leftNodeContent
        }
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
  centerLink: PropTypes.string,
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
}

