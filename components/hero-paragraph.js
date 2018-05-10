import React from 'react'
import { Bit } from './bit'
import stylesheet from './hero-paragraph.scss'

export const HeroParagraph = () => {
  return (
    <div className="HeroParagraph">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="HeroParagraph__bit">
        <Bit />
      </div>
      <p className="HeroParagraph__text">
        <b className="HeroParagraph__text-header">
          MyBit is the world’s most advanced IoT investment Ecosystem.
        </b>
      </p>
      <p className="HeroParagraph__text">
        Powered by Ethereum, MyBit offers a faster, more secure and cost
        effective investing experience.
      </p>
    </div>
  )
}
