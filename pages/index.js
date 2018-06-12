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
  CommunityHighlight
} from '../components/highlights'
import { SliderIndustries, SliderMediaList } from '../components/slider'
import { Header } from '../components/header'
import { HeroBanner } from '../components/hero-banner'
import { MyBitFooter } from '../components/footer/footer'
import { diamondHighlights } from '../components/constants'
import { SwapPopup } from '../components/swap-popup'
import { Button } from '../components/button'

const mixed = () => (
  <div>
    <LandingPageSecondaryStatements />
    <MainContainer mobile />
  </div>
)

export default class Index extends React.Component {
  render() {
    return (
      <div className="Main__wrapper">
        <Layout>
          <SwapPopup />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div
            className="grid__container"
            style={{
              height: '520px'
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
              phone={mixed()}
              tablet={mixed()}
              desktop={<MainContainer />}
            />
          </div>
          <div className="grid__container grid__container--is-industries-container">
            <SliderIndustries />
            <div
              style={{
                margin: '0 auto',
                width: 'max-content',
                marginTop: '30px',
                position: 'relative',
                zIndex: '2'
              }}
            >
              <a href="/investor" target="_blank" rel="noopener noreferrer">
                <Button label={'Read More'} />
              </a>
            </div>
          </div>
          <div className="grid__container grid__container--is-community-container">
            <CommunityHighlight />
          </div>
          <div className="grid__container">
            <ResponsiveWrapper
              phone={<LandingPageTertiaryStatements />}
              tablet={<LandingPageTertiaryStatements />}
              desktop={<SecondaryContainer />}
            />
          </div>
          <div className="grid__container grid__container--is-media-container">
            <SliderMediaList />
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
      </div>
    )
  }
}
