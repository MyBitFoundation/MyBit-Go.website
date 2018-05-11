import React from 'react'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/investor.scss'
import { default as Layout } from '../components/layout/layout'
import { Media } from '../components/media'
import { InvestorHighlight } from '../components/highlights'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'
import Roi from '../static/svgs/other/roi.svg'
import Cube from '../static/svgs/other/cube.svg'
import IndustryValueMobile from '../static/assets/Industry Value Graph Mobile v2.png'
import {
  mediaWhy,
  mediaVerticals,
  highlights,
  stats,
  mediaWho
} from '../components/constants/investor'

export default class Index extends React.Component {
  render() {
    const highlightsToRender = highlights.map(details => (
      <InvestorHighlight
        key={details.title}
        content={details.content}
        title={details.title}
      />
    ))

    const industryValueDesktopToRender = (
      <div className="grid Investor__chart">
        {stats.map(val => (
          <div key={val.value} className="col" style={{ position: 'relative' }}>
            <div className="Investor__chart-col-wrapper">
              <b className="Investor__chart-value">{val.value} T$</b>
              <div
                className="Investor__chart-column"
                style={{ height: val.height }}
              />
              <div style={{ height: '37px' }}>
                <p className="Investor__chart-area-text">{val.area}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
    const industryValueMobileToRender = (
      <div>
        <img
          alt="Industry Value"
          className="Investor__chart--is-mobile-image"
          src={IndustryValueMobile}
        />
      </div>
    )
    const mediaContent = {
      title: 'Industries which have already began automating with IoT',
      content: industryValueDesktopToRender,
      isCentered: true
    }

    const mediaIndustriesDesktop = [mediaContent]

    const mediaIndustriesMobile = [
      { ...mediaContent, content: industryValueMobileToRender }
    ]

    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <div className="Investor">
            <Header isLight={false} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div style={{ padding: '0px 5%' }}>
              <div className="grid-middle Investor__why">
                <div
                  className="col-3 Investor__media-image-wrapper"
                  style={{ position: 'relative' }}
                >
                  <Roi alt="ROI" className="Investor__media-image" />
                </div>
                <div className="col-9 Investor__media-desc-wrapper">
                  <div className="Investor__media-desc">
                    <Media media={mediaWhy} />
                  </div>
                </div>
              </div>
              <div className="Investor__verticals">
                <Media media={mediaVerticals} />
              </div>
              <div className="Investor__highlights grid-center">
                {highlightsToRender}
              </div>
              <div className="Investor__industry-value--is-desktop">
                <Media media={mediaIndustriesDesktop} />
              </div>
              <div className="Investor__industry-value--is-mobile">
                <Media media={mediaIndustriesMobile} />
              </div>
              <div className="grid-middle Investor__who">
                <div className="col-9 Investor__media-desc-wrapper">
                  <div className="Investor__media-desc">
                    <Media media={mediaWho} />
                  </div>
                </div>
                <div
                  className="col-3 Investor__media-image-wrapper"
                  style={{ position: 'relative' }}
                >
                  <Cube className="Investor__media-image" />
                </div>
              </div>
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
