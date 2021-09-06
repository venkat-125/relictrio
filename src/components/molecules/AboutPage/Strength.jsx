import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../../json/aboutus.json';


export class Strength extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:400px;
    padding:0px 0px;
    margin:350px 0px 150px 0px;
    @media only screen and (max-width: 600px) {
      display:block;
      display:none;
    }
  `;

  const BenigitBody = styled.div`
    background:#fff6e3;
    width:80%;
    margin-left:150px;
    padding:100px 0px 100px 0px;
    border: 1px solid #f5f6f9;
    box-sizing: border-box;
    border-radius: 80px 80px 0 80px;
    width: 1145px;
    padding: 130px 95px;
    margin: 0 auto;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      margin:0px;
      width:100%;
      border-radius: 42px 42px 0 42px;
      padding:80px 0px;
    }
  `


  const Benifitsheading = styled.h4`
  font-family: "Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3c50e0;
    text-align: left;
    margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ff8d9e;
  }
  `

  const Subsheading = styled.h4`
  font-size: 24px;
  line-height: 32px;
  color: #00005c;
  padding-right:50px;
  font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 38px;
    text-align: center;
  }
  `
 

const Paragraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: .142857px;
    color: #536083;
    max-width: 445px;
    margin-left:130px;
    font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
@media only screen and (max-width: 600px) {
 
}
`
const Columns = styled.div`
display: grid;
padding:25px 0px 0px 0px; 
display: flex; 
justify-content: space-around; 
@media only screen and (max-width: 600px) {
 display:block;
 
}
`
const LeftCol = styled.div`
       width:500px;
       @media only screen and (max-width: 600px) {
          width:100%;
          display:flex;
          justify-content:center;
          display:block;
         width:100%;
         display:grid;
         display:none;
      }
      `
    
      const RightCol = styled.div`
      width:820px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      margin: 20px 0;
      @media only screen and (max-width: 600px) {
          flex-direction:column;
          margin: 20px 0;
      }
      `
    

    return(
      <Body>
        {Data.OurStrength.map(item => {
         return(
          <>
           <BenigitBody>
            <Columns>
            <LeftCol>
             <Benifitsheading>{item.title}</Benifitsheading>
             <Subsheading>{item.subtitle}</Subsheading>
             </LeftCol>
             <RightCol>
             <Paragraph>{item.para}</Paragraph>
             </RightCol>
            </Columns>
          
          </BenigitBody>
                  
          </>
              )
          })}
   
    </Body>
    
    )
 }
}

