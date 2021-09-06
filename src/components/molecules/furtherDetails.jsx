import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/hireDeveloper.json';
import { WhiteInTOuch } from '../atoms/Btn';


class FurtherDetails extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:400px;
    padding:100px 0px;
    @media only screen and (max-width: 600px) {
      padding:150px 0px 50px 0px;
      height:auto;
    }
  `;

  const BenigitBody = styled.div`
    background:#3C50E0;
    width:80%;
    margin-left:150px;
    padding:100px 0px 100px 0px;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 100px 100px 0px 100px;
    @media only screen and (max-width: 600px) {
      margin:0px;
      width:100%;
      border-radius: 42px 42px 0 42px;
      padding:80px 0px;
    }
  `


  const Benifitsheading = styled.h4`
  font-size: 12px;
    line-height: 12px;
    letter-spacing: .5px;
  text-align: center;
  max-width: 600px;
    margin: 0 auto;
    text-transform: uppercase;
  font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  color:#8da4ff;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-weight:700;
  }
  `

  const Subsheading = styled.h4`
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: white;
  margin: 25px auto 15px;
    max-width: 600px;
  font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 38px;
    text-align: center;
  }
  `
 

const Paragraph = styled.p`
font-size: 16px;
line-height: 24px;
color: #ebf3ff;
max-width: 600px;
margin: 0 auto 15px;
text-align:center;
font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
letter-spacing: .214286px;
font-family:400;
@media only screen and (max-width: 600px) {
  font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    padding:0px 30px;
}
`


    return(
      <Body>
        {Data.furthureDetails.map(item => {
         return(
          <>
           <BenigitBody>
            <div>
             <Benifitsheading>{item.title}</Benifitsheading>
             <Subsheading>{item.bigtitle}</Subsheading>
             <Paragraph>{item.smalltitle}</Paragraph>
             <WhiteInTOuch/>
            </div>
          
          </BenigitBody>
                  
          </>
              )
          })}
   
    </Body>
    
    )
 }
}

export default FurtherDetails;