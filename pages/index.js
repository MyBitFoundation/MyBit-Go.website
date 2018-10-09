import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'

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
  Highlight,
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
import Telegram from '../static/svgs/social/telegram.svg'

import i18n from '../i18n'

const mixed = translator => (
  <div>
    <LandingPageSecondaryStatements translator={translator} />
    <MainContainer mobile />
  </div>
)

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { mobileMenuOpen: false, videoOpen: false }

    this.setMobileMenuState = this.setMobileMenuState.bind(this)
    this.setVideoOpen = this.setVideoOpen.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  setVideoOpen() {
    if (this.state.videoOpen) return
    this.setState({ videoOpen: true })
  }

  setMobileMenuState(mobileMenuOpen) {
    this.setState({ mobileMenuOpen })
  }

  changeLanguage(language) {
    this.props.i18n.changeLanguage(language)
  }

  render() {
    const highlights = diamondHighlights(this.props.t)
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
          <div className="grid__container grid__main">
            <Header
              setMobileMenuState={this.setMobileMenuState}
              isInHomePage
              isLight
              videoOpen={this.state.videoOpen}
              translator={this.props.t}
              changeLanguage={this.changeLanguage}
              currentLanguage={this.props.i18n.language}
            />
            <HeroBanner
              setVideoOpen={this.setVideoOpen}
              videoOpen={this.state.videoOpen}
              translator={this.props.t}
            />
          </div>
          <div
            className={classNames({
              grid__container: true,
              'grid__container--is-video-open': this.state.videoOpen
            })}
          >
            <ResponsiveWrapper
              phone={<LandingPageStatements translator={this.props.t} />}
              tablet={<LandingPageStatements translator={this.props.t} />}
              desktop={<Highlights highlights={highlights} isDiamond />}
            />
          </div>
          <div className="grid__container grid__container--is-main-container">
            <ResponsiveWrapper
              phone={mixed(this.props.t)}
              tablet={mixed(this.props.t)}
              desktop={<MainContainer />}
            />
          </div>
          <div className="grid__container grid__container--is-industries-container">
            <Highlight
              title={this.props.t('common:mybit_home_industries_title')}
              content={`<p>${this.props.t('common:mybit_home_industries')}</p>`}
              isLight
              isCentered
              isTransparent
              isFullWidth
            />
            <SliderIndustries translator={this.props.t} />
            <div
              style={{
                margin: '0 auto',
                width: 'max-content',
                marginTop: '30px',
                position: 'relative',
                zIndex: '2'
              }}
            />
          </div>
          <div className="grid__container">
            <ResponsiveWrapper
              phone={
                <LandingPageTertiaryStatements translator={this.props.t} />
              }
              tablet={
                <LandingPageTertiaryStatements translator={this.props.t} />
              }
              desktop={<SecondaryContainer translator={this.props.t} />}
            />
          </div>
          <div className="Highlight__join-telegram">
            <Highlight
              title={this.props.t('common:mybit_home_join_conversation')}
              content={
                <div
                  style={{
                    position: 'relative',
                    width: 'max-content',
                    margin: '0 auto'
                  }}
                >
                  <Telegram className="Highlight__join-telegram-icon" />
                  <Button
                    label={'Telegram'}
                    url={'https://t.me/mybitio/'}
                    isLink
                    newTab
                  />
                </div>
              }
              isLight
              isTransparent
              isFullWidth
            />
          </div>
          <div className="grid__container grid__container--is-media-container">
            <SliderMediaList translator={this.props.t} />
          </div>
          <div className="grid__container" style={{ margin: 'auto' }}>
            <MyBitFooter translator={this.props.t} />
          </div>
        </div>
      </Layout>
    )
  }
}

const ExtendedIndex = translate(['common'], {
  i18n,
  wait: process.browser
})(HomePage)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedIndex.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
  return {}
}

export default ExtendedIndex
