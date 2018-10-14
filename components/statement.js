import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Bit } from './bit'
import { Button } from './button'
import stylesheet from './statement.scss'
import * as StatementData from './constants/statement';

export const Statement = ({ title, paragraph, icon, link, centered, light, label = "common:mybit_learn_more", buttonClassName = "" , translator}) => (
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
            label={translator(label)}
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

const EcosystemStatement = ({translator}) => (<Statement {...StatementData.ecosystem(translator)} centered />)
const CommunityStatement = () => (<Statement {...StatementData.community} centered light />)
const ProductsStatement = () => (<Statement {...StatementData.products} centered light />)
const InvolvedStatement = () => (<Statement {...StatementData.involved} centered />)
const HowItWorksStatement = ({translator, currentLanguage}) => (<Statement {...StatementData.howItWorks(translator, currentLanguage)} translator={translator} centered />)

const InvestorsStatement = ({ translator }) => (
  <Statement {...StatementData.investors(translator)} centered light/>
)
const AssetStatement = ({ translator }) => (<Statement {...StatementData.asset(translator)} centered light/>)

const TokenStatement = ({translator, currentLanguage}) => (<Statement {...StatementData.token(translator, currentLanguage)} translator={translator} centered light />)
const StakingStatement = ({translator}) => (<Statement {...StatementData.staking(translator)} centered light />)
const AccessStatement = ({translator}) => (<Statement {...StatementData.access(translator)} centered light />)
const LockingStatement = ({translator}) => (<Statement {...StatementData.locking(translator)} centered light />)

export const LandingPageStatements = ({translator, currentLanguage}) => (
  <div>
    <EcosystemStatement
      translator={translator}
    />
    <div className='Statements--is-landing-page'>
      <InvestorsStatement
        translator={translator}
      />
      <AssetStatement
        translator={translator}
      />
    </div>
    <HowItWorksStatement
      translator={translator}
      currentLanguage={currentLanguage}
    />
  </div>
)

export const LandingPageSecondaryStatements = ({translator}) => (
  <div className='Statements--is-landing-page-secondary'>
    <InvestorsStatement
      translator={translator}
    />
    <AssetStatement
      translator={translator}
    />
  </div>
)

export const LandingPageTertiaryStatements = ({translator, currentLanguage}) => (
  <div className='Statements--is-landing-page-tertiary'>
    <TokenStatement
      translator={translator}
      currentLanguage={currentLanguage}
    />
    <StakingStatement
      translator={translator}
    />
    <AccessStatement
      translator={translator}
    />
    <LockingStatement
      translator={translator}
    />
  </div>
)


