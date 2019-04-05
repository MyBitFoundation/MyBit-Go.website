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
                { text: 'DAO', linkTo: '/dao' },
                { text: 'Participate', linkTo: '/participate' }
              ]}
            />
          </nav>
          <SHeadline color="white">DAO</SHeadline>
          <SParagraphLead color="white">
            MyBit designs products that open up the world, creating tools that
            enable freedom and wealth generation for everyone. We believe that
            closed, centrally-controlled systems limit our potential as a
            society, and that truly transparent and open collaboration will
            power the future.
          </SParagraphLead>
        </SHeader>
        <SPadding128 />
        <SSubHeadline>MyBit Go is decentralised and autonomous</SSubHeadline>
        <SParagraphLead>
          This means that no single person, company, nor group owns nor controls
          MyBit Go. Instead it is maintained by a strong community of people
          from all different backgrounds and its rules are enforced by
          unchangeable computer code.
        </SParagraphLead>
        <SPadding48 />
        <div className="center tc">
          <img src={schemeDesktop} height="240px" className="dn" />
          <img src={schemeMobile} height="874px" className="dn-ns" />
        </div>

        <SPadding48 />
        <AboutCardsAlt>
          <AboutCard
            title="Anyone can propose an idea"
            paragraph="If someone has a vision for a new feature, change to the business model, or anything at all related to MyBit Go, they can propose it to the community and a vote to approve or reject the proposal is opened."
          />
          <div className="dn-ns pb5" />
          <AboutCard
            title="Owner of 1 MYB is eligible to vote"
            paragraph="Votes must meet two criteria to be approved. They must achieve consensus, which means a majority, or greater than 50% of the community agrees to it, and voter turnout must reach a minimum amount (referred to as quorum)."
          />
        </AboutCardsAlt>
        <SPadding128 />
        <div className="tc center">
          <img src={voteGraphic} height="225px" />
        </div>
        <SPadding16 />
        <SSubHeadlineSmall>What is quorum?</SSubHeadlineSmall>
        <SPadding16 />
        <SParagraphLead>
          It is not reasonable to expect that 100% of eligible voters will
          participate for each vote. But there needs to be a minimum requirement
          for participation to preserve the security of the network so one
          person or a small group cannot initiate a vote and pass it through if
          no one else votes. This is where quorum comes into effect. For example
          25% of eligible voters may be required to vote for a proposal to
          officially be approved.
        </SParagraphLead>
        <IconAboutCards>
          <QuorumCard
            title="Dynamic Quorum"
            paragraph="To avoid any stagnation if voter participation is low for a specific proposal, we have introduced a concept called dynamic quorum. This means that the required minimum voter participation will adjust to ensure all proposals are completed in a timely manner. You can read more about that here."
          />
          <QuorumCard
            title="Revenue returned to the community"
            paragraph="Since MyBit Go is not owned by any company, all revenue goes back into the community. The 3% fee assessed to the funding of every new asset is distributed into the MyBit Go DAO to be reallocated towards maintaining and growing the ecosystem and can be applied for anything from development, to marketing, to business uses."
          />
        </IconAboutCards>
        <SPadding128 />
        <SSubHeadline>MyBit Go is an unstoppable ecosystem</SSubHeadline>
        <SParagraphLead>
          MyBit allows anyone to finance and build blockchain-powered products
          that will revolutionize and disrupt transaction-based industries.
        </SParagraphLead>
        <SPadding24 />
        <div className="center tc">
          <Btn
            text="Try Go DAO"
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
