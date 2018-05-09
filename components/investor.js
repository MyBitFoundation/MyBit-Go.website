import React from 'react'
import Roi from '../static/svgs/other/roi.svg';
import Cube from '../static/svgs/other/cube.svg';
import IndustryValueMobile from '../static/assets/Industry Value Graph Mobile v2.png'
import { Media } from './media';
import { Highlight } from './highlights';
import { Header } from './header';
import { MyBitFooter } from './footer/footer';
import stylesheet from './investor.scss'

export const Investor = () => {
  const mediaWhy = [{
      title: "Why invest in IoT?",
      content: "<p>The Internet changed humanity significantly. Now there is a new technological revolution on its way. It is predicted that by 2025, 50 billion IoT devices will generate an astonishing 11.1 trillion $ in revenue.  Every industry and occupation will be affected under the fast development of autonomous machines. Mckinsey (2017) calculated that 50% of all global working-hours can be automated with currently demonstrated technology already. This machine transition will have an impact on 30% of all jobs by 2030. MyBit provides an ecosystem for the upcoming 11.1 Trillion dollar IoT industry, with the belief that everyone should have an equal opportunity to participate in this revolution.</p>",
      iconClassName: ""
    }]

  const mediaVerticals = [{
    title: "Target IoT verticals",
    content: "<p>The MyBit Ecosystem functions as a multi-industrial investment platform. </br>This means it is applicable to all markets, across all industries, in all countries.</p>",
    iconClassName: "",
    isCentered: true
  }]

  const content = [
    {
      title: "Transportation",
      content: "<b>Delivery drones</b><b>Self driving taxis</b><b>Transport trucks</b>"
    },
    {
      title: "Financial",
      content: "<b>Cryptocurrency ATMs</b><b>Cryptocurrency Mining  Masternodes</b>"
    },
      {
      title: "Manufacturing",
      content: "<b>3D printing</b><b>Robotics</b>"
    },
    {
      title: "Healthcare",
      content: "<b>Diagnostics</b><b>Surgical</b>"
    },
    {
      title: "Real Estate",
      content: "<b>Rental properties</b><b>Storage</b><b>Co-working space</b>"
    },
    {
      title: "Energy",
      content: "<b>Solar</b><b>Wind</b><b>Charging Stations</b>"
    },
      {
      title: "Retail",
      content: "<b>Vending machines</b><b>Automated kioks/stores</b>"
    },
    {
      title: "Agriculture",
      content: "<b>Farming equipment</b><b>Automated harvesting</b>"
    },
      {
    title: "The future",
      content: "<b>The MyBit platform will grow together with the expanding IoT industry. Adding new devices and revenue models to existing IoT devices.</b>"
    },
  ]

  const stats = [
    {
      area: "Advanced Energy",
      value: "1.4",
      height: "10px"
    },
    {
      area: "Information & communication",
      value: "1.7",
      height: "13px"
    },
    {
      area: "Health",
      value: "2",
      height: "19px"
    },
    {
      area: "Transport and storage",
      value: "2.4",
      height: "25px"
    },
    {
      area: "Construction",
      value: "2.5",
      height: "35px"
    },
    {
      area: "Agriculture",
      value: "11",
      height: "96px"
    },

    {
      area: "Wholesale and retail",
      value: "20",
      height: "171px"
    },
    {
      area: "Manufacturing",
      value: "24",
      height: "210px"
    },
    {
      area: "Real estate",
      value: "217",
      height: "249px"
    }
  ]

  const highlightsToRender = content.map(details =>
      (
        <Highlight
          key={details.title}
          title={details.title}
          content={details.content}
          icon="MyBitDappIcon"
          isCentered
          isLight={false}
        />
      )
    )

  const industryValueDesktopToRender =
    (
      <div className="grid Investor__chart">
        {stats.map(val =>
          (
            <div key={val.value} className="col" style={{position: "relative"}}>
              <div className="Investor__chart-col-wrapper">
                <b className="Investor__chart-value">{val.value} T$</b>
                <div className="Investor__chart-column" style={{height: val.height}} />
                <div style={{height: "37px"}}>
                  <p className="Investor__chart-area-text">{val.area}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    )
  const industryValueMobileToRender =
    (
      <div>
        <img alt="Industry Value" className="Investor__chart--is-mobile-image" src={IndustryValueMobile} />
      </div>
    )
  const mediaContent = {
    title: "Industries which have already began automating with IoT",
    content: industryValueDesktopToRender,
    isCentered: true
  }

  const mediaIndustriesDesktop = [mediaContent]

  const mediaIndustriesMobile = [{...mediaContent, content: industryValueMobileToRender}]

  const mediaWho = [{
    title: "Who can Invest?",
    content: "<p>Anyone can use the MyBit Platform. Unlike traditional investment funds that require unrealistic amounts of capital for 99% of people, MyBit ensures everyone access to the best opportunities. We believe in a fair and open market, driven by technology that actually benefits people. By using the most advanced blockchain technologies, MyBit revolutionized investing as whole. MyBit is investing made efficient, secure and fast for everyone.</p>",
    iconClassName: ""
  }]


  return (
    <div style={{maxWidth: "1650px", margin:"0 auto"}}>
      <div className="Investor">
        <Header isLight={false}/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="grid-middle Investor__why">
          <div className="col-3 Investor__media-image-wrapper" style={{position: "relative"}}>
            <Roi alt="ROI" className="Investor__media-image"/>
          </div>
          <div className="col-9 Investor__media-desc-wrapper">
            <div className="Investor__media-desc">
              <Media
                media={mediaWhy}
              />
            </div>
          </div>
        </div>
        <div className="Investor__verticals">
          <Media
            media={mediaVerticals}
          />
        </div>
        <div className="Investor__highlights grid-center">
          {highlightsToRender}
        </div>
        <div className="Investor__industry-value--is-desktop">
          <Media
            media={mediaIndustriesDesktop}
          />
        </div>
        <div className="Investor__industry-value--is-mobile">
          <Media
            media={mediaIndustriesMobile}
          />
        </div>
        <div className="grid-middle Investor__who">
          <div className="col-9 Investor__media-desc-wrapper">
            <div className="Investor__media-desc">
              <Media
                media={mediaWho}
              />
            </div>
          </div>
          <div className="col-3 Investor__media-image-wrapper" style={{position: "relative"}}>
            <Cube className="Investor__media-image"/>
          </div>
        </div>
      </div>
      <MyBitFooter />
    </div>
  )
}
