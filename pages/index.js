import React from 'react'
import stylesheet from 'styles/main.scss'

import { default as Header } from '../components/header'
import { default as Hero } from '../components/hero'
import { default as Section } from '../components/section'
import { default as Card } from '../components/card'
import { default as Roadmap } from '../components/roadmap'
import { default as Team } from '../components/team'
import { default as Partners } from '../components/partners'
import { default as News } from '../components/news'
import { default as Footer } from '../components/footer'

import { default as Wrapper } from '../components/layout/wrapper'
import { default as Layout } from '../components/layout/layout'

import MachineEra from '../svgs/platform/machine-era_platform.svg'
import FutureOfInvesting from '../svgs/platform/future-of-investing_platform.svg'
import MyBitToken from '../svgs/platform/mybit-token_platform.svg'

export default () => (
  <Layout>
    <Wrapper isMain>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Header />
      <Hero />
    </Wrapper>
    <Wrapper isLight>
      <Section title={'The MyBit Platform'} />
      <Card
        title={'Welcome to the <b>Machine Era</b>'}
        paragraph={`
        MyBit’s automated revenue distribution system makes it cheap, 
        easy and trustless for people to receive their share of revenue, 
        as tech grows in dollar cost efficiency so will the rate of return 
        opportunities for investors.
        `}
        image={{ el: MachineEra, id: 'machine-era' }}
      />
      <Card
        title={'The <b>Future</b> of Investing'}
        paragraph={`
        The platform will provide a crowdfunding and revenue distribution
        management system that can take any amount of funds and convert it
        into a share of revenue generating IOT economy on a trustless,
        automatic and cryptographically secure network.
        `}
        image={{ el: FutureOfInvesting, id: 'future-of-investing' }}
        isLeft
      />
      <Card
        title={'<b>MyBit</b> token'}
        paragraph={`
        Users locking in thier MyBit tokens, get paid a portion of the 
        1% network transaction fees proportionate to your stake divided 
        by total supply of $MyB.
        `}
        image={{ el: MyBitToken, id: 'mybit-token' }}
      />
    </Wrapper>
    <Wrapper>
      <Section title={'How it <b>works</b>'} isLight />
      <img
        style={{
          margin: '0 auto 50px auto',
          height: 'auto',
          maxWidth: '100%',
          objectFit: 'contain'
        }}
        src="./static/mybit.gif"
      />
    </Wrapper>
    <Wrapper isLight>
      <Section title={'Roadmap'} />
      <Roadmap />
    </Wrapper>
    <Wrapper>
      <Section title={'Meet the <b>team</b>'} isLight />
      <Team />
    </Wrapper>
    <Wrapper isWhite>
      <Section title={'Partners'} isWhite />
      <Partners />
    </Wrapper>
    <Wrapper isLight>
      <Section title={'In the <b>News</b>'} isLight />
      <News />
    </Wrapper>
    <Wrapper>
      <Footer />
    </Wrapper>
  </Layout>
)
