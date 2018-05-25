import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './main-title.scss'

export const MainTitle = ({ title = 'Own your Future' }) => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <p className="MainTitle">{ title }</p>
    </div>
  )
}

MainTitle.propTypes = {
  title: PropTypes.string
}

MainTitle.defaultProps = {
  title: 'Own your Future'
}
