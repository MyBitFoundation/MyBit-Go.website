import React from 'react'
import stylesheet from 'styles/main.scss'

import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { Header } from '../components/header'
import Achievements from '../components/achievements'
import {
  highlights,
  teamDesc,
  achievements
} from '../components/constants/index'
import TeamMembers from '../components/team-members'
import { Button } from '../components/button'
import { MyBitFooter } from '../components/footer/footer'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            height: '273px'
          }}
        >
          <Header />
        </div>
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <Highlights highlights={highlights} />
        </div>
        <div
          style={{
            marginTop: '75px'
          }}
        />
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto' }}
        >
          <Highlights
            highlights={[
              {
                title: 'MyBit Team',
                isLight: true,
                isThin: true,
                isCentered: true,
                isTransparent: true
              }
            ]}
          />
        </div>
        <div
          style={{
            marginLeft: '350px',
            marginRight: '119px',
            marginTop: '-65px'
          }}
        >
          <TeamMembers team={teamDesc} />
        </div>
        <div
          style={{
            marginTop: '75px'
          }}
        >
          <Highlights
            highlights={[
              {
                title: 'What have we achieved so far?',
                isLight: true,
                isTransparent: true,
                isCentered: true,
                isFullWidth: true
              }
            ]}
          />
        </div>
        <div
          className="grid__container"
          style={{
            marginTop: '-50px',
            marginLeft: '150px'
          }}
        >
          <Achievements achievements={achievements} />
        </div>
        <div
          style={{
            marginTop: '45px',
            marginLeft: '895px'
          }}
        >
          <Button label="See Roadmap" class="Button" />
        </div>
        <div
          className="grid__container"
          style={{ marginTop: '100px', margin: 'auto' }}
        >
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
