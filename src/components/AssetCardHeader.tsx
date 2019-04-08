import React from 'react'
import styled from 'styled-components'

import locationIcon from '@images/icon-location-blue.svg'
import dateIcon from '@images/icon-funding-blue.svg'
import investorsIcon from '@images/icon-investors-blue.svg'
import Progress from 'antd/lib/progress'
import 'antd/lib/progress/style/css'
import { SPadding16, SPadding24 } from './SPadding'

export interface AssetCardHeaderProps {
  funded: string
  goal: string
  city: string
  country: string
  name: string
  dateString: string
  numInvestors: number
}

export class AssetCardHeader extends React.Component<AssetCardHeaderProps> {
  render() {
    return (
      <SBox>
        <SWrapper>
          <SName>{this.props.name}</SName>
          <SPadding16 />
          <SLocation>
            <img
              className="dib pr1"
              src={locationIcon}
              alt="location"
              width="24px"
              height="24px"
            />
            {this.props.city}, {this.props.country}
          </SLocation>
          <SPadding16 />
          <SFunding>
            <img
              className="dib pr1"
              src={dateIcon}
              alt="date"
              width="24px"
              height="24px"
            />
            Funding ends on{' '}
            <span style={{ fontWeight: 'bold' }}>{this.props.dateString}</span>
          </SFunding>
          <SPadding16 />
          <SFunding>
            <img
              className="dib pr1"
              src={investorsIcon}
              alt="investors"
              width="24px"
              height="24px"
            />
            <span style={{ fontWeight: 'bold' }}>
              {this.props.numInvestors}
            </span>{' '}
            investors
          </SFunding>
          <SPadding16 />
          <SFunding>
            <div className="flex flex-row justify-between">
              <div>
                Funded:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {this.props.funded} DAI
                </span>
              </div>
              <div className="dib tr">
                Goal:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {this.props.goal} DAI
                </span>
              </div>
            </div>
            <Progress
              percent={
                (parseInt(this.props.funded) / parseInt(this.props.goal)) * 100
              }
              showInfo={false}
            />
          </SFunding>
          <SPadding24 />
          <SButton>
            View Asset
          </SButton>
        </SWrapper>
      </SBox>
    )
  }
}

const SButton = styled.div.attrs({
  href: 'https://app.mybit.io',
  className: 'center tc'
})`
  color: #383838;
  border: 2px solid #1890ff;
  border-radius: 4px;
  box-sizing: border-box;
  width: 312px;
  height: 40px;
  font-weight: bold;
  font-family: roboto;
  line-height: 34px;
`

const SFunding = styled.div.attrs({})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6c6c6c;
`

const SLocation = styled.div.attrs({ className: 'black' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
`

const SWrapper = styled.div.attrs({
  className: 'pt2 ph3 pb3'
})``

const SName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;

  color: #000000;
`

const SBox = styled.div.attrs({ className: 'dn db-l' })`
  position: relative;
  width: 360px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 8px;
`
