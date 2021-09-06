import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../../json/aboutus.json';
import { SimpleMap } from '../../atoms';


export class Contact extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:400px;
    padding:0px 0px;
    margin-left:0px;
    @media only screen and (max-width: 600px) {
      display:none;
    }
  `;

  const BenigitBody = styled.div`
    width:80%;
    margin-left:150px;
    padding: 10px 95px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      margin:0px;
      width:100%;
      
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

  const Details = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #536083;
  mix-blend-mode: normal;
  opacity: .8;
  margin-left: 40px;
  padding-right:200px;
  text-decoration: none;
  font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 38px;
    text-align: center;
  }
  `
 
const Columns = styled.div`
display: grid;
padding:25px 0px 0px 0px; 
display: flex; 
justify-content: space-around; 
`
const LeftCol = styled.div`
       
       @media only screen and (max-width: 600px) {
          width:100%;
          display:flex;
          justify-content:center;
          display:block;
         width:auto;
         display:grid;
         display:none;
      }
      `
    
      const RightCol = styled.div`
      float:right;
      @media only screen and (max-width: 600px) {
          flex-direction:column;
          margin: 20px 0;
      }
      `


const Img = styled.img`
text-align:center;
  height: 18px;
  float:left;
  margin-top: 6px;
@media only screen and (max-width: 600px) {
  width: 25px;
  height: 25px;

}
`
const IconColumn = styled.div`
margin: 0px 0px 50px;
text-align: center;
position: relative;
@media only screen and (max-width: 600px) {
  margin: 0px 10px 0px 10px;
}
`
const H1 = styled.h1`
font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
font-size: 32px;
line-height: 44px;
color: #00005c;
margin-bottom: 30px;
`
    

    return(
      <Body>
           <BenigitBody>
            <Columns>
            <LeftCol>
            <H1>Contact details</H1>
            {Data.Contact.map(item => {
         return(
          <>
             <Benifitsheading></Benifitsheading>
             <Img src={item.icon} />
             <Details>{item.text}</Details>
             </>
              )
          })}
             </LeftCol>
             <RightCol>
              <SimpleMap />
             </RightCol>  
            </Columns>
          
          </BenigitBody>
                  
      
    </Body>
    
    )
 }
}

