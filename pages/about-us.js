import React from 'react'
import stylesheet from 'styles/main.scss'

import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { Header } from '../components/header'
import { highlights, teamDesc } from '../components/constants/index'
import TeamMembers from '../components/team-members'

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
          className="grid__container"
          style={{
            height: '419px'
          }}
        >
          <Highlights highlights={highlights} />
        </div>
        <div
          className="grid__container"
          style={{
            height: '498px'
          }}
        >
          <Highlights
            highlights={[
              {
                title: 'MyBit Team',
                isDiamond: true,
                isLight: true,
                isTransparent: true,
                isBig: true,
                style: { margin: 'auto' }
              }
            ]}
          />
        </div>
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto' }}
        >
          <TeamMembers team={teamDesc} />
        </div>
      </Layout>
    )
  }
}
