import React from 'react'
import styled from 'styled-components'
import Menu from '@containers/Menu'
import bg from '@images/hero-dao.png'
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
            MyBit Go is decentralised and autonomous
          </SHeadline>
          <SParagraphLead color="white">
            This means that no single person, company, nor group owns nor
            controls MyBit Go. Instead it is maintained by a strong community of
            people from all different backgrounds and its rules are enforced by
            unchangeable computer code.
          </SParagraphLead>
        </SHeader>
        <SPadding128 />
        <div className="center tc">
          <img src={schemeDesktop} height="240px" className="dn db-ns center" />
          <img src={schemeMobile} height="874px" className="dn-ns" />
        </div>
        <SPadding48 />
        <AboutCardsAlt>
          <AboutCard
            title="Propose"
            paragraph="If someone has a vision for a new feature, change to the business model, or anything at all related to MyBit Go, they can propose it to the community and a vote to approve or reject the proposal is opened."
          />
          <div className="dn-ns pb5" />
          <AboutCard
            title="Vote"
            paragraph="Anyone who owns 1 MYB is eligible to vote. 1 MYB = 1 vote and we use identity verification to ensure each individual only gets 1 vote. The only way to receive more voting power is to stake 100,000 MYB for extended intervals of time. The longer the stake period, the higher the multiplier."
          />
          <AboutCard
            title="Enforce"
            paragraph="Individuals can be voted into a curator position where they are in charge of reviewing the completion of tasks voted on via the DAO. At any point in time they can be impeached if they do not fulfil their duties."
          />
        </AboutCardsAlt>
        <SPadding128 />
        <div className="tc center">
          <img src={voteGraphic} height="225px" />
        </div>
        <SPadding16 />
        <SSubHeadlineSmall>Consensus</SSubHeadlineSmall>
        <SPadding16 />
        <SParagraphLead>
          All votes must achieve consensus, which means a majority, or greater
          than 50% of the community agrees to either approve or reject it.
        </SParagraphLead>
        <IconAboutCards>
          <QuorumCard
            title="Quorum"
            paragraph="Voter turnout must reach a minimum amount. It is not reasonable to expect that 100% of eligible voters will participate for each vote. But there needs to be a minimum requirement for participation to preserve the security of the network so one person or a small group cannot initiate a vote and pass it through if no one else votes. This is where quorum comes into effect. For example 25% of eligible voters may be required to vote for a proposal to officially be approved."
          />
          <QuorumCard
            title="Self-Sustaining Revenue Model"
            paragraph="Since MyBit Go is not owned by any company, all revenue goes back into the community. The 3% fee assessed to the funding of every new asset is distributed into the MyBit Go DAO to be reallocated towards maintaining and growing the ecosystem and can be applied for anything from development, to marketing, to business uses."
          />
        </IconAboutCards>
        <SPadding128 />
        <SSubHeadline>MyBit Go is an unstoppable ecosystem</SSubHeadline>
        <SPadding24 />
        <div className="center tc">
          <Btn
            text="Join The Dao"
            linkTo="https://rinkeby.aragon.org/#/0x13ab94f2cb92A395D8dD73638c74d27Ae397868B/"
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
