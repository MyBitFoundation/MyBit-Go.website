import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-index.png'
import { SHeadlineAlt } from '@components/SHeadline'
import {
  SPadding128,
  SPadding64,
  SPadding24,
  SPadding16,
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
import { ethers } from 'ethers'
//import { BigNumber } from 'ethers/utils'
import { withRouteData } from 'react-static'
//import AssetCard from '@components/AssetCard'

import 'materialize-css/dist/js/materialize.js'
import AssetCard, { AssetCardProps } from '@components/AssetCard';
const { Carousel } = require('react-materialize')

/*
const contracts: any = require('@mybit/contracts')
const eventsInterface = new ethers.utils.Interface(
  contracts.artifacts.Events.abi
)*/

export default withRouteData(
  class HomePage extends React.Component<any, Array<AssetCardProps>> {
    Provider: ethers.providers.BaseProvider
    ApiContract: ethers.Contract
    Assets: Array<AssetCardProps>

    constructor(props: any) {
      super(props)
      /*this.Provider = ethers.getDefaultProvider('ropsten')
      this.ApiContract = new ethers.Contract(
        contracts.addresses.ropsten.API,
        contracts.artifacts.API.abi,
        this.Provider
      )
      const records = props.records.filter((rec: any) => rec.fields.Asset)*/
      this.Assets = mockData
    }
    /*
    async getAssetDetails(records: any) {
      const rawLogs = await this.Provider.getLogs({
        address: contracts.addresses.ropsten.Events,
        fromBlock: 0
      })
      const parsedLogs = rawLogs
        .map(log => eventsInterface.parseLog(log))
        .filter(
          log =>
            log.name === 'LogAsset' &&
            log.values.message === 'Asset funding started'
        )
      console.log(parsedLogs)
      const assets: Array<Asset> = [];
      records.forEach((record: any) => {
        if(!record.fields['Asset IDs']) {
          return
        }
        const ids = record.fields['Asset IDs'].split(',')
        ids.forEach(async (id: string) => {
          const data = id.split('|')
          const event = parsedLogs.find(log => log.values.assetID === data[0])
          assets.push({
            funded: await new ethers.Contract(
              event.values.asset,
              contracts.artifacts.DivToken.abi,
              this.Provider
            ).functions.totalSupply(),
            goal: record['Funding goal'],
            city: data[2],
            country: data[3],
            name: record.Asset,
            category: record.Category,
            id: record.id,
            backgroundImage: record['Image URL'],
            fundingStage: '1',
            pastDate: false
          })
        })
      });
    }*/

    render() {
      return (
        <>
          <SHeader>
            <nav>
              <Menu
                items={[
                  { text: 'About', linkTo: '/about' },
                  { text: 'How it Works', linkTo: '/howitworks' },
                  { text: 'DAO', linkTo: '/dao' },
                  { text: 'Participate', linkTo: '/participate' }
                ]}
              />
            </nav>
            <SHeadlineAlt>
              Redefining the way people generate income
            </SHeadlineAlt>
          </SHeader>
          <SPadding64 />
          <OuterVideoContainerDesktop>
            <SPadding64 />
            <InnerVideoContainerDesktop>
              <iframe
                width="936"
                height="568"
                src="https://www.youtube.com/embed/SGFGfpKn1dg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              />
            </InnerVideoContainerDesktop>
          </OuterVideoContainerDesktop>
          <OuterVideoContainerMobile>
            <SPadding16 />
            <InnerVideoContainerMobile>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SGFGfpKn1dg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              />
            </InnerVideoContainerMobile>
          </OuterVideoContainerMobile>
          <div className="dn db-ns">
            <SPadding128 />
          </div>
          <div className="db dn-ns">
            <SPadding64 />
          </div>
          <InTheMedia>
            <SPadding64 />
            <div className="flex flex-column flex-row-ns">
              <MediaIllustration />
              <div style={{ maxWidth: '552px' }}>
                <div className="pt4 pt0-ns" />
                <SSubHeadlineGrey>Go in The Media</SSubHeadlineGrey>
                <div className="flex flex-row flex-wrap center justify-around tc">
                  <MediaLogo src={logoForbes} />
                  <MediaLogo src={logoNasdaq} />
                  <MediaLogo src={logoExpress} />
                  <MediaLogo src={logoTnw} />
                  <MediaLogo src={logoWsj} />
                  <MediaLogo src={logoCcn} />
                </div>
              </div>
            </div>
            <SPadding64 />
          </InTheMedia>
          <SPadding128 />
          <SSubHeadline>Hottest Assets</SSubHeadline>
          <SParagraphLead>
            Picture of automated devices or something. Will be talking about how
            machines are playing a larger role in the economy and why it is
            important that ownership is decentralised.
          </SParagraphLead>
          <SCarousel>
            <Carousel>
              {this.Assets.map(asset => (
                <AssetCard {...asset} />
              ))}
            </Carousel>
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
              MyBit allows anyone to finance and build blockchain-powered
              products that will revolutionize and disrupt transaction-based
              industries.
            </SParagraphLead>
            <SPadding24 />
            <div className="center tc">
              <Btn text="Launch MyBit GO" linkTo="https://app.mybit.io" />
            </div>
          </div>
          <SPadding128 />
        </>
      )
    }
  }
)

const MediaLogo = styled.img.attrs({
  className: 'w-40 w-30-ns pa1'
})``

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

const OuterVideoContainerDesktop = styled.div.attrs({
  className: 'center dn db-ns'
})`
  width: 1087px;
  height: 645px;
  background-image: url(${bgVideo});
`

const InnerVideoContainerDesktop = styled.div.attrs({
  className: 'center tc dn db-ns'
})`
  background: #000;
  -moz-border-radius: 8px;
  border-radius: 8px;
  width: 936px;
  height: 568px;
  margin: 0 auto;
  overflow: hidden;
`

const OuterVideoContainerMobile = styled.div.attrs({
  className: 'center db dn-ns'
})`
  width: 100vw;
  background-image: url(${bgVideo});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`

const InnerVideoContainerMobile = styled.div.attrs({
  className: 'center tc db dn-ns'
})`
  background: #000;
  -moz-border-radius: 8px;
  border-radius: 8px;
  width: 280px;
  height: 178px;
  margin: 0 auto;
  overflow: hidden;
`

const SHeader = styled.div.attrs({ className: '' })`
  height: 640px;
  background: url(${bg}) no-repeat;
  @media screen and (min-width: 30em) {
    background-size: 100%;
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
    min-height: 400px;
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

const mockData: Array<AssetCardProps> = [
  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },  {
    funded: '1000',
    goal: '2000',
    city: 'London',
    country: 'UK',
    name: 'Bitcoin Miner',
    backgroundImage:
      'https://s3.eu-central-1.amazonaws.com/mybit-go/assetImages:crypto_mining.jpg',
    dateString: 'Thu, Aug 8 2019',
    numInvestors: 1
  },
]
