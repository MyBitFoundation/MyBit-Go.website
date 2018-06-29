import React from 'react'
import classNames from 'classnames'
import { Bit } from './bit'
import stylesheet from './hero-paragraph.scss'

export const SoonParagraph = () => {
  return (
    <div className="HeroParagraph">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="HeroParagraph__bit">
        <Bit />
      </div>
      <p className="HeroParagraph__text">
        <b className="HeroParagraph__text-header">
          We are still undergoing a minor migration to our website.
        </b>
      </p>
      <p className="HeroParagraph__text">
        In the meantime, you can <a rel="noopener noreferrer" target="_blank" className='Teaser__button' href='https://medium.com/mybit-dapp/before-you-begin-take-a-deep-breath-and-relax-3820e9c8ca03'>learn how to Swap your MyBit Tokens</a> or read <a rel="noopener noreferrer" target="_blank" className='Teaser__button' href='https://medium.com/mybit-dapp/as-we-are-on-the-brink-of-entering-mybits-new-era-we-have-a-very-important-announcement-to-make-a4cda1cd6956'>why we took that decision.</a>
      </p>
    </div>
  )
}

export const HeroParagraph = ({ videoOpen }) => {
  return (

    <div 
      className={classNames({
        'HeroParagraph': true,
        'HeroParagraph--is-video-open': videoOpen,
      })}
    >
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
        MyBit offers a fast, secure and cost-effective investing experience. All powered by Ethereum.
      </p>
    </div>
  )
}
