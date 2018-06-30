import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Bit } from './bit'
import { Button } from './button'
import stylesheet from './statement.scss'
import * as StatementData from './constants/statement';

export const Statement = ({ title, paragraph, icon, link, centered, light, label = "Learn more", buttonClassName = "" }) => (
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
          <Button 
            label={label}
            url={link}
            isLight
            isLink
            isCentered
            className={buttonClassName}
          />
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
const HowItWorksStatement = () => (<Statement {...StatementData.howItWorks} centered />)

const InvestorsStatement = () => (<Statement {...StatementData.investors} centered light/>)
const AssetStatement = () => (<Statement {...StatementData.asset} centered light/>)

const TokenStatement = () => (<Statement {...StatementData.token} centered light />)
const StakingStatement = () => (<Statement {...StatementData.staking} centered light />)
const AccessStatement = () => (<Statement {...StatementData.access} centered light />)

export const LandingPageStatements = () => (
  <div>
    <EcosystemStatement />
    <div className='Statements--is-landing-page'>
      <CommunityStatement />
      <ProductsStatement />
    </div>
    <HowItWorksStatement />
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
    <StakingStatement />
    <AccessStatement />
  </div>
)


