import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { diamondHighlights } from '../components/constants'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Highlights highlights={diamondHighlights} isDiamond />
      </Layout>
    )
  }
}
