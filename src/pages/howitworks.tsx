import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-dao.png'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import { SPadding128, SPadding64, SPadding16, SPadding24 } from '@components/SPadding'

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
import { SSubHeadline } from '@components/SSubHeadline';
import Btn from '@components/Button';

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
                { text: 'DAO', linkTo: '/dao' },
                { text: 'Participate', linkTo: '/participate' }
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
        <SPadding128 />
        <IconHowCards>
          <IconHowCard
            title="Asset Manager"
            paragraph="Asset Managers see opportunities and maintain the machines. In this example, a store owner has space for a Bitcoin ATM in his local supermarket and he has already arranged the necessary license and insurance."
            icon={iconManager}
          />
          <ArrowHorizontal />
          <div className='center tc dn-ns'><ArrowVertical /></div>
          <IconHowCard
            title="Select an Asset"
            paragraph="Depending on location, the Asset Manager selects an asset from a variety of carefully selected partners who supply the device."
            icon={iconAsset}
          />
          <ArrowHorizontal />
          <div className='center tc dn-ns'><ArrowVertical /></div>
          <IconHowCard
            title="Escrow"
            paragraph="To ensure that the asset manager meets the expectations of the investors, a portion of the asset’s value is put down as collateral."
            icon={iconEscrow}
          />
        </IconHowCards>
        <SPadding64 />
        <IllustrationHowCards>
          <IllustrationHowCard
            illustration={illoStart}
            title="Funding Starts"
            paragraph="Investors from all over the world invest in the Bitcoin ATM for a maximum of 30 days or until the funding goal is met. If the funding goal isn’t met, the funds are automatically returned back to investors."
          />
          <ArrowHorizontalAlt />
          <div className='center tc dn-ns'><ArrowVertical /></div>
          <IllustrationHowCard
            illustration={illoEnd}
            title="Funding Ends"
            paragraph="Once the Bitcoin ATM is fully funded, the order and payment is directly sent to the selected partner."
          />
        </IllustrationHowCards>
        <SPadding64 />
        <IconHowCards>
          <IconHowCard
            title="Delivery and Install"
            paragraph="The partner delivers the machine and installs it for the asset manager."
            icon={iconDelivery}
          />
          <ArrowHorizontal />
          <div className='center tc dn-ns'><ArrowVertical /></div>
          <IconHowCard
            title="Revenue Generation"
            paragraph="The asset is now generating revenue as the Bitcoin ATM charges fees for every transaction."
            icon={iconGeneration}
          />
          <ArrowHorizontal />
          <div className='center tc dn-ns'><ArrowVertical /></div>
          <IconHowCard
            title="Revenue Distributed"
            paragraph="This revenue is distributed proportionately back to the investors over the blockchain without brokers, lawyers or middle-men. This results in a cost efficient, secure and transparent investment experience for everyone."
            icon={iconDistributed}
          />
        </IconHowCards>
        <SPadding128 />
        <SSubHeadline>Own your future</SSubHeadline>
        <SPadding16 />
        <SParagraphLead>Be one of the first to test the future of investing.</SParagraphLead>
        <SPadding24 />
        <div className="center tc">
          <Btn
            text="Try Go"
            linkTo="https://app.mybit.io"
          />
        </div>
        <SPadding128 />
      </>
    )
  }
}

const ArrowHorizontal = styled.img.attrs({
  src: arrowsHorizontal,
  width: '39px',
  height: '22px',
  className: 'dn db-ns'
})`
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 54px;
  padding-bottom: 0px;
`

const ArrowHorizontalAlt = styled.img.attrs({
  src: arrowsHorizontal,
  width: '39px',
  height: '22px',
  className: 'dn db-ns'
})`
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 128px;
  padding-bottom: 0px;
`

const ArrowVertical = styled.img.attrs({
  src: arrowsVertical,
  width: '22px',
  height: '39px',
  className: 'dn-ns'
})`
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 24px;
  padding-bottom: 24px;
`

const IconHowCards = styled.div.attrs({
  className: 'flex-ns flex-row-ns center justify-center items-top'
})``

const IconHowCard = ({
  title,
  paragraph,
  icon
}: {
  title: string
  paragraph: string
  icon?: string
}) => (
  <div style={{ maxWidth: '360px' }} className="center">
    {icon && (
      <div className="tc pv1">
        <img src={icon} height="104px" style={{ margin: -24 }} alt="icon" />
      </div>
    )}
    <SBlueTitle>{title}</SBlueTitle>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)

const IllustrationHowCards = styled.div.attrs({
  className: 'flex-ns flex-row-ns flex-wrap-ns justify-around center'
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
  <div className="ph2 w-40-ns">
    <img
      className="center tc"
      src={illustration}
      height="210px"
      width="360px"
    />
    <SBlueTitle>{title}</SBlueTitle>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)

const SHeader = styled.div.attrs({ className: '' })`
  height: 486px;
  background: url(${bg}) no-repeat;
  background-color: #0b3f9c;
  background-blend-mode: multiply;
  @media screen and (min-width: 60em) {
    background-size: 100%;
  }
`
