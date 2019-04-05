import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-dao.png'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import { SPadding128, SPadding48 } from '@components/SPadding'
import { SBlueTitle } from '@components/SBlueTitle'
import { SParagraph } from '@components/SParagraph'
import illoInvest from '@images/illo-invest.svg'
import illoIot from '@images/illo-iot.svg'
import illoAsset from '@images/illo-asset.svg'
import { SSubHeadline } from '@components/SSubHeadline'
import { IconAboutCard, IconAboutCards } from './about'
import iconDevelopers from '@images/icon-developers.svg'
import iconMarketing from '@images/icon-marketing.svg'
import iconBusiness from '@images/icon-business.svg'

export default class ParticipatePage extends React.Component<{}> {
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
          <SHeadline color="white">Participate</SHeadline>
          <SParagraphLead color="white">
            MyBit Go prides itself on principles of inclusiveness. Therefore,
            there are ways for anyone to become involved.
          </SParagraphLead>
        </SHeader>
        <SPadding128 />
        <ParticipateCards>
          <ParticipateCard
            title="Investors"
            paragraph="Contribute capital to fund assets and in return receive a percentage of its revenue."
            illustration={illoInvest}
          />
          <div className='dn-ns'><SPadding48 /></div>
          <ParticipateCard
            title="IoT Partners"
            paragraph="Companies who produce IoT hardware can integrate the MyBit Go API and have their assets exposed to a global pool of investors to increase their sales."
            illustration={illoIot}
          />
          <div className='dn-ns'><SPadding48 /></div>
          <ParticipateCard
            title="Asset Managers"
            paragraph="Those who may not have excess capital to invest, can profit by receiving a percentage of the asset's revenue in exchange for managing it."
            illustration={illoAsset}
          />
        </ParticipateCards>
        <SPadding128 />
        <SSubHeadline>Contribute to the growth of MyBit Go</SSubHeadline>
        <IconAboutCards>
          <IconAboutCard
            title="Developers"
            paragraph="Engineers can complete any tasks listed on task.market and receive compensation for doing so."
            icon={iconDevelopers}
          />
          <IconAboutCard
            title="Marketing"
            paragraph="Help attract new users and spread awareness  - need to expand this and add in link to community marketing strategy."
            icon={iconMarketing}
          />
          <IconAboutCard
            title="Business"
            paragraph="Attract IoT partners and get paid, and other partnerships to advance technology"
            icon={iconBusiness}
          />
        </IconAboutCards>
        <SPadding128 />
      </>
    )
  }
}

const ParticipateCards = styled.div.attrs({
  className: 'flex-ns flex-row-ns flex-wrap-ns justify-around center'
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
  <div className="ph2 w-30-ns">
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
