import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from 'styles/main.scss'
import { Element, scroller } from 'react-scroll'
import { translate } from 'react-i18next'

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

import MachineEra from '../svgs/platform/machine-era_platform.svg'
import FutureOfInvesting from '../svgs/platform/future-of-investing_platform.svg'
import MyBitToken from '../svgs/platform/mybit-token_platform.svg'

import i18n from '../i18n'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToSection = this.scrollToSection.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
    this.state = { language: i18n.initialLanguage }
  }
  scrollToSection(id) {
    scroller.scrollTo(id, {
      align: 'top',
      duration: 1000,
      smooth: true
    })
  }
  changeLanguage(language) {
    this.props.i18n.changeLanguage(language)
  }
  render() {
    return (
      <Layout>
        <div>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Wrapper isMain>
            <Header
              scrollToSection={this.scrollToSection}
              changeLanguage={this.changeLanguage}
            />
            <Hero translator={this.props.t} />
          </Wrapper>
          <Wrapper isWhite>
            <Section
              title={this.props.t('common:mybit_offers_title')}
              isWhite
              isLight
            />
            <Offers translator={this.props.t} />
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
                title={this.props.t('common:mybit_how_it_works_title')}
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
                title={this.props.t('common:mybit_platform_title')}
                isWhite
                isLight
              />
            </Element>
            <Card
              title={this.props.t('common:mybit_platform_subtitle_1')}
              paragraph={this.props.t('common:mybit_platform_description_1')}
              image={{ el: MachineEra, id: 'machine-era' }}
              isBorderless
            />
            <Card
              title={this.props.t('common:mybit_platform_subtitle_2')}
              paragraph={this.props.t('common:mybit_platform_description_2')}
              image={{ el: FutureOfInvesting, id: 'future-of-investing' }}
              isLeft
              isBorderless
            />
            <Card
              title={this.props.t('common:mybit_platform_subtitle_3')}
              paragraph={this.props.t('common:mybit_platform_description_3')}
              image={{ el: MyBitToken, id: 'mybit-token' }}
              isBorderless
            />
          </Wrapper>
          <Wrapper isWhite>
            <Section
              title={this.props.t('common:mybit_industries_title')}
              isWhite
              isLight
            />
            <Industries translator={this.props.t} />
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
                title={this.props.t('common:mybit_team_title')}
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
                title={this.props.t('common:mybit_roadmap_title')}
              />
            </Element>
            <Roadmap translator={this.props.t} />
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

Index.defaultProps = {
  i18n: {},
  t: () => {}
}

Index.propTypes = {
  i18n: PropTypes.object,
  t: PropTypes.function
}

const ExtendedIndex = translate(['home', 'common'], {
  i18n,
  wait: process.browser
})(Index)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedIndex.getInitialProps = async ({ req }) => {
  if (req && !process.browser)
    return i18n.getInitialProps(req, ['home', 'common'])
  return {}
}

export default ExtendedIndex
