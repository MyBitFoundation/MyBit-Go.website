import React from 'react'
import stylesheet from 'styles/main.scss'
import Logo from '../svgs/logo-white.svg'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    Hello there <span>MyBit</span>
    <Logo />
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
