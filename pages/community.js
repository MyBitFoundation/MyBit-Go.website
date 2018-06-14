import React from 'react'
import { action } from '@storybook/addon-actions'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheetCommunity from 'styles/community.scss'
import buttonStyleSheet from '../components/button.scss'

import { default as Layout } from '../components/layout/layout'
import { InvestorHighlight, Highlight } from '../components/highlights'
import { Header } from '../components/header'
import { MediaCTA } from '../components/media-cta'

import { Button } from '../components/button'
import { IconList } from '../components/icon'
import { MyBitFooter } from '../components/footer/footer'
import { eventDesc } from '../components/constants/'

export default class Index extends React.Component {
  render() {
    const eventsToRender = eventDesc.map(details => {
      const content = (
        <div className="Community__event">
          <p>{details.description}</p>
          <div className="Community__event-button-wrapper">
            {details.button ? details.button : null}
          </div>
        </div>
      )

      return (
        <InvestorHighlight
          key={details.title}
          content={content}
          title={details.title}
        />
      )
    })

    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <div className="Community">
            <style dangerouslySetInnerHTML={{ __html: stylesheetCommunity }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <Header isLight={false} />
            <div style={{ padding: '0px 5%' }}>
              <div
                className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last"
                style={{ marginTop: '50px' }}
              >
                <MediaCTA
                  title="MyBit Community"
                  content={`<p>MyBit believes in the concept of co-creation. This means that our community a cornerstone within our ecosystem. Community members guide MyBit’s development with their advice, dedication and active participation in all aspects of the project. Join our community and get involved in our shared endeavour to lead the transition to the automated era.</p>`}
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
                    <a
                      href="https://discord.gg/pfNkVkJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button isLight label="Join here" />
                    </a>
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
                    <a
                      key="https://www.facebook.com/pg/MyBitDApp/events/"
                      href="https://www.facebook.com/pg/MyBitDApp/events/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        key="buttonA"
                        label="Attend a meetup"
                        onClick={action('button-click')}
                      />
                    </a>,
                    <a
                      key="https://docs.google.com/forms/d/1SvnIbqAuVrwDPQka2f1C0FXFICcx93t67aQgN-Hbkuo/edit"
                      href="https://docs.google.com/forms/d/1SvnIbqAuVrwDPQka2f1C0FXFICcx93t67aQgN-Hbkuo/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        key="buttonB"
                        label="Host a meetup"
                        onClick={action('button-click')}
                      />
                    </a>
                  ]}
                />
              </div>

              <div
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
                      <a
                        href="https://www.redbubble.com/people/ethereum/works/31674781-mybit-t-shirt?asc=u&ref=recent-owner"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          label="Go to store"
                          onClick={action('button-click')}
                        />
                      </a>
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
              <div>
                <IconList />
              </div>
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
