import React from 'react'
import paragraphIcon from '../static/assets/paragraph_icon.png'
import stylesheet from './paragraph.scss'

export const Paragraph = () => {
  return (
    <div className="Paragraph">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <img className="Paragraph__image" src={paragraphIcon} />
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
