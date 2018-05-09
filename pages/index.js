import React from 'react'
import stylesheet from '../styles/main.scss'

import { default as Layout } from '../components/layout/layout'
import { Container } from '../components/layout/container'

import { Highlights, Highlight } from '../components/highlights'
import { IconList, PartnersList, MediaList } from '../components/icon'
import Achievements from '../components/achievements'
import { Header } from '../components/header'
import { HeroBanner } from '../components/hero-banner'
import { MyBitFooter } from '../components/footer/footer'
import { diamondHighlights, achievements } from '../components/constants'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            height: '600px'
          }}
        >
          <Header />
          <HeroBanner />
        </div>
        <div className="grid__container">
          <Highlights highlights={diamondHighlights} isDiamond />
        </div>
        <div
          className="grid__container"
          style={{
            marginTop: '-500px',
            marginBottom: '700px'
          }}
        >
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
              />
            }
          />
        </div>
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto' }}
        >
          <Highlights
            hasAlternateColors={false}
            highlights={[
              {
                title: 'Agriculture',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'agriculture',
                isLight: false,
                isThin: true
              },
              {
                title: 'Manufacturing',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'manufacturing',
                isLight: false,
                isThin: true
              },
              {
                title: 'Logistics',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'logistics',
                isLight: false,
                isThin: true
              }
            ]}
          />
        </div>
        <div
          className="grid__container"
          style={{
            position: 'relative',
            height: '600px',
            display: 'flex'
          }}
        >
          <Highlight
            title={'Join our Community'}
            isLight
            isTransparent
            isBig
            isFullWidth
            style={{ margin: 'auto' }}
            isContentANode
            content={<IconList />}
          />
        </div>
        <div className="grid__container">
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
            rightLink="asset-manager"
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
              />
            }
          />
        </div>
        <div
          className="grid__container"
          style={{
            margin: '50px auto',
            width: '1600px'
          }}
        >
          <Highlight
            title={'Roadmap'}
            isLight
            isTransparent
            isBig
            isFullWidth
            style={{ margin: 'auto' }}
            isContentANode
            content={<Achievements achievements={achievements} />}
          />
        </div>
        <div
          className="grid__container"
          style={{
            margin: '50px auto'
          }}
        >
          <Highlight
            title={'Media'}
            isLight
            isTransparent
            isBig
            isFullWidth
            style={{ margin: 'auto' }}
            isContentANode
            content={<MediaList />}
          />
        </div>
        <div
          className="grid__container"
          style={{
            margin: '50px auto'
          }}
        >
          <Highlight
            title={'Partners'}
            isLight
            isTransparent
            isBig
            isFullWidth
            style={{ margin: 'auto' }}
            isContentANode
            content={<PartnersList />}
          />
        </div>
        <div className="grid__container" style={{ margin: 'auto' }}>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
