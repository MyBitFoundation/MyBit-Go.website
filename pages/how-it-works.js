import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import classNames from 'classnames'
import stylesheetHowItWorks from 'styles/how-it-works.scss'
import { default as Layout } from '../components/layout/layout'
import { guide, desc } from '../components/constants/how-it-works'
import { Button } from '../components/button'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'
import Scroll from '../static/svgs/other/how-it-works-scroll1.svg'
import { testAlphaUrl } from '../components/constants'

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
  }

  handleEnter(index) {
    const animatedSteps = this.state.animatedSteps
    animatedSteps[index] = true
    this.setState({ animatedSteps })
  }

  render() {
    const { animatedSteps } = this.state
    const guideToRender = guide.map((step, index) => (
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
            <Header isLight={false} />
          </div>
          <div className="HowItWorks__guide">
            <div className="HowItWorks__guide-header">
              <h1 className="HowItWorks__guide-header-title">
                Start your Journey
              </h1>
              <div
                className="HowItWorks__guide-header-description"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
              <p className="HowItWorks__guide-header-keep-scrolling">
                Keep scrolling for a step by step walk through.
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
                Own your Future
              </h2>
              <p className="HowItWorks__guide-footer-description">
                Be one of the first to test the future of investing. Sign up for
                the Alpha today.
              </p>
              <div className="HowItWorks__btn-test-alpha-wrapper">
                <Button
                  label={'Test Alpha'}
                  url={testAlphaUrl}
                  className="HowItWorks__btn-test-alpha"
                  isLink
                  isCentered
                  newTab
                />
              </div>
            </div>
          </Waypoint>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}

export default HowItWorks
