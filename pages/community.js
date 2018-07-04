import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'

import animateScrollTo from 'animated-scroll-to'
import classNames from 'classnames'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheetCommunity from 'styles/community.scss'
import buttonStyleSheet from '../components/button.scss'
import hightlightsStylesheet from '../components/highlights.scss'
import { default as Layout } from '../components/layout/layout'
import { Highlight } from '../components/highlights'
import { MediaCTA } from '../components/media-cta'

import { Button } from '../components/button'
import { IconList } from '../components/icon'
import { eventDesc } from '../components/constants/'
import { SecondaryPageContainer } from '../components/layout/container'

class Community extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: null
    }
    this.scrollToEvents = this.scrollToEvents.bind(this)
  }

  componentDidMount() {
    const href = window.parent.location.href
    if (href.indexOf('#events') !== -1) {
      this.scrollToEvents()
    }
  }

  scrollToEvents() {
    const el = this.el
    animateScrollTo(0, {
      minDuration: 750,
      horizontal: false,
      offset: el.offsetTop
    })
  }

  setActiveEvent(event) {
    this.setState({ event })
  }

  render() {
    const { event } = this.state

    const eventsToRender = eventDesc.map(details => {
      return (
        <div
          key={details.title}
          className={classNames({
            Community__event: true,
            'Community__event--has-description': details.description,
            'Community__event--is-active': details.title === event,
            'Community__event--has-expired': details.expired
          })}
          onClick={() =>
            this.setActiveEvent(details.description ? details.title : null)
          }
        >
          <p className="Community__event-title">{details.title}</p>
          <p className="Community__event-location">{details.location}</p>
          <div className="Community__event-button-wrapper">
            {details.button ? details.button : null}
          </div>
          <p className="Community__event-description">{details.description}</p>
        </div>
      )
    })

    return (
      <Layout>
        <SecondaryPageContainer>
          <div className="Community">
            <style dangerouslySetInnerHTML={{ __html: stylesheetCommunity }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <div style={{ padding: '0px 5%', paddingTop: '50px' }}>
              <div
                className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last"
                style={{ marginTop: '50px' }}
              >
                <MediaCTA
                  title="MyBit Community"
                  content={`<p>MyBit believes in the concept of co-creation. Community members guide our development with their advice, dedication and active participation in all aspects of the project. Join our community and get involved in our shared mission: to lead the way in the automated era.</p>`}
                  isLeft
                  icon="community"
                />
              </div>

              <div className="col-9 col_sm-12" style={{ marginTop: '110px' }}>
                <MediaCTA
                  title="Join the Community"
                  content={`<p>Our digital HQ is located on Discord. Here you will find everything you want to know about MyBit,
                    IoT, and other related topics. Become a member of our great community today.</p>`}
                  icon="discord"
                  isRight
                  isDark
                  button={
                    <Button
                      label={'Join here'}
                      url={'https://discord.gg/pfNkVkJ'}
                      isLight
                      isLink
                    />
                  }
                />
              </div>

              <div className="col-9 col_sm-12" style={{ marginTop: '110px' }}>
                <MediaCTA
                  title="Attend a Meetup"
                  content={`<p>MyBit supporters spawn across nearly every city, in every country which provides a vibrant network of meetups globally. Meet like minded people near you whilst having a drink and a laugh. Nothing fancy, just some great people, gathered to talk about great things.</p>`}
                  isLeft
                  icon="community"
                  button={[
                    <Button
                      key="https://www.facebook.com/pg/MyBitDApp/events/"
                      label={'Attend a Meetup'}
                      url={'https://www.facebook.com/pg/MyBitDApp/events/'}
                      onClick={action('button-click')}
                      isLink
                      newTab
                    />,
                    <Button
                      key="https://mybit.typeform.com/to/DdpZny"
                      label={'Host a Meetup'}
                      url={'https://mybit.typeform.com/to/DdpZny'}
                      onClick={action('button-click')}
                      isLink
                      newTab
                    />
                  ]}
                />
              </div>

              <div
                ref={el => {
                  this.el = el
                }}
                className="grid__container"
                style={{ width: '100%', margin: 'auto', marginTop: '110px' }}
              >
                <Highlight
                  title={'Upcoming Events'}
                  content={
                    '<p>The MyBit team often attends or hosts major events. These events are fantastic opportunities to bombard them with questions, gain more insights about the project or to simply have a drink with the team. [Blockchain Expo] (Amsterdam, June 27-28)</p>'
                  }
                  isLight
                  isCentered
                  isTransparent
                  isFullWidth
                />
                <style
                  dangerouslySetInnerHTML={{ __html: hightlightsStylesheet }}
                />
              </div>
              <div className="Community__highlights grid-center">
                <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
                <style
                  dangerouslySetInnerHTML={{ __html: stylesheetCommunity }}
                />
                {eventsToRender}
              </div>

              <div style={{ marginTop: '110px' }}>
                <div className="col-8 col_sm-12">
                  <MediaCTA
                    title="MyBit Merchandise"
                    content={`<p style={text-align:centered}>Want to rock some MyBit gear? Head over to Redbubble to check out our official products.`}
                    button={
                      <Button
                        label={'Go to store'}
                        url={
                          'https://www.redbubble.com/people/ethereum/works/31674781-mybit-t-shirt?asc=u&ref=recent-owner'
                        }
                        onClick={action('button-click')}
                        isLink
                        newTab
                      />
                    }
                    isRight
                    icon="merchandise"
                  />
                </div>
              </div>
              <div
                className="grid__container Community__social-links"
                style={{ width: '100%', margin: 'auto', marginTop: '110px' }}
              >
                <Highlight
                  title="Join our Community"
                  content={
                    'To never miss an important announcement or to just stay up-to-date with the latest news, follow us on our socials:'
                  }
                  isLight
                  isCentered
                  isTransparent
                  isFullWidth
                />
              </div>
              <div style={{ marginBottom: '100px' }}>
                <IconList />
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}

export default Community
