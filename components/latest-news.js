import React from 'react'
import stylesheet from './latest-news.scss'
import { latestNews } from './constants';
import { Button } from './button'

export const LatestNews = () => (
  <article className="LatestNews">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="LatestNews__wrapper">
      {latestNews.map((val) => (
        <div key={val.title} className="LatestNews__element">
          <p className="LatestNews__element-title">{val.title}</p>
          <div className="LatestNews__element-content">
            <img src={val.imageSrc} />
          </div>
          <a
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label={val.buttonLabel} isLight isSecondary/>
          </a>
        </div>
      ))}
    </div>
  </article>
)
