import React from 'react'
import { action } from '@storybook/addon-actions'

import stylesheet from 'styles/main.scss'
import buttonStyleSheet from '../components/button.scss'
import eventStyleSheet from '../components/events.scss'

import { default as Layout } from '../components/layout/layout'

import { eventDesc } from '../components/constants'
import { Highlights } from '../components/highlights'
import { Header } from '../components/header'
import { MediaCTA } from '../components/media-cta'
import { Button } from '../components/button'
import { IconList } from '../components/icon'
import { MyBitFooter } from '../components/footer/footer'
import { Events } from '../components/events'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div
            className="grid__container"
            style={{
              height: '273px'
            }}
          >
            <Header isLight={false} />
          </div>
          <div>
            <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
            <MediaCTA
              title="Attend a meetup"
              content={`<p>MyBit believes in the concept of co-creation. This means that our community a cornerstone within our ecosystem. Community members guide MyBit’s development with their advice, dedication and active participation in all aspects of the project. Join our community and get involved in our shared endeavour to lead the transition to the automated era.</p>`}
              icon="community"
              isLeft
            />
            ))
          </div>
          <div
            style={{
              marginTop: '110px'
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
            <MediaCTA
              title="Join the community"
              content={`<p>Our digital HQ is located on Discord.  Here you will find everything you want to know about MyBit,
                  IoT, and other related topics. Become a member of our great community today.</p>`}
              icon="discord"
              isRight
              isDark
              button={
                <Button label="Join here" onClick={action('button-click')} />
              }
            />
          </div>

          <div
            style={{
              marginTop: '110px'
            }}
          >
            <MediaCTA
              title="Attend a meetup"
              content={`MyBit supporters spawn across nearly every city, in every country which provides a vibrant network of meetups globally. Meet like minded people near you whilst having a drink and a laugh. Nothing fancy, just some great people, gathered to talk about great things.`}
              icon="community"
              isLeft
              button={[
                <Button
                  key="buttonA"
                  label="Attend a meetup"
                  onClick={action('button-click')}
                />,
                <Button
                  key="buttonB"
                  label="Host a meetup"
                  onClick={action('button-click')}
                />
              ]}
            />
          </div>
          <div
            className="grid__container"
            style={{ width: '100%', margin: 'auto', marginTop: '110px' }}
          >
            <Highlights
              highlights={[
                {
                  title: 'Upcoming Events',
                  content:
                    'The MyBit team often attends or hosts major events. These events are fantastic opportunities to bombard them with questions, gain more insights about the project or to simply have a drink with the team. [Blockchain Expo] (Amsterdam, June 27-28)</p>',
                  isLight: true,
                  isCentered: true,
                  isTransparent: true,
                  isFullWidth: true
                }
              ]}
            />
          </div>
          <div style={{ width: '100%' }}>
            <style dangerouslySetInnerHTML={{ __html: eventStyleSheet }} />
            <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
            <Events events={eventDesc} />
          </div>
          <div
            className="grid__container"
            style={{ width: '100%', margin: 'auto', marginTop: '165px' }}
          >
            <MediaCTA
              title="MyBit merchandise"
              content={`<p style={text-align:centered}>Want to rock some MyBit gear? Head over to Redbubble to check out our official products.`}
              button={
                <Button label="Go to store" onClick={action('button-click')} />
              }
              icon="merchandice"
              isRight
            />
          </div>
          <div
            className="grid__container"
            style={{ width: '100%', margin: 'auto', marginTop: '110px' }}
          >
            <Highlights
              highlights={[
                {
                  title: 'Join our community',
                  content:
                    'To never miss an important announcement or to just stay up-to-date with the latest news, follow us on our socials:',
                  isLight: true,
                  isCentered: true,
                  isTransparent: true,
                  isFullWidth: true
                }
              ]}
            />
          </div>
          <div>
            <IconList />
          </div>
          <div
            className="grid__container"
            style={{ marginTop: '134px', margin: 'auto' }}
          >
            <MyBitFooter />
          </div>
        </div>
      </Layout>
    )
  }
}
