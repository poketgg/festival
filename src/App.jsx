import { useState, useEffect } from 'react'
import styled from "styled-components";
import './App.css';
import payQRSrc from "./assets/img/payQR.jpg";
import menuOneSrc from "./assets/img/image-removebg-preview.png";
import menuTwoSrc from "./assets/img/ice.jpg";
import menuThreeSrc from "./assets/img/fruit.jpg";
import menuFourSrc from "./assets/img/fruit_ice.png";


const Bodyblackout = styled.div`
  width: 110%;
  height: 110%;
  top: -10px;
  left: -10px;
  position: fixed;
  z-index: 1010;
  background-color: rgba(0,0,0,0.65);
  overflow: hidden;
  display: flex;
  justify-content: center;
  
`;

const Header = styled.div`
  background-color: rgb(255, 255, 255);
  font-weight: 900;
  font-size: 100%;
  height: 5%;
  text-align: center; 
  padding-top: 2.5%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 25px;
`
const Board = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  display: grid;
  align-items: center;
  display-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 100%;
  height: 60%;
  margin-bottom: 1%;
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Menu = styled.div`
  background-color: white;
  width: 70%;
  aspect-ratio: 1/1.25;
  margin: 1% auto;
  float: left;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border: 2px solid rgb(184, 184, 184);
`
const MenuImg = styled.img`
  background-color: white;
  width: 40%;
  aspect-ratio: 1/1;

  margin: 5% auto 5% auto;

  border: 1px solid rgb(184, 184, 184);
`
const MenuName = styled.p`
  font-weight: 700;
  font-size: 100%;
  
  margin: 10% auto 5% auto;
`
const MenuPrice = styled.p`
  font-weight: 500;
  font-size: 100%;
  margin-bottom: 1%;
`

const PaySectDiv = styled.div`
  font-weight: 700;
  background-color: white;
  width: 100%;
  height: 25%;
  border-radius: 0px 0px 25px 25px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  border: 2px solid rgb(184, 184, 184);
  
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const CountDiv = styled.div`
  font-weight: 700;
  font-size: 100%;
  display: flex;
  
`
const CountFontDiv = styled.div`
  margin-top: 1%;
  font-weight: 900;
  height: 80%;
  display: flex;
  justify-items: center;
  align-items: center;
  
  flex-direction: row;
  font-size: ${props => props.size && '100%'}
`
const CountFontShowDiv = styled.div`
  font-weight: 900;
  height: 80%;
  font-size: ${props => props.size && '100%'}
`
const CountsShowDiv = styled.div`
  font-weight: 500;
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CountsDiv = styled.div`
  font-weight: 500;
  width: 40%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% auto 0 3%;
`
const ResetP = styled.p`
  font-weight: 700;
  width: 40%;
  height: 10%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`
const PrePayDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:flex-end;
`
const TotalPrice = styled.p`
  font-weight: 900;
  font-size: 200%;
` 
const TotalPriceDiv = styled.div`
  margin: 0 20% 0;
`
const PayButtonDiv = styled.div`
  background-color: #D9DCE8;
  width: 70%;
  height: 120%;
  border-radius: 0 0 25px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const PayButtonTextDiv = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 150%;
  height: 10%;
`
const PayDiv = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  position: relative;
  margin: 5% 13% 0 5%;
  background-color: white;
  text-align: center;
  justify-content: center;
  border: 2px solid rgb(184, 184, 184);
  flex-direction: column;
  z-index: 500;
`
const PayInfoDiv = styled.div`
  width: 100%;
  margin-top: 15%;
`
const PayDivP = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin-top: 0;
`


const PayQRImgDiv = styled.div`
  width: 100%;
  height: 20%;
`
const PayQRImg = styled.img.attrs({
  src: `${payQRSrc}`  
})`
  height: 100%;
  aspect-ratio: 1/1;
`
const MenuImg = styled.img.attrs(props => ({
src: props.src || defaultSrc,
}))`
  background-color: white;
  width: 40%;
  aspect-ratio: 1/1;

  margin: 5% auto 5% auto;

  border: 1px solid rgb(184, 184, 184);
`

const PayCompleteButton = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 20%;
  font-weight: 900;
  background-color: #D9DCE8;
  font-size: 150%;
  position: absolute;
  bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  box-sizing: border-box
`

function App() {
  const [isPayDivVisible, setIsPayDivVisible] = useState(false);
  const [m1Count, setM1Count] = useState(0);
  const [m2Count, setM2Count] = useState(0);
  const [m3Count, setM3Count] = useState(0);
  const [m4Count, setM4Count] = useState(0);
  
  const ShowCount = (props) => {
    const incCount = () => {props.setCount(props.count + 1)};
    const decCount = () => {props.setCount(props.count - 1)};
    const resCount = () => {props.setCount(0)}
    return (
      <> {props.count ? 
        props.type === 'edit' ? <CountFontDiv ><span role="img" aria-label="x" onClick={resCount}>❌</span><p>&nbsp;&nbsp;</p><span role="img" aria-label='-' onClick={decCount}>➖</span><p>&nbsp;&nbsp;</p>{props.name}: {props.count}개<p>&nbsp;&nbsp;</p><span role="img" aria-label='+' onClick={incCount}>➕</span></CountFontDiv>
        : <CountFontShowDiv size='100%'><p>{props.name}: {props.count}개</p></CountFontShowDiv>
        : <></>}</>
    )
  }

  const ShowTotalPrice = (props) => {
    const totPrice = props.m1Count * 3000 + props.m2Count * 4000 + props.m3Count * 4000 + props.m4Count * 5000
    return (
      <TotalPrice>₩ {totPrice.toLocaleString()}</TotalPrice>
    )
  }

  
  return (
    <>
      <Header>
        과일빙수~
      </Header> 

    <Board>
        <Menu onClick={() => setM1Count(m1Count + 1)}>
          <MenuImg src=menuOneSrc />
          <MenuName>직접갈기</MenuName>
          <MenuPrice>₩3,000</MenuPrice>
        </Menu>
        <Menu onClick={() => setM2Count(m2Count + 1)}>
          <MenuImg />
          <MenuName>갈아드림</MenuName>
          <MenuPrice>₩4,000</MenuPrice>
        </Menu>
        <Menu onClick={() => setM3Count(m3Count + 1)}>
          <MenuImg />
          <MenuName>직접갈기(토핑 2배)</MenuName>
          <MenuPrice>₩4,000</MenuPrice>
        </Menu>
        <Menu onClick={() => setM4Count(m4Count + 1)}> 
          <MenuImg />
          <MenuName>갈아드림(토핑 2배)</MenuName>
          <MenuPrice>₩5,000</MenuPrice>
        </Menu>
        
    </Board>
    <PaySectDiv>
      <CountsDiv>
        <ShowCount type='edit' name='직접갈기' count={m1Count} setCount={setM1Count}/>
        <ShowCount type='edit' name='갈아드림' count={m2Count} setCount={setM2Count}/>
        <ShowCount type='edit' name='직접(토핑2배)' count={m3Count} setCount={setM3Count}/>
        <ShowCount type='edit' name='갈아(토핑2배)' count={m4Count} setCount={setM4Count}/>
      </CountsDiv>
      <PrePayDiv>
        <TotalPriceDiv>
          <ShowTotalPrice m1Count={m1Count} m2Count={m2Count} m3Count={m3Count} m4Count={m4Count}></ShowTotalPrice>
        </TotalPriceDiv>
        <PayButtonDiv onClick={() => {setIsPayDivVisible(true);}}>
          <PayButtonTextDiv>
            결제하기
          </PayButtonTextDiv>
        </PayButtonDiv>

        {isPayDivVisible && 
          <Bodyblackout onClick={() => {setIsPayDivVisible(false);}}>
            <PayDiv>
              <CountsShowDiv>
                <ShowCount name='직접갈기' count={m1Count} setCount={setM1Count}/>
                <ShowCount name='갈아드림' count={m2Count} setCount={setM2Count}/>
                <ShowCount name='직접(토핑2배)' count={m3Count} setCount={setM3Count}/>
                <ShowCount name='갈아(토핑2배)' count={m4Count} setCount={setM4Count}/>
              </CountsShowDiv> 
              <PayInfoDiv>
                <ShowTotalPrice m1Count={m1Count} m2Count={m2Count} m3Count={m3Count} m4Count={m4Count}></ShowTotalPrice>
                <PayDivP weight='900' size='200%'>
                  결제 방법
                </PayDivP>
                  <PayDivP weight='800' size='150%'>
                    QR로 결제
                  </PayDivP>
              <PayQRImgDiv>
                <PayQRImg />
              </PayQRImgDiv>
                  <PayDivP weight='800' size='100%'>
                    혹은
                  </PayDivP>
                  <PayDivP weight='800' size='150%'>
                    계좌 송금
                  </PayDivP>
                  <PayDivP weight='400' size='100%'>
                  국민 48460204278030 (배세웅)
                  </PayDivP>
              
                  <PayDivP weight='500' size='100%'>
                    결제가 완료되면, 아래 버튼을 눌러주세요.
                  </PayDivP>
                  <PayDivP weight='500' size='100%'>
                    결제 여부는 관리자가 실시간으로 확인합니다.
                  </PayDivP>
              </PayInfoDiv>
              <PayCompleteButton onClick={()=> {setM1Count(0);setM2Count(0);setM3Count(0);setM4Count(0);}}>
                결제 완료
              </PayCompleteButton>
              
            </PayDiv>
          </Bodyblackout>
        }
        
      </PrePayDiv>
    </PaySectDiv>
    </>
    
  )
}

export default App
