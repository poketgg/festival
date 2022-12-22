import { useState, useEffect } from 'react'
import styled from "styled-components";
import './App.css';
import payQRSrc from "./assets/img/payQR.jpg";

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
  font-size: 300%;
  height: 80px;
  text-align: center; 
  padding-top: 40px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 25px;
`
const Board = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 70%;

  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Menu = styled.div`
  background-color: white;
  width: 90%;
  height: 95%;
  margin: 1% 3%;
  float: left;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border: 2px solid rgb(184, 184, 184);
`
const MenuImg = styled.img`
  background-color: white;
  width: 80%;
  aspect-ratio: 1/1;

  margin: 5% auto 5% auto;

  border: 1px solid rgb(184, 184, 184);
`
const MenuName = styled.p`
  font-weight: 700;
  font-size: 350%;
  margin: 10% auto 5% auto;
`
const MenuPrice = styled.p`
  font-weight: 500;
  font-size: 300%;
  margin-bottom: 1%;
`

const PaySectDiv = styled.div`
  font-weight: 700;
  background-color: white;
  width: 100%;
  height: 23%;
  border-radius: 0px 0px 25px 25px;
  display: flex;
  flex-direction: row;
  border: 2px solid rgb(184, 184, 184);
  
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const CountDiv = styled.div`
  font-weight: 700;
  display: flex;
  
  flex-direction: row;
  font-size: 300%;
  
`
const CountFontDiv = styled.div`
  margin: 9% 3% 1% 3%;
  font-weight: 900;
  font-size: ${props => props.size || '100%'}
`
const CountsDiv = styled.div`
  font-weight: 500;
  width: 40%;
  height: 10%;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
`
const TotalPrice = styled.p`
  font-weight: 900;
  font-size: 600%;
` 
const TotalPriceDiv = styled.div`
  margin: 20% 0 10% %;
`
const PayButtonDiv = styled.div`
  background-color: #D9DCE8;
  weight: 40%;
  height: 20%;
  margin: 10% 0 0 30%;
  font-weight: 800;
  font-size: 500%;
  padding: 100px 0;
`
const PayDiv = styled.div`
  width: 70%;
  height: 90%;
  position: relative;
  display: flex;
  margin: 5% 13% 0 5%;
  background-color: white;
  text-align: center;
  border: 2px solid rgb(184, 184, 184);
  flex-direction: column;
  z-index: 500;
`
const PayDivP = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
`
const PayDivPDiv = styled.div`
  width: 100%;
  text-align: center;
  height: ${props => props.height}
  margin-bottom: 1%;
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

const PayCompleteButton = styled.div`
  width: 100%;
  height: 10%;
  font-weight: 900;
  background-color: #D9DCE8;
  padding-top: 8%;
  font-size: 600%;
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
        props.type === 'edit' ? <CountDiv><p onClick={resCount}>x</p><p>&nbsp;&nbsp;</p><p onClick={decCount}>-</p><CountFontDiv>{props.name}: {props.count}개</CountFontDiv><p onClick={incCount}>+</p></CountDiv> 
        : <CountFontDiv size='400%'>{props.name}: {props.count}개</CountFontDiv>
        : <></>}</>
    )
  }

  const ShowTotalPrice = (props) => {
    const totPrice = props.m1Count * 1000 + props.m2Count * 2000 + props.m3Count * 3000 + props.m4Count * 4000 
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
          <MenuImg />
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
          결제하기
        </PayButtonDiv>

        {isPayDivVisible && 
          <Bodyblackout onClick={() => {setIsPayDivVisible(false);}}>
            <PayDiv>
              <ShowCount name='직접갈기' count={m1Count} setCount={setM1Count}/>
              <ShowCount name='갈아드림' count={m2Count} setCount={setM2Count}/>
              <ShowCount name='직접(토핑2배)' count={m3Count} setCount={setM3Count}/>
              <ShowCount name='갈아(토핑2배)' count={m4Count} setCount={setM4Count}/>
              
              <PayDivPDiv height='5%'>
                <ShowTotalPrice m1Count={m1Count} m2Count={m2Count} m3Count={m3Count} m4Count={m4Count}></ShowTotalPrice>
              </PayDivPDiv>
              <PayDivPDiv height='5%'>
                <PayDivP weight='900' size='600%'>
                  결제 방법
                </PayDivP>
              </PayDivPDiv>
              <PayDivPDiv height='5%'>
                  <PayDivP weight='800' size='400%'>
                    QR로 결제
                  </PayDivP>
                </PayDivPDiv>
              <PayQRImgDiv>
                <PayQRImg />
              </PayQRImgDiv>
              <PayDivPDiv height='20%'>
                  <PayDivP weight='800' size='250%'>
                    혹은
                  </PayDivP>
              </PayDivPDiv>
              <PayDivPDiv height='5%'>
                  <PayDivP weight='800' size='400%'>
                    계좌 송금
                  </PayDivP>
                  <PayDivP weight='400' size='300%'>
                  국민 48460204278030 (배세웅)
                  </PayDivP>
              </PayDivPDiv>
              
              <PayDivPDiv height='5%'>
                  <PayDivP weight='500' size='300%'>
                    결제가 완료되면, 아래 버튼을 눌러주세요.
                  </PayDivP>
              </PayDivPDiv>
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