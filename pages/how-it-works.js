import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import { translate } from 'react-i18next'

import classNames from 'classnames'
import stylesheetHowItWorks from 'styles/how-it-works.scss'
import { default as Layout } from '../components/layout/layout'
import { guide, desc } from '../components/constants/how-it-works'
import { Button } from '../components/button'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'
import Scroll from '../static/svgs/other/how-it-works-scroll1.svg'
import { testAlphaUrl } from '../components/constants'
import i18n from '../i18n'

class HowItWorks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animatedSteps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }

    this.handleEnter = this.handleEnter.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  handleEnter(index) {
    const animatedSteps = this.state.animatedSteps
    animatedSteps[index] = true
    this.setState({ animatedSteps })
  }

  changeLanguage(language) {
    this.props.i18n.changeLanguage(language)
  }

  render() {
    const { animatedSteps } = this.state

    const guideToRender = guide(this.props.t).map((step, index) => (
      <Waypoint
        key={step.title}
        onEnter={() => this.handleEnter(index)}
        bottomOffset="300px"
      >
        <div
          key={step.title}
          className={classNames({
            'HowItWorks__guide-body-step': true,
            'HowItWorks__guide-body-step--is-visible': animatedSteps[index],
            'HowItWorks__guide-body-step--is-left': index % 2 === 0,
            'HowItWorks__guide-svg-funding-ends':
              index === 4 && animatedSteps[4],
            'HowItWorks__guide-svg-funding-starts':
              index === 3 && animatedSteps[3],
            'HowItWorks__guide-svg-escrow': index === 2 && animatedSteps[2]
          })}
        >
          <div className="HowItWorks__guide-body-step-image">{step.image}</div>
          <div className="HowItWorks__guide-body-step-description-wrapper">
            <b className="HowItWorks__guide-body-step-title">{step.title}</b>
            <div
              className="HowItWorks__guide-body-step-description"
              dangerouslySetInnerHTML={{ __html: step.desc }}
            />
          </div>
        </div>
      </Waypoint>
    ))

    return (
      <Layout>
        <div className="HowItWorks">
          <style dangerouslySetInnerHTML={{ __html: stylesheetHowItWorks }} />
          <div className="HowItWorks__header">
            <Header
              isLight={false}
              translator={this.props.t}
              changeLanguage={this.changeLanguage}
              currentLanguage={this.props.i18n.language}
            />
          </div>
          <div className="HowItWorks__guide">
            <div className="HowItWorks__guide-header">
              <h1 className="HowItWorks__guide-header-title">
                {this.props.t('common:mybit_how_it_works-journey_title')}
              </h1>
              <div
                className="HowItWorks__guide-header-description"
                dangerouslySetInnerHTML={{ __html: desc(this.props.t) }}
              />
              <p className="HowItWorks__guide-header-keep-scrolling">
                {this.props.t('common:mybit_how_it_works-journey_three')}
              </p>
              <Scroll className="HowItWorks__guide-header-img-sroll" />
            </div>
            <div className="HowItWorks__guide-body">{guideToRender}</div>
          </div>
          <Waypoint
            key={'footer'}
            onEnter={() => this.handleEnter(8)}
            bottomOffset="250px"
          >
            <div
              className={classNames({
                'HowItWorks__guide-footer': true,
                'HowItWorks__guide-footer--is-visible': animatedSteps[8]
              })}
            >
              <h2 className="HowItWorks__guide-footer-header">
                {this.props.t('common:mybit_home_title')}
              </h2>
              <p className="HowItWorks__guide-footer-description">
                {this.props.t('common:mybit_how_it_works_be_first')}
              </p>
              <div className="HowItWorks__btn-test-alpha-wrapper">
                <Button
                  label={this.props.t('common:mybit_try_v2')}
                  url={testAlphaUrl}
                  className="HowItWorks__btn-test-alpha"
                  isLink
                  isCentered
                  newTab
                />
              </div>
            </div>
          </Waypoint>
          <MyBitFooter
            translator={this.props.t}
            currentLanguage={this.props.i18n.language}
          />
        </div>
      </Layout>
    )
  }
}

const ExtendedIndex = translate(['common'], {
  i18n,
  wait: process.browser
})(HowItWorks)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedIndex.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
  return {}
}

export default ExtendedIndex
