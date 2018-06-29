import React from 'react'
import classNames from 'classnames'
import stylesheet from './video-player.scss'

export const VideoPlayer = ({setVideoOpen, videoOpen}) => {
  return (

    <div 
      onClick={() => setVideoOpen(true)} 
      className={classNames({
	        'VideoPlayer': true,
	        'VideoPlayer--is-video-open': videoOpen,
	      })}
    >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <img className="VideoPlayer__button" src="../static/svgs/other/play-button.svg" />
      <img className="VideoPlayer__button-mobile" src="../static/svgs/other/play-button-mobile.svg" />
      <p className="VideoPlayer__text">Play Video</p>
      <p className="VideoPlayer__text VideoPlayer__text-mobile">Watch the Video</p>
    </div>
  )
}
