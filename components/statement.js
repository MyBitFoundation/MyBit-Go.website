import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Bit } from './bit'
import stylesheet from './statement.scss'

export const Statement = ({ title, paragraph, centered }) => (
  <div
    className={
      classNames({
        'Statement': true,
        'Statement--is-centered': centered
      })
    }
  >
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h2 className='Statement__title'>{ title }</h2>
    <div className='Statement__bit'>
      <Bit small />
    </div>
    <p className='Statement__paragraph'>{ paragraph }</p>
  </div>
)

Statement.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  centered: PropTypes.bool,
}

Statement.defaultProps = {
  centered: false,
}
