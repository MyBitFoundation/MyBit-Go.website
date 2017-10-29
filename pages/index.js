import React from 'react'
import stylesheet from 'styles/main.scss'

// import ian from '../static/team/ian/ian.png'
// import ian2x from '../static/team/ian/ian@2x.png'
// import ian3x from '../static/team/ian/ian@3x.png'

import { default as Header } from '../components/header'
import { default as Hero } from '../components/hero'
import { default as Section } from '../components/section'
import { default as Card } from '../components/card'
import { default as Wrapper } from '../components/layout/wrapper'

export default () => (
  <div className="App">
    <Wrapper>
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
      />
    </Wrapper>
  </div>
)
