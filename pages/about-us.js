import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'
import { Highlights } from '../components/highlights'
import Achievements from '../components/achievements'
import {
  highlights,
  teamDesc,
  achievements
} from '../components/constants/index'
import TeamMembers from '../components/team-members'
import { SecondaryPageContainer } from '../components/layout/container'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <SecondaryPageContainer>
          <div
            style={{
              marginTop: '75px'
            }}
          >
            <Highlights highlights={highlights} isRectangle />
          </div>
          <div
            style={{
              marginTop: '75px'
            }}
          />
          <div className="grid__container">
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
          <div>
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
          <div className="grid__container Achievements__container">
            <Achievements achievements={achievements} />
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}
