import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Bit } from './bit'
import stylesheet from './statement.scss'
import * as StatementData from './constants/statement';

export const Statement = ({ title, paragraph, centered, light }) => (
  <div
    className={
      classNames({
        'Statement': true,
        'Statement--is-centered': centered,
        'Statement--is-light': light,
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
  light: PropTypes.bool,
}

Statement.defaultProps = {
  centered: false,
  light: false,
}

const EcosystemStatement = () => (<Statement {...StatementData.ecosystem} centered />)
const CommunityStatement = () => (<Statement {...StatementData.community} centered light />)
const ProductsStatement = () => (<Statement {...StatementData.products} centered light />)
const InvolvedStatement = () => (<Statement {...StatementData.involved} centered />)

export const LandingPageStatements = () => (
  <div className='Statements--is-landing-page'>
    <EcosystemStatement />
    <CommunityStatement />
    <ProductsStatement />
    <InvolvedStatement />
  </div>
)

