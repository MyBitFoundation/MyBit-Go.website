import React, { Component } from 'react'
import stylesheetGridlex from 'styles/gridlex.min.css'
import animateScrollTo from 'animated-scroll-to'
import stylesheet from 'styles/investor.scss'
import { default as Layout } from '../components/layout/layout'
import { Media } from '../components/media'
import { MediaCTA } from '../components/media-cta'
import { InvestorHighlight } from '../components/highlights'
import Cube from '../static/assets/cube.png'
import IndustryValueMobile from '../static/assets/Industry Value Graph Mobile v2.png'
import Roi from '../static/assets/roi.png'
import {
  mediaVerticals,
  highlights,
  stats
} from '../components/constants/investor'
import { SecondaryPageContainer } from '../components/layout/container'

class Investor extends Component {
  constructor(props) {
    super(props)
    this.scrollToIndustries = this.scrollToIndustries.bind(this)
  }

  componentDidMount() {
    const href = window.parent.location.href
    if (href.indexOf('#industries') !== -1) {
      this.scrollToIndustries()
    }
  }

  scrollToIndustries() {
    const el = this.el
    animateScrollTo(0, {
      minDuration: 750,
      horizontal: false,
      offset: el.offsetTop - 250
    })
  }

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
        <SecondaryPageContainer>
          <div className="Investor">
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div style={{ padding: '0px 5%' }}>
              <div className="grid-middle Investor__media">
                <div className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                  <img src={Roi} className="Investor__img-roi" />
                </div>
                <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                  <MediaCTA
                    title="Why invest in IoT?"
                    content={
                      '<p>The Internet changed humanity significantly. Now there is a new technological revolution on its way. It is predicted that by 2025, 50 billion IoT devices will generate an astonishing 11.1 trillion $ in revenue. Every industry and occupation will be affected under the fast development of autonomous machines. Mckinsey (2017) calculated that 50% of all global working-hours can be automated with currently demonstrated technology already. This machine transition will have an impact on 30% of all jobs by 2030. MyBit provides an ecosystem for the upcoming 11.1 Trillion dollar IoT industry, with the belief that everyone should have an equal opportunity to participate in this revolution.</p>'
                    }
                    isLeft
                  />
                </div>
              </div>
              <div className="Investor__verticals">
                <Media media={mediaVerticals} />
              </div>
              <div
                ref={el => {
                  this.el = el
                }}
                className="Investor__highlights grid-center"
              >
                {highlightsToRender}
              </div>
              <div className="Investor__industry-value--is-desktop">
                <Media media={mediaIndustriesDesktop} />
              </div>
              <div className="Investor__industry-value--is-mobile">
                <Media media={mediaIndustriesMobile} />
              </div>
              <div className="grid-middle Investor__who">
                <div className="col-9 col_sm-12">
                  <MediaCTA
                    title="Who can Invest?"
                    content={
                      '<p>Anyone can use the MyBit Platform. Unlike traditional investment funds that require unrealistic amounts of capital for 99% of people, MyBit ensures everyone access to the best opportunities. We believe in a fair and open market, driven by technology that actually benefits people. By using the most advanced blockchain technologies, MyBit revolutionized investing as a whole. MyBit is investing made efficient, secure and fast for everyone.</p>'
                    }
                    isRight
                  />
                </div>
                <div className="col-3 col_sm-12 MediaCTA__image-wrapper">
                  <img src={Cube} className="Investor__img-cube" />
                </div>
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}

export default Investor
