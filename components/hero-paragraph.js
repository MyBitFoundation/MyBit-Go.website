import React from 'react'
import classNames from 'classnames'
import { Bit } from './bit'
import stylesheet from './hero-paragraph.scss'
import { Button } from './/button'
import { testAlphaUrl } from './constants'

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

export const HeroParagraph = ({ videoOpen, translator }) => {
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
          {translator('common:mybit_home_subtitle_one')}
        </b>
      </p>
      <p className="HeroParagraph__text">
        {translator('common:mybit_home_subtitle_two')}
      </p>

      <Button
        label={translator('common:mybit_try_v2')}
        url={testAlphaUrl}
        className="HeroParagraph__btn-test-alpha"
        isLink
        isCentered
        newTab
      />
    </div>
  )
}
