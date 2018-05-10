import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './paragraph.scss'


export const Paragraph = ({ contents }) => {
  return (
    <div className="Paragraph">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <p className="Paragraph__text">
        {contents}
      </p>
    </div>
  )
}

Paragraph.propTypes = {
  contents: PropTypes.string.isRequired
}
