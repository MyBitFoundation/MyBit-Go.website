import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-about.jpg'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import { SParagraph } from '@components/SParagraph'
import { SPadding128, SPadding48, SPadding24, SPadding16 } from '@components/SPadding'
import { SBlueTitle } from '@components/SBlueTitle'
import { SSubHeadlineSmall, SSubHeadline } from '@components/SSubHeadline'
import illustration from '@images/illo-mybit.svg'
import faster from '@images/circle-speed.svg'
import profit from '@images/circle-profit.svg'
import safe from '@images/circle-safe.svg'
import easy from '@images/circle-easy.svg'
import accessible from '@images/circle-accessible.svg'
import global from '@images/circle-global.svg'
import Btn from '@components/Button'

export default class AboutPage extends React.Component<{}> {
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
          <SHeadline color="white">About</SHeadline>
          <SParagraphLead color="white">
            Our vision is creating a future where people don't have to work and
            machines pay humans
          </SParagraphLead>
        </SHeader>
        <SPadding128 />
        <SParagraphLead>
          Jobs across all industries are beginning to be automated by advanced
          machinery and tools. This is happening today right beneath our feet,
          and large companies are capitalising on this by investing in large
          fleets of machines.
        </SParagraphLead>
        <SPadding48 />
        <AboutCards>
          <AboutCardShortTitle
            title="No Opportunity for
The Average Person"
            paragraph="This will result in a future where few humans hold jobs and machines are owned by a handful of large companies, causing income disparity to rise at unprecedented levels."
          />
          <div className='dn-ns pb5'></div>
          <AboutCard
            title="Only Accessible by The
            Ultra-Wealthy"
            paragraph="Beyond that, there are even laws in place which restrict who can invest by requiring a minimum net worth and value of assets often in the millions."
          />
        </AboutCards>
        <SPadding48 />
        <SSubHeadlineSmall>This is counterproductive</SSubHeadlineSmall>
        <SPadding128 />
        <div className="center tc">
          <img
            src={illustration}
            width="358px"
            height="250px"
            alt="mybit"
            className="center"
          />
        </div>
        <SPadding24/>
        <SSubHeadline>Welcome To MyBit</SSubHeadline>
        <SPadding16/>
        <SParagraphLead>
          We at MyBit believe that this is counterproductive and does not benefit
          society. It creates an environment where the already well off can
          continue profiting and growing their wealth while those who are not as
          fortunate in terms of total wealth are left stranded.
        </SParagraphLead>
        <SPadding48/>
        <AboutCardsAlt>
          <AboutCard
            title="Accessible Investment Marketplace"
            paragraph="Using Blockchain technology, MyBit Go creates an inclusive, equal, and accessible investment marketplace. So instead of a few people owning all of the machines, anyone can profit from machine labour and participate in the economy of the future."
          />
          <div className='dn-ns pb5'></div>
          <AboutCard
            title="Blockchain In Use"
            paragraph="Blockchain technology is great for two things; sending money and assets without a bank and executing contractual agreements without a lawyer or other form of intermediary. MyBit Go incorporates this technology to offer a vast range of benefits over traditional investment platforms."
          />
        </AboutCardsAlt>
        <SPadding128/>
        <SSubHeadlineSmall>MyBit Go Is</SSubHeadlineSmall>
        <IconAboutCards>
          <IconAboutCard icon={faster} title='Faster' paragraph='Traditional funds pay out quarterly or annually. With MyBit, it’s in real-time.'/>
          <IconAboutCard icon={profit} title='More Profitable' paragraph='Funds usually charge 20-30%. With MyBit, it’s a flat 3% fee.'/>
          <IconAboutCard icon={safe} title='Safer' paragraph='Investment funds expect you to trust their data. With MyBit, it’s backed by the blockchain.'/>
          <IconAboutCard icon={easy} title='Easier' paragraph='No banks, no lawyers, no escrow agents, no extensive paperwork, and no contracts to enforce.'/>
          <IconAboutCard icon={accessible} title='Accessible' paragraph='Traditional funds are for high net worth individuals only. MyBit’s accessible to all.'/>
          <IconAboutCard icon={global} title='Global' paragraph='Many funds are limited by geography. MyBit offers access to a global market.'/>
        </IconAboutCards>
        <SPadding16 />
        <div className="center tc">
          <Btn text="How it works" linkTo="/howitworks" />
        </div>
        <SPadding128 />
      </>
    )
  }
}

const AboutCards = styled.div.attrs({
  className: 'flex-ns flex-row-ns center justify-around'
})`
  max-width: 840px;
`

export const AboutCardsAlt = styled.div.attrs({
  className: 'flex-ns flex-row-ns center justify-around'
})`
  max-width: 1140px;
`

export const IconAboutCards = styled.div.attrs({
  className: 'flex-ns flex-row-ns flex-wrap-ns center justify-around'
})`
  max-width: 1140px;
`

export const AboutCard = ({
  title,
  paragraph
}: {
  title: string,
  paragraph: string
}) => (
  <div className="ph2 ph4-ns mw-40-ns">
    <SBlueTitle>{title}</SBlueTitle>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)

const AboutCardShortTitle = ({
  title,
  paragraph
}: {
  title: string,
  paragraph: string,
  icon?: string
}) => (
  <div className="ph4-ns">
    <div className='w-60 tc center'><SBlueTitle>{title}</SBlueTitle></div>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)

export const IconAboutCard = ({
  title,
  paragraph,
  icon
}: {
  title: string,
  paragraph: string,
  icon?: string
}) => (
  <div className="w-30-ns pt5 pt4-ns">
    {icon && <div className='tc pv1'><img src={icon} height='104px' style={{margin: -24}} alt='icon'/></div>}
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
