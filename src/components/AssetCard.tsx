import React from 'react'
import styled from 'styled-components'
import locationIcon from '@images/icon-location.svg'
import dateIcon from '@images/icon-date.svg'
import investorsIcon from '@images/icon-investors.svg'
import Progress from 'antd/lib/progress'
import 'antd/lib/progress/style/css'

export interface AssetCardProps {
  funded: string
  goal: string
  city: string
  country: string
  name: string
  backgroundImage: string
  dateString: string
  numInvestors: number
}

export default class AssetCard extends React.Component<AssetCardProps> {
  render() {
    return (
      <SWrapper imageUrl={this.props.backgroundImage}>
        <SInner>
          <SDemo>DEMO</SDemo>
          <SAssetName>{this.props.name}</SAssetName>
          <SLocationIcon />
          <SLocationText>
            {this.props.city}, {this.props.country}
          </SLocationText>
          <SDateIcon />
          <SInvestorsIcon />
          <SDateText>
            Funding ends on <SBold>{this.props.dateString}</SBold>
          </SDateText>
          <SInvestorsText>
            <SBold>{this.props.numInvestors}</SBold>
            {this.props.numInvestors === 1 ? ' investor' : ' investors'}
          </SInvestorsText>
          <SFunded>
            Funded: <SBold>{this.props.funded} DAI</SBold>
          </SFunded>
          <SGoal>
            Goal: <SBold>{this.props.goal} DAI</SBold>
          </SGoal>
          <SProgress
            percent={
              (parseInt(this.props.funded) / parseInt(this.props.goal)) * 100
            }
            showInfo={false}
          />
          <Btn href="https://app.mybit.io">
            <BtnText>View Asset</BtnText>
          </Btn>
        </SInner>
      </SWrapper>
    )
  }
}

const Btn = styled.a.attrs({
  className: 'tc center'
})`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  position: absolute;
  left: 6.67%;
  right: 6.67%;
  top: 86.03%;
  bottom: 5.24%;
  width: 364px;
  height: 46.67px;
`

const BtnText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 46px;
  text-align: center;

  color: #383838;
`

const SProgress = styled(Progress).attrs({ className: 'center tc' })`
  position: absolute;
  padding-top: 390px;
  padding-bottom: 0px;
  padding-left: 4px;
  max-width: 368px;
`

const SFunded = styled.div`
  position: absolute;
  left: 6.67%;
  right: 45.28%;
  top: 72.43%;
  bottom: 23.08%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6c6c6c;
`

const SGoal = styled.div`
  position: absolute;
  left: 57.22%;
  right: 6.94%;
  top: 72.43%;
  bottom: 23.08%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #6c6c6c;
`

const SDateText = styled.div`
  position: absolute;
  left: 15.56%;
  right: 6.94%;
  top: 54.77%;
  bottom: 40.74%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #6c6c6c;
`

const SInvestorsText = styled.div`
  position: absolute;
  left: 15.56%;
  right: 6.94%;
  top: 63.69%;
  bottom: 31.82%;
  color: #6c6c6c;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

const SBold = styled.span.attrs({ className: 'black' })`
  font-weight: bold;
`

const SDateIcon = styled.img.attrs({
  src: dateIcon
})`
  position: absolute;
  left: 6.67%;
  right: 86.67%;
  top: 54.59%;
  bottom: 40.17%;
`
const SInvestorsIcon = styled.img.attrs({
  src: investorsIcon
})`
  position: absolute;
  left: 6.67%;
  right: 86.67%;
  top: 63.32%;
  bottom: 31.44%;
`

const SLocationIcon = styled.img.attrs({
  src: locationIcon
})`
  position: absolute;
  left: 6.67%;
  right: 90%;
  top: 41.92%;
  bottom: 54.15%;
`
const SLocationText = styled.div`
  position: absolute;
  left: 12.22%;
  right: 6.94%;
  top: 42.3%;
  bottom: 54.52%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;

  color: #ffffff;
`

const SDemo = styled.div`
  position: absolute;
  left: 80.56%;
  right: 4.44%;
  top: 3.49%;
  bottom: 90.39%;
  font-family: Roboto;
  font-style: normal;
  font-weight: lighter;
  font-size: 12px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
`

const SAssetName = styled.div`
  position: absolute;
  left: 6.39%;
  right: 6.67%;
  top: 34.93%;
  bottom: 59.83%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;

  color: #ffffff;
`

const SInner = styled.div.attrs({ className: 'pa3' })``

const SWrapper = styled.div.attrs({ className: 'carousel-item' })`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: url(${(props: { imageUrl: string }) => props.imageUrl}) no-repeat;
  background-size: 100% 50%;
  background-color: rgba(255, 255, 255, 255);
`
