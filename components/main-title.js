import React from 'react'
import stylesheet from './main-title.scss'

export const MainTitle = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <p className="MainTitle">Own your Future</p>
    </div>
  )
}
