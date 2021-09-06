import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../../json/career.json';

export const Body = styled.h1`
width:100%;
height:1850px;
padding:50px 0px;
background:#EFF5FC;
margin-top:0px;
padding:180px 0px;
@media only screen and (max-width: 600px) {
  padding:0px;
  margin-bottom:3350px;
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
padding-bottom:50px;
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
font-weight:700;
line-height: 22px;
text-align: center;
color:#536083;
@media only screen and (max-width: 600px) {
  margin-bottom:40px;
}
`
export const Img = styled.img`
text-align:center;
width: 72px;
    height: 72px;
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
display: grid;
grid-template-columns: repeat(3, 1fr); 
gridGap: 100; 
justifyContent: space-around;
@media only screen and (max-width: 600px) {
  display: block; 
  padding:0px 25px 0px 25px;
  
}
`
const DesText = styled.p`
font-size: 14px;
    line-height: 22px;
    margin-top:-10px;
    text-align: center;
    color: #536083;
    font-weight:400;
`

const Skills = styled.strong`
font-size: 14px;
font-weight:700;
line-height: 22px;
text-align: center;
color:#536083;
`
const SkillsText = styled.p`
font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #536083;
    font-weight:400;
    margin-top:0px;
`
const Location = styled.strong`
font-size: 14px;
font-weight:700;
line-height: 22px;
text-align: center;
color:#536083;
`
const LocationText = styled.p`
font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #536083;
    font-weight:400;
    margin-top:-0px;
`

const Btn = styled.button`

color: white;
padding: 20px 10px;
border: solid 1px #3c50e0;
background: #3c50e0;
border-radius: 8px;
font-size: 16px;
line-height: 16px;
text-align: center;
letter-spacing: .142857px;
min-width: 175px;
cursor: pointer;
font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;

`

export const Careers = (props) => {
 return(
 
      <Body>
        {Data.careers.map(item => {
          return(
            <>
              <BenigitBody>
               <div>
                <Benifitsheading>{item.title}</Benifitsheading>
                <Subsheading>{item.subtitle}</Subsheading>
               </div>
               <Grid>
                {item.Requirements.map(index => {
                 return(
                 <>
                  <IconColumn>
                   <Img src={index.img} />
                   <IconHeading>{index.title}</IconHeading>
                   <SubHeading>{index.des}</SubHeading>
                   <DesText>{index.desText}</DesText>
                   <Skills>{index.skills}</Skills>
                   <SkillsText>{index.skillsText}</SkillsText>
                   <Location>{index.location}</Location>
                   <LocationText>{index.locationText}</LocationText>
                   <Btn>{index.btn}</Btn>
                  </IconColumn>
                 </>
                 )
                })
                }
               </Grid>
              </BenigitBody>
             </>
              )
          })}
          
    </Body>
    
    )
 }

 

