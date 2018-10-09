import React from 'react'
import classNames from 'classnames'
import stylesheet from './background-video.scss'
import { VideoPlayer } from './video-player'


export const BackgroundVideo = ({ setVideoOpen, videoOpen, translator}) => {
  return (
    <div className="Background-video">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="Background-video__wrapper">
        <VideoPlayer
          setVideoOpen={setVideoOpen}
          videoOpen={videoOpen}
          translator={translator}
        />

        <video
          loop
          autoPlay="autoplay"
          muted
          className={classNames({
            'Background-video__image': true,
            'Background-video__image--is-video-open': videoOpen,
          })}
        >
          <source src={'../static/assets/video2.webm'} type="video/webm" />
          <source src={'../static/assets/video2.mp4'} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
