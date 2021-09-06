import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../../json/aboutus.json';


export class CoreValues extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:600px;
    background:#F5F8FD;
    padding:0px 0px;
    margin:0px 0px 0px 0px;
    @media only screen and (max-width: 600px) {
      height:700px;
    }
  `;

  const BenigitBody = styled.div`
    width:80%;
    margin-left:150px;
    padding:0px 0px 100px 0px;
    border: 1px solid #f5f6f9;
    box-sizing: border-box;
    border-radius: 80px 80px 0 80px;
    width: 1145px;
    padding: 10px 95px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      margin:0px;
      width:100%;
      border-radius: 42px 42px 0 42px;
      padding:0px 0px;
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
  color: #00005c;
  padding-right:250px;
  font-size: 32px;
  line-height: 44px;
  font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 38px;
    text-align: center;
  }
  `
 
const Columns = styled.div`
display: grid;
padding:150px 0px 0px 0px; 
display: flex; 
justify-content: space-around; 
@media only screen and (max-width: 600px) {
 
}

`
const LeftCol = styled.div`
       width:500px;
       @media only screen and (max-width: 600px) {
          width:auto;
          display:flex;
          justify-content:center;
          display:block;
         width:100%;
         display:grid;
         display:none;
      }
      `
    
      const RightCol = styled.div`
      width:500px;
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gridGap: 100; 
      @media only screen and (max-width: 600px) {
        display: grid; 
        width:auto;
        grid-template-columns: repeat(2, 1fr); 
        gridGap: 20; 
      }
      `
      const IconText = styled.h4`
      color:#00005C;
      font-weight:bold;
      font-size:18px;
      `
      
      const Para = styled.p`
      font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: .142857px;
      color: #536083;
      margin-top:-20px;
      padding-right:50px;
      `

      const Grid = styled.div`
      display: grid; 
      padding:0px 0px 0px 0px;
      display: flex; 
      grid-template-columns: repeat(3, 1fr); 
      gridGap: 100; 
      justifyContent: space-around;
      @media only screen and (max-width: 600px) {
        display: block; 
        padding:0px 0px 0px 0px;
        
      }
      `
      const IconHeading = styled.h4`
font-size: 20px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: .025em;
color:#00005c;
margin: 15px 0;
justify-content: center;
font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
@media only screen and (max-width: 600px) {
  font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: .025em;
    margin: 15px 0;
}
`
const Img = styled.img`
text-align:center;
width: 25px;
  height: 25px;
  padding:0px 0px 15px;
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
  margin: 50px 10px 30px 10px;
}
`
    

    return(
      <Body>
        {Data.CoreValues.map(item => {
         return(
          <>
           <BenigitBody>
            <Columns>
            <LeftCol>
             <Benifitsheading>{item.title}</Benifitsheading>
             <Subsheading>{item.subtitle}</Subsheading>
             </LeftCol>
             <Grid>
             <RightCol>
             
                {item.icons.map(index => {
                 return(
                 <>
                  <IconColumn>
                   <Img src={index.icon} />
                   <IconHeading>{index.text}</IconHeading>
                  </IconColumn>
                 </>
                 )
                })
                }
               
             </RightCol>
             </Grid>
            </Columns>
          
          </BenigitBody>
                  
          </>
              )
          })}
      
    </Body>
    
    )
 }
}

