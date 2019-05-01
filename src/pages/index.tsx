import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-index.jpg'
import { SHeadlineAlt } from '@components/SHeadline'
import {
  SPadding128,
  SPadding64,
  SPadding24,
  SPadding8
} from '@components/SPadding'
import bgVideo from '@images/bg-video.svg'
import logoForbes from '@images/logo-forbes.svg'
import logoNasdaq from '@images/logo-nasdaq.svg'
import logoExpress from '@images/logo-express.svg'
import logoTnw from '@images/logo-tnw.svg'
import logoCcn from '@images/logo-ccn.svg'
import logoWsj from '@images/logo-wsj.svg'
import illoMedia from '@images/illo-media.svg'
import { SSubHeadlineGrey, SSubHeadline } from '@components/SSubHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import illoParticipate from '@images/illo-participate.svg'
import Btn from '@components/Button'

import 'materialize-css/dist/js/materialize.js'
import { AssetCard, AssetCardProps } from '@components/AssetCard'
import {
  AssetCardHeader,
  AssetCardHeaderProps
} from '@components/AssetCardHeader'
const { Carousel } = require('react-materialize')
import axios from 'axios'

export default class HomePage extends React.Component<
  any,
  { Assets: Array<AssetCardProps> }
> {
  constructor(props: any) {
    super(props)
    this.getAssets()
    this.state = {
      Assets: []
    }
  }
  getAssets = async () => {
    const res = await axios.get(
      'https://app.mybit.io/api/assets'
    )
    console.log(res.data)
    const Assets: Array<AssetCardProps> = res.data.map((e: any) => {
      return {
        funded: e.fundingProgress,
        goal: e.fundingGoal,
        city: e.city,
        country: e.country,
        name: e.defaultData.name,
        backgroundImage: e.defaultData.imageSrc,
        dateString: new Date(e.fundingDeadline).toDateString(),
        numInvestors: e.numberOfInvestors,
        assetId: e.assetId
      }
    })
    this.setState({ Assets })
  }

  render = () => {
    return (
      <>
        <SHeader>
          <nav>
            <Menu
              items={[
                { text: 'About', linkTo: '/about' },
                { text: 'How it Works', linkTo: '/howitworks' },
                { text: 'DAO', linkTo: '/dao' }
              ]}
            />
          </nav>
          <div
            style={{ maxWidth: '1064px' }}
            className="flex-ns flex-row-ns justify-between pt6-ns center pl3-ns"
          >
            <SHeadlineArea>
              <SHeadlineAlt>
                Redefining the way
                <br /> people generate income
              </SHeadlineAlt>
              <SPadding24 />
              <div className="flex flex-column flex-row-ns justify-start-ns justify-center center items-center">
                <div style={{ width: '200px' }} className="pr3-ns pb3 pb0-ns">
                  <Btn linkTo="/about" text="learn more" isWhite />
                </div>
                <div style={{ width: '200px' }}>
                  <Btn
                    linkTo="https://app.mybit.io"
                    text="launch mybit go"
                    target="_top"
                  />
                </div>
              </div>
            </SHeadlineArea>
            <div className="pr4">
              <AssetCardHeader {...HeaderCardData} />
            </div>
          </div>
        </SHeader>
        <SPadding64 />
        <VideoBG>
          <div>
            <VideoContainer>
              <SIframe
                src="https://www.youtube.com/embed/SGFGfpKn1dg?rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              />
            </VideoContainer>
          </div>
        </VideoBG>
        <div className="dn db-ns">
          <SPadding64 />
        </div>
        <InTheMedia>
          <SPadding64 />
          <div className="flex flex-column flex-row-ns">
            <MediaIllustration />
            <div style={{ maxWidth: '552px' }}>
              <div className="pt4 pt0-ns" />
              <SSubHeadlineGrey>Go in The Media</SSubHeadlineGrey>
              <div className="flex flex-row flex-wrap center justify-around tc pt3-ns">
                <MediaLink
                  address="https://www.forbes.com/sites/omribarzilay/2017/08/14/why-blockchain-is-the-future-of-the-sharing-economy/#7e4b48b83342"
                  src={logoForbes}
                />
                <MediaLink
                  address="http://www.nasdaq.com/article/blockchain-technology-could-disrupt-and-reboot-the-sharing-economy-cm836757"
                  src={logoNasdaq}
                />
                <MediaLink
                  address="https://www.express.co.uk/finance/city/915842/cryptocurrency-news-dow-jones-what-could-collapse-mean-bitcoin-ripple-ethereum"
                  src={logoExpress}
                />
                <MediaLink
                  address="https://thenextweb.com/contributors/2017/09/21/blockchain-tech-missing-link-success-iot/"
                  src={logoTnw}
                />
                <MediaLink
                  address="https://www.wsj.com/articles/switzerland-wants-to-be-the-world-capital-of-cryptocurrency-1524942058"
                  src={logoWsj}
                />
                <MediaLink
                  address="https://www.ccn.com/ground-success-story-mybit/"
                  src={logoCcn}
                />
              </div>
            </div>
          </div>
          <SPadding64 />
        </InTheMedia>
        <SPadding128 />
        <SSubHeadline>Hottest Assets</SSubHeadline>
        <SParagraphLead>
          Any device that connects to the internet and generates revenue by
          providing a good or service is eligible to be listed on MyBit Go.
        </SParagraphLead>
        <SCarousel>
          {this.state.Assets.length ? (
            <Carousel>
              {this.state.Assets.map(asset => (
                <AssetCard {...asset} />
              ))}
            </Carousel>
          ) : (
            'Loading...'
          )}
        </SCarousel>

        <SPadding64 />
        <div className="center tc">
          <img
            src={illoParticipate}
            width="291px"
            height="210px"
            alt="illustration"
          />
          <SPadding8 />
          <SSubHeadline>Participate in the revolution</SSubHeadline>
          <SParagraphLead>
            Don't sit back! Get your bit of the machine economy today.
          </SParagraphLead>
          <SPadding24 />
          <div className="center tc">
            <Btn
              text="Launch MyBit GO"
              linkTo="https://app.mybit.io"
              target="_top"
            />
          </div>
        </div>
        <SPadding128 />
      </>
    )
  }
}

const SHeadlineArea = styled.div.attrs({
  className: 'pt6'
})`
  max-width: '552px';
`

const MediaLogo = styled.img.attrs({
  className: 'w-40 w-30-ns'
})`
  width: 168px;
  height: 70px;
`

const MediaLink = (props: { address: string; src: string }) => {
  return (
    <a href={props.address} rel="noreferer" target="_blank">
      <MediaLogo src={props.src} />
    </a>
  )
}

const MediaIllustration = styled.img.attrs({
  src: illoMedia,
  className: 'ph2 ph5-ns dib'
})``

const InTheMedia = styled.div.attrs({
  className: 'center'
})`
  max-width: 1128px;
  background: #0b3f9c;

  @media screen and (min-width: 60em) {
    height: 364px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
      0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  }
`

const VideoBG = styled.div.attrs({
  className: 'center ph4 pb6 pt4 pt6-ns ph6-ns pb7-ns'
})`
  background-size: 100%;
  background-image: url(${bgVideo});
  background-repeat: no-repeat;
  max-width: 1087px;
  max-height: 645px;
`

const VideoContainer = styled.div.attrs({
  className: 'center tc'
})`
  background: #000;
  -moz-border-radius: 8px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`

const SIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const SHeader = styled.div.attrs({ className: '' })`
  height: 640px;
  background: url(${bg}) no-repeat;
  @media(min-width: 900px){
    background-size: 100% 100%;
  }
`

const SCarousel = styled.div`
  .carousel {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 582px;
    -webkit-perspective: 500px;
    perspective: 500px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
  }

  .carousel.carousel-slider {
    top: 0;
    left: 0;
  }

  .carousel.carousel-slider .carousel-fixed-item {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 1;
  }

  .carousel.carousel-slider .carousel-fixed-item.with-indicators {
    bottom: 68px;
  }

  .carousel.carousel-slider .carousel-item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel.carousel-slider .carousel-item h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  .carousel.carousel-slider .carousel-item p {
    font-size: 15px;
  }

  .carousel .carousel-item {
    visibility: hidden;
    width: 420px;
    height: 534px;
    position: absolute;
    top: 0;
    left: 0;
    @media screen and (max-width: 30em) {
      width: 90vw;
    }
  }

  .carousel .carousel-item > img {
    width: 100%;
  }

  .carousel .indicators {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  .carousel .indicators .indicator-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 8px;
    width: 8px;
    margin: 24px 4px;
    background-color: rgba(255, 255, 255, 1);
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    border-radius: 50%;
  }

  .carousel .indicators .indicator-item.active {
    background-color: #fff;
  }

  .carousel.scrolling .carousel-item .materialboxed,
  .carousel .carousel-item:not(.active) .materialboxed {
    pointer-events: none;
  }
`

const HeaderCardData: AssetCardHeaderProps = {
  name: 'Solar Farm',
  city: 'Trapani',
  country: 'Italy',
  funded: '37800',
  goal: '56000',
  dateString: 'Fri, Apr 26 2019',
  numInvestors: 5
}
