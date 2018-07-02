import React, { Component } from 'react'
import classNames from 'classnames'
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
import { Button } from '../components/button'
import { LatestNews } from '../components/latest-news'
import VideoComponent from '../components/video-component'

const mixed = () => (
  <div>
    <LandingPageSecondaryStatements />
    <MainContainer mobile />
  </div>
)

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { mobileMenuOpen: false, videoOpen: false }

    this.setMobileMenuState = this.setMobileMenuState.bind(this)
    this.setVideoOpen = this.setVideoOpen.bind(this)
  }

  setVideoOpen() {
    if (this.state.videoOpen) return
    this.setState({ videoOpen: true })
  }

  setMobileMenuState(mobileMenuOpen) {
    this.setState({ mobileMenuOpen })
  }

  render() {
    return (
      <Layout>
        <VideoComponent
          videoOpen={this.state.videoOpen}
          closeVideo={() => this.setState({ videoOpen: false })}
        />
        <div
          className={classNames({
            Main__wrapper: true,
            'Main__wrapper--is-mobile-menu-open': this.state.mobileMenuOpen,
            'Main__wrapper--is-video-open': this.state.videoOpen
          })}
        >
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div
            className="grid__container"
            style={{
              height: '550px'
            }}
          >
            <Header
              setMobileMenuState={this.setMobileMenuState}
              isInHomePage
              isLight
              videoOpen={this.state.videoOpen}
            />
            <HeroBanner
              setVideoOpen={this.setVideoOpen}
              videoOpen={this.state.videoOpen}
            />
          </div>
          <div
            className={classNames({
              grid__container: true,
              'grid__container--is-video-open': this.state.videoOpen
            })}
          >
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
              <Button
                label={'Read More'}
                url={'/investor#industries'}
                isLink
                isCentered
              />
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
          <div className="grid__container">
            <LatestNews />
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
        </div>
      </Layout>
    )
  }
}

export default HomePage
