import React from 'react'
import stylesheet from 'styles/main.scss'

// import ian from '../static/team/ian/ian.png'
// import ian2x from '../static/team/ian/ian@2x.png'
// import ian3x from '../static/team/ian/ian@3x.png'

import { default as Header } from '../components/header'
import { default as Wrapper } from '../components/layout/wrapper'

export default () => (
  <Wrapper>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header />
    {/* <img src={ian} srcSet={`${ian2x} 2x, ${ian3x} 3x`} /> */}
  </Wrapper>
)
