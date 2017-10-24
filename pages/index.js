import React from 'react'
import stylesheet from 'styles/main.scss'
import Logo from '../svgs/logo-white.svg'

import ian from '../static/team/ian/ian.png'
import ian2x from '../static/team/ian/ian@2x.png'
import ian3x from '../static/team/ian/ian@3x.png'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    Hello there <span>MyBit</span>
    <Logo />
    <img src={ian} srcSet={`${ian2x} 2x, ${ian3x} 3x`} />
    <style jsx>
      {`
        /* this style only applies to the span within lexical scope */
        span {
          color: red;
        }
      `}
    </style>
  </div>
)
