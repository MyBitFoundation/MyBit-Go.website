import React from 'react'
import stylesheet from './bit.scss'

export const Bit = () => {
  return (
    <div className="Bit">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </div>
  )
}
