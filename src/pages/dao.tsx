import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-dao.jpg'
import { SHeadline } from '@components/SHeadline'
import { SParagraphLead } from '@components/SParagraphLead'
import {
  SPadding128,
  SPadding48,
  SPadding24,
  SPadding16
} from '@components/SPadding'
import { SSubHeadline, SSubHeadlineSmall } from '@components/SSubHeadline'
import schemeDesktop from '@images/scheme-desktop.svg'
import schemeMobile from '@images/scheme-mob.svg'
import voteGraphic from '@images/illo-vote.svg'
import { AboutCard, AboutCardsAlt, IconAboutCards } from './about'
import { SBlueTitle } from '@components/SBlueTitle'
import { SParagraph } from '@components/SParagraph'
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
          <SHeadline color="white">
            MyBit is decentralised and autonomous
          </SHeadline>
          <SParagraphLead color="white">
            This means that no single person, company, nor group owns nor
            controls MyBit. Instead it is maintained by a strong community of
            people from all different backgrounds and its rules are enforced by
            unchangeable computer code.
          </SParagraphLead>
        </SHeader>
        <SPadding128 />
        <SSubHeadline>Components</SSubHeadline>
        <SPadding48/>
        <div className="tc center">
          <img src={voteGraphic} height="225px" />
        </div>
        <SPadding16 />
        <SSubHeadlineSmall>Background</SSubHeadlineSmall>
        <SPadding16 />
        <SParagraphLead>
        MyBit launched as an Aragon based DAO in Fall 2019. Since then we have identified that a different DAO model is needed moving forward. While we migrate to our own custom DAO, we will be using Snapshot to manage MyBit.
        </SParagraphLead>
        <IconAboutCards>
          <QuorumCard
            title="MyBit DAO v1 (Aragon)"
            paragraph="The core problem we faced with this model was user engagement. The onboarding process we designed was very slow and clunky. Most importantly, users had to pay gas costs of several dollars to vote which was removed incentive for voter participation."
          />
          <QuorumCard
            title="MyBit DAO v2"
            paragraph="This DAO model will incentivise people to vote because they are paid to do so. In exchange for staking MYB and participating in voting, users will receive a share of the MyBit Network fees."
          />
        </IconAboutCards>
        <SPadding128 />
        <SSubHeadline>Participate</SSubHeadline>
        <SPadding48/>
        <AboutCardsAlt>
          <AboutCard
            title="Stake"
            paragraph="Tokens can easily be staked and unstaked at any time with no lockup period. Every 1 MYB counts as 1 vote."
          />
          <div className="dn-ns pb5" />
          <AboutCard
            title="Vote"
            paragraph="Proposals can range from anything from how network fees are distributed, adding in new features, launching marketing campaigns, or anything related to the MyBit Project. Voting periods will last 14 days."
          />
          <AboutCard
            title="Earn"
            paragraph="At the end of each voting period network fees will be distributed as rewards to users who had their tokens staked and voted during that period. The exact percentage of network fees will be determined by a vote and can dynamically change each period."
          />
        </AboutCardsAlt>
        <SPadding128/>
        <SSubHeadline>DAO Structure</SSubHeadline>
        <SPadding48/>
        <div className="center tc" style={{ margin: '0px 0px -16px 0px'}}>
          <img src={schemeDesktop} height="240px" className="dn db-ns center" />
          <img src={schemeMobile} height="874px"  className="dn-ns" />
        </div>
        <SPadding128 />

        <SPadding128 />
        <SSubHeadline>MyBit is an unstoppable application</SSubHeadline>
        <SPadding24 />
        <div className="center tc">
          <Btn
            text="Join Snapshot"
            linkTo="https://snapshot.page/#/mybit/community"
          />
        </div>
        <SPadding128 />
      </>
    )
  }
}

const SHeader = styled.div.attrs({ className: '' })`
  height: 486px;
  background: url(${bg}) no-repeat;
  background-color: #0b3f9c;
  background-blend-mode: multiply;
  @media screen and (min-width: 60em) {
    background-size: 100%;
  }
`

const QuorumCard = ({
  title,
  paragraph,
  icon
}: {
  title: string
  paragraph: string
  icon?: string
}) => (
  <div className="w-50-ns pt4 ph2 ph0-ns">
    {icon && (
      <div className="tc pv1">
        <img src={icon} height="104px" style={{ margin: -24 }} alt="icon" />
      </div>
    )}
    <SBlueTitle>{title}</SBlueTitle>
    <SParagraph>{paragraph}</SParagraph>
  </div>
)
