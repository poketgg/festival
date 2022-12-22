import { useState, useEffect } from 'react'
import styled from "styled-components";
import './App.css'


const StyledHeader = styled.div`
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
const StyledBoard = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 70%;

  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const StyledMenu = styled.div`
  background-color: white;
  width: 90%;
  height: 100%;
  margin: 1% 3%;
  float: left;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border: 2px solid rgb(184, 184, 184);
`
const StyledMenuImg = styled.img`
  background-color: white;
  width: 80%;
  aspect-ratio: 1/1;

  margin: 5% auto 5% auto;

  border: 1px solid rgb(184, 184, 184);
`
const StyledMenuName = styled.p`
  font-weight: 700;
  font-size: 350%;
  margin: 10% auto 5% auto;
`
const StyledMenuPrice = styled.p`
  font-weight: 500;
  font-size: 300%;
  margin-bottom: 1%;
`

const StyledPaySectDiv = styled.div`
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
const StyledCountDiv = styled.div`
  font-weight: 700;
  display: flex;
  
  flex-direction: row;
  font-size: 300%;
`
const StyledCountFontDiv = styled.div`
  margin: 9% 3% 1% 3%;
  font-weight: 900;
`
const StyledCountsDiv = styled.div`
  font-weight: 500;
  width: 40%;
  height: 10%;
  display: flex;
  flex-direction: column;
  margin: 1% auto 0 3%;
`
const StyledResetP = styled.p`
  font-weight: 700;
  width: 40%;
  height: 10%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`
const StyledPrePayDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`
const StyledTotalPrice = styled.p`
  font-weight: 900;
  font-size: 600%;
  margin: 20% 0 10% 20%;
` 
const StyledPayDiv = styled.div`
  background-color: #D9DCE8;
  weight: 40%;
  height: 20%;
  margin: 10% 0 0 30%;
  font-weight: 800;
  font-size: 500%;
  padding: 100px 0;
`
function App() {
  const [m1Count, setM1Count] = useState(0);
  const [m2Count, setM2Count] = useState(0);
  const [m3Count, setM3Count] = useState(0);
  const [m4Count, setM4Count] = useState(0);
  const [m5Count, setM5Count] = useState(0);
  
  const ShowCount = (props) => {
    const incCount = () => {props.setCount(props.count + 1)};
    const decCount = () => {props.setCount(props.count - 1)};
    return (
      <> {props.count ? <StyledCountDiv><p onClick={decCount}>-</p><StyledCountFontDiv>{props.name}: {props.count}개</StyledCountFontDiv> <p onClick={incCount}>+</p></StyledCountDiv> : <></>}</>
    )
  }

  const ShowTotalPrice = (props) => {
    const totPrice = props.m1Count * 1000 + props.m2Count * 2000 + props.m3Count * 3000 + props.m4Count * 4000 + props.m5Count * 5000
    return (
      <StyledTotalPrice>₩ {totPrice.toLocaleString()}</StyledTotalPrice>
    )
  }

  
  return (
    <>
      <StyledHeader>
        KIOSK [TEST]
      </StyledHeader>

    <StyledBoard>
        <StyledMenu onClick={() => setM1Count(m1Count + 1)}>
          <StyledMenuImg />
          <StyledMenuName>메뉴1메뉴1</StyledMenuName>
          <StyledMenuPrice>₩1,000</StyledMenuPrice>
        </StyledMenu>
        <StyledMenu onClick={() => setM2Count(m2Count + 1)}>
          <StyledMenuImg />
          <StyledMenuName>메뉴2메뉴2</StyledMenuName>
          <StyledMenuPrice>₩2,000</StyledMenuPrice>
        </StyledMenu>
        <StyledMenu onClick={() => setM3Count(m3Count + 1)}>
          <StyledMenuImg />
          <StyledMenuName>메뉴3메뉴3</StyledMenuName>
          <StyledMenuPrice>₩3,000</StyledMenuPrice>
        </StyledMenu>
        <StyledMenu onClick={() => setM4Count(m4Count + 1)}> 
          <StyledMenuImg />
          <StyledMenuName>메뉴4메뉴4</StyledMenuName>
          <StyledMenuPrice>₩4,000</StyledMenuPrice>
        </StyledMenu>
        <StyledMenu onClick={() => setM5Count(m5Count + 1)}> 
          <StyledMenuImg />
          <StyledMenuName>메뉴5메뉴5</StyledMenuName>
          <StyledMenuPrice>₩5,000</StyledMenuPrice>
        </StyledMenu>
    </StyledBoard>
    <StyledPaySectDiv>
      <StyledCountsDiv>
      <ShowCount name='메뉴1메뉴1' count={m1Count} setCount={setM1Count}/>
      <ShowCount name='메뉴2메뉴2' count={m2Count} setCount={setM2Count}/>
      <ShowCount name='메뉴3메뉴3' count={m3Count} setCount={setM3Count}/>
      <ShowCount name='메뉴4메뉴4' count={m4Count} setCount={setM4Count}/>
      <ShowCount name='메뉴5메뉴5' count={m5Count} setCount={setM5Count}/>
      </StyledCountsDiv>
      <StyledPrePayDiv>
        <ShowTotalPrice m1Count={m1Count} m2Count={m2Count} m3Count={m3Count} m4Count={m4Count} m5Count={m5Count}></ShowTotalPrice>
        <StyledPayDiv>
          결제하기
        </StyledPayDiv>
      </StyledPrePayDiv>
    </StyledPaySectDiv>
    </>
    
  )
}

export default App
