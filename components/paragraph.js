import React from 'react'
import stylesheet from './paragraph.scss'
import { Bit } from './bit'

export const Paragraph = () => {
  return (
    <div className="Paragraph">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Bit />
      <b className="Paragraph__text-header">
        MyBit is the world’s most advanced IoT investment Ecosystem.
      </b>
      <p className="Paragraph__text">
        Powered by Ethereum, MyBit offers a faster, more secure and cost
        effective investing experience.
      </p>
    </div>
  )
}
