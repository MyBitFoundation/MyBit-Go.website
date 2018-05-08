import React from 'react'
import Gradient from '../static/assets/top_left_gradient.png';
import stylesheet from './hero-banner.scss'
import {BackgroundVideo} from './background-video'
import {MainTitle} from './main-title'
import {Paragraph} from './paragraph';

export const HeroBanner = () => {
  return (
    <div className="HeroBanner">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="HeroBanner__img-wrapper">
        <img className="HeroBanner__img-gradient" src={Gradient}/>
      </div>
      <div className="HeroBanner__text-wrapper">
        <MainTitle />
        <Paragraph />
      </div>
      <BackgroundVideo />
    </div>
  )
}
