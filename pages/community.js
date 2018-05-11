import React from 'react'
import { action } from '@storybook/addon-actions'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/main.scss'
import stylesheetCommunity from 'styles/community.scss'
import buttonStyleSheet from '../components/button.scss'

import { default as Layout } from '../components/layout/layout'
import { InvestorHighlight, Highlights } from '../components/highlights'
import { Header } from '../components/header'
import { MediaCTA } from '../components/media-cta'

import Discord from '../static/svgs/other/discord-logo.svg'
import Users from '../static/assets/users.png'
import Merchandise from '../static/assets/merchandise.png'

import { Button } from '../components/button'
import { IconList } from '../components/icon'
import { MyBitFooter } from '../components/footer/footer'
import { eventDesc } from '../components/constants/community'

export default class Index extends React.Component {
  render() {
    const eventsToRender = eventDesc.map(details => {
      const content = (
        <div className="Community__event">
          <b>{details.description}</b>
          <Button isLight label="See more" onClick={action('button-click')} />
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
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetCommunity }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <Header isLight={false} />
            <div style={{ padding: '0px 5%' }}>
              <div className="grid-middle " style={{ marginTop: '50px' }}>
                <div
                  className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper"
                  style={{ position: 'relative' }}
                >
                  <img src={Users} className="Community__img-users" />
                </div>
                <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                  <MediaCTA
                    title="MyBit Community"
                    content={`MyBit believes in the concept of co-creation. This means that our community a cornerstone within our ecosystem. Community members guide MyBit’s development with their advice, dedication and active participation in all aspects of the project. Join our community and get involved in our shared endeavour to lead the transition to the automated era.`}
                    isLeft
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: '110px'
                }}
              >
                <div
                  className="grid-middle Community__media-join"
                  style={{
                    backgroundImage:
                      'linear-gradient(136deg, #001358, #125ac4)',
                    padding: '25px 0px'
                  }}
                >
                  <div className="col-9 col_sm-12">
                    <MediaCTA
                      title="Join the community"
                      content={`<p>Our digital HQ is located on Discord.  Here you will find everything you want to know about MyBit,
                          IoT, and other related topics. Become a member of our great community today.</p>`}
                      icon="discord"
                      isRight
                      isDark={false}
                      button={
                        <Button
                          isLight
                          label="Join here"
                          onClick={action('button-click')}
                        />
                      }
                    />
                  </div>
                  <div className="col-3" style={{ position: 'relative' }}>
                    <Discord
                      alt="Discord"
                      className="Community__media-image-discord"
                    />
                  </div>
                </div>
                <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
              </div>
              <div
                style={{
                  marginTop: '110px'
                }}
              >
                <div className="grid-middle">
                  <div
                    className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper"
                    style={{ position: 'relative' }}
                  >
                    <img src={Users} className="Community__img-users" />
                  </div>
                  <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                    <MediaCTA
                      title="Attend a meetup"
                      content={`MyBit supporters spawn across nearly every city, in every country which provides a vibrant network of meetups globally. Meet like minded people near you whilst having a drink and a laugh. Nothing fancy, just some great people, gathered to talk about great things.`}
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
                </div>
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
              <div className="Community__highlights grid-center">
                <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
                <style
                  dangerouslySetInnerHTML={{ __html: stylesheetCommunity }}
                />
                {eventsToRender}
              </div>
              <div className="grid-middle" style={{ marginTop: '110px' }}>
                <div className="col-8 col_sm-12">
                  <MediaCTA
                    title="MyBit merchandise"
                    content={`<p style={text-align:centered}>Want to rock some MyBit gear? Head over to Redbubble to check out our official products.`}
                    button={
                      <Button
                        label="Go to store"
                        onClick={action('button-click')}
                      />
                    }
                    isRight
                  />
                </div>
                <div className="col-4 col_sm-12 MediaCTA__image-wrapper">
                  <img
                    src={Merchandise}
                    className="Community__img-merchandise"
                  />
                </div>
              </div>
              <div
                className="grid__container Community__social-links"
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
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
