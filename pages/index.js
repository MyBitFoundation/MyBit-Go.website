import React from 'react'
import stylesheet from '../styles/main.scss'

import { default as Layout } from '../components/layout/layout'
import {
  MainContainer,
  SecondaryContainer
} from '../components/layout/container'

import {
  Highlights,
  PartnersHighlight,
  MediaHighlight,
  IndustriesHighlight,
  CommunityHighlight,
  RoadmapHighlight
} from '../components/highlights'
import { Header } from '../components/header'
import { HeroBanner } from '../components/hero-banner'
import { MyBitFooter } from '../components/footer/footer'
import { diamondHighlights } from '../components/constants'

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
          <Header isInHomePage />
          <HeroBanner />
        </div>
        <div className="grid__container">
          <Highlights highlights={diamondHighlights} isDiamond />
        </div>
        <div className="grid__container grid__container--is-main-container">
          <MainContainer />
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
            height: '600px',
            display: 'flex'
          }}
        >
          <CommunityHighlight />
        </div>
        <div className="grid__container">
          <SecondaryContainer />
        </div>
        <div className="grid__container grid__container--is-achievements-container">
          <RoadmapHighlight />
        </div>
        <div
          className="grid__container"
          style={{
            margin: '50px auto'
          }}
        >
          <MediaHighlight />
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
