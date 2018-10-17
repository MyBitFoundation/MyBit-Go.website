import React from 'react'
import classNames from 'classnames'
import stylesheet from './video-player.scss'

export const VideoPlayer = ({setVideoOpen, videoOpen, translator}) => {
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
      <p className="VideoPlayer__text">{translator('common:mybit_home_play_video')}</p>
      <p className="VideoPlayer__text VideoPlayer__text-mobile">{translator('common:mybit_home_watch_video')}</p>
    </div>
  )
}
