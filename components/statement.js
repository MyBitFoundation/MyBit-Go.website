import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Bit } from './bit'
import { Button } from './button'
import stylesheet from './statement.scss'
import * as StatementData from './constants/statement';

export const Statement = ({ title, paragraph, icon, link, centered, light }) => (
  <div
    className={
      classNames({
        'Statement': true,
        'Statement--is-centered': centered,
        'Statement--is-light': light,
        [icon]: icon
      })
    }
  >
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h2 className='Statement__title'>{ title }</h2>
    <div className='Statement__bit'>
      <Bit small />
    </div>
    <p className='Statement__paragraph'>{ paragraph }</p>
    {
      link &&
      (
        <div className='Statement__button'>
          <a
            href={link}
          >
            <Button
              isLight
              label="Learn more"
            />
          </a>
        </div>
      )
    }
  </div>
)

Statement.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  centered: PropTypes.bool,
  light: PropTypes.bool,
}

Statement.defaultProps = {
  centered: false,
  light: false,
  icon: null,
  link: null,
}

const EcosystemStatement = () => (<Statement {...StatementData.ecosystem} centered />)
const CommunityStatement = () => (<Statement {...StatementData.community} centered light />)
const ProductsStatement = () => (<Statement {...StatementData.products} centered light />)
const InvolvedStatement = () => (<Statement {...StatementData.involved} centered />)

const InvestorsStatement = () => (<Statement {...StatementData.investors} centered />)
const AssetStatement = () => (<Statement {...StatementData.asset} centered />)

const TokenStatement = () => (<Statement {...StatementData.token} centered light />)
const AccessStatement = () => (<Statement {...StatementData.access} centered light />)

export const LandingPageStatements = () => (
  <div className='Statements--is-landing-page'>
    <EcosystemStatement />
    <CommunityStatement />
    <ProductsStatement />
    <InvolvedStatement />
  </div>
)

export const LandingPageSecondaryStatements = () => (
  <div className='Statements--is-landing-page-secondary'>
    <InvestorsStatement />
    <AssetStatement />
  </div>
)

export const LandingPageTertiaryStatements = () => (
  <div className='Statements--is-landing-page-tertiary'>
    <TokenStatement />
    <AccessStatement />
  </div>
)


