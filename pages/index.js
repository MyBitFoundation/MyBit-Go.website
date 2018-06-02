import React from 'react'
import stylesheet from '../styles/main.scss'

import { default as Layout } from '../components/layout/layout'
import {
  LandingPageStatements,
  LandingPageSecondaryStatements,
  LandingPageTertiaryStatements
} from '../components/statement'
import { ResponsiveWrapper } from '../components/responsive-wrapper'

import {
  MainContainer,
  SecondaryContainer
} from '../components/layout/container'

import {
  Highlights,
  PartnersHighlight,
  MediaHighlight,
  IndustriesHighlight,
  CommunityHighlight
} from '../components/highlights'
import { Header } from '../components/header'
import { HeroBanner } from '../components/hero-banner'
import { MyBitFooter } from '../components/footer/footer'
import { diamondHighlights } from '../components/constants'
import { SwapPopup } from '../components/swap-popup'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SwapPopup />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            height: '600px'
          }}
        >
          <Header isInHomePage isLight />
          <HeroBanner />
        </div>
        <div className="grid__container">
          <ResponsiveWrapper
            phone={<LandingPageStatements />}
            tablet={<LandingPageStatements />}
            desktop={<Highlights highlights={diamondHighlights} isDiamond />}
          />
        </div>
        <div className="grid__container grid__container--is-main-container">
          <ResponsiveWrapper
            phone={<LandingPageSecondaryStatements />}
            tablet={<LandingPageSecondaryStatements />}
            desktop={<MainContainer />}
          />
        </div>
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto' }}
        >
          <IndustriesHighlight />
        </div>
        <div
          className="grid__container"
          style={{
            position: 'relative',
            height: '400px',
            display: 'flex',
            marginBottom: '350px'
          }}
        >
          <CommunityHighlight />
        </div>
        <div className="grid__container">
          <ResponsiveWrapper
            phone={<LandingPageTertiaryStatements />}
            tablet={<LandingPageTertiaryStatements />}
            desktop={<SecondaryContainer />}
          />
        </div>
        <div
          className="grid__container"
          style={{
            margin: '50px auto'
          }}
        >
          <ResponsiveWrapper
            phone={<MediaHighlight mobile />}
            tablet={<MediaHighlight mobile />}
            desktop={<MediaHighlight mobile={false} />}
          />
        </div>
        <div
          className="grid__container"
          style={{
            margin: '50px auto'
          }}
        >
          <PartnersHighlight />
        </div>
        <div className="grid__container" style={{ margin: 'auto' }}>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
