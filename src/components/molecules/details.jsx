import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/hireDeveloper.json';

export const Body = styled.h1`
width:100%;
height:600px;
padding:50px 0px;
background:#EFF5FC;
margin-top:-25px;
@media only screen and (max-width: 600px) {
  padding:0px;
  margin-top:-25px;
}

`;

export const BenigitBody = styled.div`
background:white;
width:80%;
padding:50px 0px;
box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
border-radius: 12px;
margin-left:150px;
@media only screen and (max-width: 600px) {
  background:white;
  box-shadow: none;
  border-radius: 0px;
width:100%;
padding:50px 0px;
margin:0px;
}
`

export const IconColumn = styled.div`
max-width: 300px;
margin: 0px 65px 0px;
text-align: center;
position: relative;
@media only screen and (max-width: 600px) {
  margin: 0px 10px 0px 10px;
}
`

export const Benifitsheading = styled.h4`
font-size: 14px;
line-height: 14px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;
font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
color:#3c50e0;
@media only screen and (max-width: 600px) {
  .example {background: red;}
}
`

export const Subsheading = styled.h4`
font-size: 32px;
line-height: 44px;
text-align: center;
color: black;
margin-top: 25px;
font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
@media only screen and (max-width: 600px) {
  font-size: 26px;
    line-height: 38px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
}
`
export const SubHeading = styled.h3`
font-size: 14px;
font-weight:500;
line-height: 22px;
text-align: center;
color:#536083b0;
@media only screen and (max-width: 600px) {
  margin-bottom:40px;
}
`
export const Img = styled.img`
text-align:center;
@media only screen and (max-width: 600px) {
  width: 60px;
  height: 60px;

}
`
export const IconHeading = styled.h4`
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
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: .025em;
    color: var(--uxg-black);
    margin: 20px 0 10px;
}
`

const Grid = styled.div`
display: grid; 
padding:25px 0px 0px 0px;
display: flex; 
justifyContent: space-around;
@media only screen and (max-width: 600px) {
  display: block; 
  padding:0px 25px 0px 25px;
  
}
`

export const Details = (props) => {
 return(
 
      <Body>
        {Data.Details.map(item => {
          return(
            <>
              <BenigitBody>
               {/* <Grid>
                  <IconColumn>
                   <Img src={item.icon} />
                   <IconHeading>{item.title}</IconHeading>
                   <SubHeading>{item.subtitle}</SubHeading>
                  </IconColumn>
               </Grid> */}
              </BenigitBody>
             </>
              )
          })}
          
    </Body>
    
    )
 }





export default Details;