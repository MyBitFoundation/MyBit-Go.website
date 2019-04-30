import React from 'react'
import DAOIcon from '@images/dao.svg'
import styled from 'styled-components'

const BannerDao = () => (
  <BannerDaoWrapper>
    <Img src={DAOIcon} />
    MyBit Go is now managed by the MyBit DAO
    <SButton
      href="https://medium.com/mybit-dapp/mybit-dao-tutorial-5b3bc093963b"
      target="_blank"
    >
      Join the DAO
    </SButton>
  </BannerDaoWrapper>
)

const BannerDaoWrapper = styled.div`
  height: 96px;
  background: #2E58DB;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 4px 20px rgba(0, 0, 0, 0.12);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media(min-width: 480px){
    flex-direction: row;
    height: 48px;
    justify-content: center;
  }
`

const Img = styled.img`
  display: none;
  margin-right: 10px;
  @media(min-width: 480px){
    display: block;
  }
`

const SButton = styled.a.attrs({
  className: 'link no_underline tc b pa1 bhover'
})`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-family: Gilroy;
  line-height: 14px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 10px;
  color: #1890ff;
  cursor: pointer;
`

export default BannerDao;
