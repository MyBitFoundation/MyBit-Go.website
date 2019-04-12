import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-dao.png'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import {
  SPadding128,
  SPadding64,
  SPadding48,
  SPadding24,
  SPadding16,
  SPadding8,
  SPadding32
} from '@components/SPadding'

import { SBlueTitle } from '@components/SBlueTitle'
import { SParagraph } from '@components/SParagraph'
import iconManager from '@images/icon-manager.svg'
import iconAsset from '@images/icon-asset.svg'
import iconEscrow from '@images/icon-escrow.svg'
import arrowsHorizontal from '@images/arrows-horizontal.svg'
import arrowsVertical from '@images/arrows-vertical.svg'
import illoStart from '@images/illo-starts.svg'
import illoEnd from '@images/illo-ends.svg'
import iconDelivery from '@images/icon-delivery.svg'
import iconDistributed from '@images/icon-distributed.svg'
import iconGeneration from '@images/icon-generation.svg'
import illoInvest from '@images/illo-invest.svg'
import illoIot from '@images/illo-iot.svg'
import illoAsset from '@images/illo-asset.svg'
import { SSubHeadline } from '@components/SSubHeadline'
import Btn from '@components/Button'
import step01 from '@images/step01.svg'
import step02 from '@images/step02.svg'
import step03 from '@images/step03.svg'
import step06 from '@images/step06.svg'
import step07 from '@images/step07.svg'
import step08 from '@images/step08.svg'
import vertical from '@images/vertical.svg'

export default class HowItWorksPage extends React.Component<{}> {
  render() {
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
          <SHeadline color="white">How It Works</SHeadline>
          <SParagraphLead color="white">
            The machine economy is projected to produce trillions of dollars,
            with IoT devices operating in nearly every industry. By enabling
            everyone to invest in these revenue generating machines, MyBit
            redefines the way people generate income.
          </SParagraphLead>
        </SHeader>
        <div className='center ph2'>
        <SPadding128 />
        <SSubHeadline>There Are 3 Core Roles.</SSubHeadline>
        <SPadding64 />
        <ParticipateCards>
          <ParticipateCard
            title="Investors"
            paragraph="Contribute capital to fund assets and in return receive a percentage of its revenue."
            illustration={illoInvest}
          />
          <div className="dn-l">
            <SPadding48 />
          </div>
          <ParticipateCard
            title="IoT Partners"
            paragraph="Companies who produce IoT hardware can integrate the MyBit Go API and have their assets exposed to a global pool of investors to increase their sales."
            illustration={illoIot}
          />
          <div className="dn-l">
            <SPadding48 />
          </div>
          <ParticipateCard
            title="Asset Managers"
            paragraph="Those who may not have excess capital to invest, can profit by receiving a percentage of the asset's revenue in exchange for managing it."
            illustration={illoAsset}
          />
        </ParticipateCards>
        <SPadding128 />
        <SSubHeadline>The Process</SSubHeadline>
        <div className='dn db-l'><SPadding64 /></div>
        <div className='db dn-l'><SPadding16 /></div>
        <ProcessStep
          title="Asset Manager"
          paragraph="Asset Managers see opportunities and maintain the machines. In this example, a store owner has space for a Bitcoin ATM in his local supermarket and he has already arranged the necessary license and insurance."
          image={step01}
          alternate={false}
        />
        <Spacer />
        <ProcessStep
          title="Select an Asset"
          paragraph="Depending on location, the Asset Manager selects an asset from a variety of carefully selected partners who supply the device."
          image={step02}
          alternate={true}
        />
        <Spacer />
        <ProcessStep
          title="Escrow"
          paragraph="To ensure that the asset manager meets the expectations of the investors, a portion of the asset’s value is put down as collateral."
          image={step03}
          alternate={false}
        />
        <Spacer />
        <IllustrationHowCards>
          <IllustrationHowCard
            illustration={illoStart}
            title="04. Funding Starts"
            paragraph="Investors from all over the world invest in the Bitcoin ATM for a maximum of 30 days or until the funding goal is met. If the funding goal isn’t met, the funds are automatically returned back to investors."
          />
          <div className="center tc dn db-l">
            <ArrowHorizontal />
          </div>
          <div className="center tc dn-l pv3">
            <ArrowVertical />
          </div>
          <IllustrationHowCard
            illustration={illoEnd}
            title="05. Funding Ends"
            paragraph="Once the Bitcoin ATM is fully funded, the order and payment is directly sent to the selected partner."
          />
        </IllustrationHowCards>
        <Spacer />
        <ProcessStep
          title="Delivery and Install"
          paragraph="The partner delivers the machine and installs it for the asset manager."
          image={step06}
          alternate={true}
        />
        <Spacer />
        <ProcessStep
          title="Revenue Generation"
          paragraph="The asset is now generating revenue as the Bitcoin ATM charges fees for every transaction."
          image={step07}
          alternate={false}
        />
        <Spacer />
        <ProcessStep
          title="Revenue Distributed"
          paragraph="This revenue is distributed proportionately back to the investors over the blockchain without brokers, lawyers or middle-men. This results in a cost efficient, secure and transparent investment experience for everyone."
          image={step08}
          alternate={true}
        />
        <Spacer />
        <SPadding16 />
        <SSubHeadline>Own your future</SSubHeadline>
        <SPadding8 />
        <SParagraphLead>
          Get your bit of the machine economy today.
        </SParagraphLead>
        <SPadding24 />
        <div className="center tc">
          <Btn text="Launch Go" linkTo="https://app.mybit.io" target="_top" />
        </div>
        <SPadding128 />
        </div>
      </>
    )
  }
}

const Spacer = () => (
  <>
    <Vertical />
    <div className="dn-l center"><SPadding32/><ArrowVertical/><SPadding32/></div>
  </>
)

const Vertical = styled.img.attrs({
  className: 'center tc dn db-l',
  src: vertical
})`
  width: 1px;
  height: 118px;
`

const ArrowHorizontal = styled.img.attrs({
  src: arrowsHorizontal,
  width: '39px',
  height: '22px'
})``

const ArrowVertical = styled.img.attrs({
  className: 'db center',
  src: arrowsVertical,
  width: '22px',
  height: '39px'
})``

const IllustrationHowCards = styled.div.attrs({
  className:
    'flex-l flex-row-l flex-wrap-l justify-around center items-center'
})`
  max-width: 936px;
`

const IllustrationHowCard = ({
  title,
  paragraph,
  illustration
}: {
  title: string
  paragraph: string
  illustration: string
}) => (
  <div className="ph2 w-40-l">
    <img
      className="center tc db"
      src={illustration}
      height="210px"
      width="360px"
    />
    <SPadding16 />
    <SBlueTitle>{title}</SBlueTitle>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)

const SHeader = styled.div.attrs({ className: '' })`
  height: 486px;
  background: url(${bg}) no-repeat;
  background-color: #0b3f9c;
  background-blend-mode: multiply;

`

const ParticipateCards = styled.div.attrs({
  className: 'flex-l flex-row-l flex-wrap-l justify-around center'
})`
  max-width: 1128px;
`

export const ParticipateCard = ({
  title,
  paragraph,
  illustration
}: {
  title: string
  paragraph: string
  illustration: string
}) => (
  <div className="ph2 w-30-l">
    <img
      className="center tc db"
      src={illustration}
      height="210px"
      width="360px"
    />
    <SBlueTitle>{title}</SBlueTitle>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)

const ProcessStep = ({
  title,
  paragraph,
  image,
  alternate
}: {
  title: string
  paragraph: string
  image: string
  alternate: boolean
}) => (
  <div
    style={{ maxWidth: '936px' }}
    className={`center flex flex-column flex-row-l items-center justify-between ${
      alternate ? 'flex-row-reverse-l' : 'flex-row-l'
    }`}
  > 
    <ProcessStepItem>
    <div className='dn-l'><SPadding16/></div>
      <ProcessTitle>{title}</ProcessTitle>
      <SPadding8/>
      <ProcessText>{paragraph}</ProcessText>
    </ProcessStepItem>
    <div className="dn db-l">
      <ArrowVertical />
    </div>
    <img
      style={{ margin: '-16px -16px -16px -20px' }}
      src={image}
      alt={`${title} illustration`}
    />
  </div>
)

const ProcessTitle = styled.div.attrs({
  className: 'tl ph2 ph0-l'
})`
  font-weight: 900;
  font-family: Gilroy;
  font-size: 18px;
  line-height: 24px;
  color: #111111;
  @media screen and (min-width: 30em) {
    font-size: 24px;
  }
`

const ProcessStepItem = styled.div.attrs({
  className:'order-last order-0-l'
})`
  @media screen and (min-width: 30em) {
    max-width: 360px;
  }
  
`

const ProcessText = styled.div.attrs({
  className: 'tl ph2 ph0-l'
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6c6c6c;
`
