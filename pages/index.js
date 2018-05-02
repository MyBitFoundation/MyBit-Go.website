import React from 'react'
import stylesheet from 'styles/main'
import { Element, scroller } from 'react-scroll'

import { default as Header } from '../components/header'
import { default as Hero } from '../components/hero'
import { default as Offers } from '../components/offers'
import { default as Section } from '../components/section'
import { default as Card } from '../components/card'
import { default as Industries } from '../components/industries'
import { default as Roadmap } from '../components/roadmap'
import { default as Team } from '../components/team'
import { default as Partners } from '../components/partners'
import { default as News } from '../components/news'
import { default as Footer } from '../components/footer'

import { default as Wrapper } from '../components/layout/wrapper'
import { default as Layout } from '../components/layout/layout'

import MachineEra from '../static/svgs/platform/machine-era_platform.svg'
import FutureOfInvesting from '../static/svgs/platform/future-of-investing_platform.svg'
import MyBitToken from '../static/svgs/platform/mybit-token_platform.svg'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToSection = this.scrollToSection.bind(this)
  }
  scrollToSection(id) {
    scroller.scrollTo(id, {
      align: 'top',
      duration: 1000,
      smooth: true
    })
  }
  render() {
    return (
      <Layout>
        <div>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Wrapper isMain>
            <Header scrollToSection={this.scrollToSection} />
            <Hero />
          </Wrapper>
          <Wrapper isWhite>
            <Section title={'<b>MyBit</b> offers'} isWhite isLight />
            <Offers />
          </Wrapper>
          <Wrapper>
            <Element
              name="how it works"
              style={{ textAlign: 'center', width: '100%', display: 'block' }}
            >
              <Section
                ref={c => {
                  this['how it works'] = c
                }}
                title={'How it <b>works</b>'}
                isLight
              />
            </Element>
            <div
              style={{
                margin: '0 auto 50px auto',
                width: '100%'
              }}
            >
              <div className="player">
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/VF6QSc0tQoY"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </Wrapper>
          <Wrapper isGray>
            <Element
              name="about"
              style={{ textAlign: 'center', width: '100%', display: 'block' }}
            >
              <Section
                ref={c => {
                  this.about = c
                }}
                title={'The <b>MyBit</b> Platform'}
                isWhite
                isLight
              />
            </Element>
            <Card
              title={'Welcome to the <b>Machine Era</b>'}
              paragraph={`
              MyBit’s automated revenue distribution system makes it cheap,
              easy and trustless for people to receive their share of revenue.
              As tech grows in dollar cost efficiency so will the rate of return
              opportunities for investors.
              `}
              image={{ el: MachineEra, id: 'machine-era' }}
              isBorderless
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
              isBorderless
            />
            <Card
              title={'<b>MyBit</b> token'}
              paragraph={`
              Users locking in their MyBit tokens, get paid a portion of the
              2% network transaction fees from asset funding. To learn more view
              our <a class='Card__paragraph-link' href='https://www.youtube.com/watch?v=HuVDWPEvJSE' target='_blank' rel="noopener noreferrer">Token Utility video</a>.
              `}
              image={{ el: MyBitToken, id: 'mybit-token' }}
              isBorderless
            />
          </Wrapper>
          <Wrapper isWhite>
            <Section title={'<b>Industries</b>'} isWhite isLight />
            <Industries />
          </Wrapper>
          <Wrapper>
            <Element
              name="team"
              style={{ textAlign: 'center', width: '100%', display: 'block' }}
            >
              <Section
                ref={c => {
                  this.team = c
                }}
                title={'Meet the <b>team</b>'}
                isLight
              />
            </Element>
            <Team />
          </Wrapper>
          <Wrapper>
            <Element
              name="roadmap"
              style={{ textAlign: 'center', width: '100%', display: 'block' }}
            >
              <Section
                ref={c => {
                  this.roadmap = c
                }}
                title={'Roadmap'}
              />
            </Element>
            <Roadmap />
          </Wrapper>
          <Wrapper isWhite>
            <Section title={'Partners'} isWhite hasLessSpacing />
            <Partners />
          </Wrapper>
          <Wrapper isLight>
            <Section title={'In the <b>News</b>'} isLight />
            <News />
          </Wrapper>
          <Wrapper>
            <Footer />
          </Wrapper>
        </div>
      </Layout>
    )
  }
}
