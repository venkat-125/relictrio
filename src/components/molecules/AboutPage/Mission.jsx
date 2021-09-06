import { width } from '@material-ui/system';
import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../../json/aboutus.json';




export class Mission extends Component{
    render(){
        const Body = styled.h1`
        width:100%;
        height:300px;
        margin-top:-25px;
        @media only screen and (max-width: 600px) {
          padding:0px;
  margin-top:0px;
  display:block;
  height:700px;
        }
      `;
    
      const WhyUs = styled.div`
        width:80%;
        margin-left:150px;
        padding:100px 0px;
        display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 600px) {
      width:100%;
          margin-left:0px;
          flex-direction:column;
          display:block;
          padding:0px;
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
      width:650px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      margin: 20px 0px 20px 0px;
      @media only screen and (max-width: 600px) {
          flex-direction:column;
          margin: 20px 0;
      }
      `
    
      const Benifitsheading = styled.h4`
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
      color:#3c50e0;
      @media only screen and (max-width: 600px) {
          
      }
      `
    
      const Subsheading = styled.h4`
      font-size: 44px;
      line-height: 60px;
      color: #00005c;
      margin: 25px 0 0;
      font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
      @media only screen and (max-width: 600px) {
          
      }
      `
      const SubHeading = styled.h3`
      font-size: 14px;
      line-height: 22px;
  color:#536083;
  float:left;
  margin-top:0px;
  font-weight:500;
  @media only screen and (max-width: 600px) {
          
  }
  `
    
  
    const IconHeading = styled.h4`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: .025em;
    color: #00005c;
    white-space: nowrap;
    display:block;
    font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    @media only screen and (max-width: 600px) {
      font-size: 18px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: .025em;
      margin: 20px 0 10px;
    }
`

    const IconColumn = styled.div`
    max-width: 250px;
    position: relative;
    margin-left:50px;
    @media only screen and (max-width: 600px) {
      max-width: 300px;
      margin: 15px 20px ;
      position: relative;    
    }
    `
    const Paragraph = styled.p`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: .142857px;
    color:#536083;
    margin: 30px 140px 30px 0px;
    font-weight:500;
    font-family:"Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    @media only screen and (max-width: 600px) {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 23px;
    }
    `
const Columns = styled.div`
display: grid;
padding:25px 0px 0px 0px; 
display: flex; 
margin-left:50px;
justify-content: space-around; 
@media only screen and (max-width: 600px) {
  margin-left:0px;
}
`
const Para = styled.p`
background: #fff1f2;
border-radius: 6px;
float: left;
text-align:center;
padding:10px 15px 10px 15px;
margin-right: 15px;
font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
font-size: 20px;
line-height: 28px;
letter-spacing: .025em;
color: #536083;
position: relative;
`

     return(
       <Body>
        <WhyUs>
          {Data.OurMission.map(item => {
           return(
            <>
             <Columns>
              <LeftCol>
                <Benifitsheading>{item.title}</Benifitsheading>
                <Subsheading>{item.subtitle}</Subsheading>
                <Paragraph>{item.para}</Paragraph>
              </LeftCol>
              <RightCol>
                {item.Right.map(index => {
                 return(
                   <>
              <IconColumn>
               <Para>{index.number} </Para>
              <IconHeading>{index.heading}</IconHeading>
              <SubHeading>{index.para}</SubHeading>
              </IconColumn>
              </>
            )
          })
         
          }
          </RightCol>
          </Columns>

                {/* <div style={{ display: "grid", padding:'0px 0px 0px 100px', }}>
            <FirstColumn>
               {item.icondata.map(index => {
                 return(
                   <>
                   <Img>
                  <img src={index.icon} />
                </Img>
             <IconHeading>
             {index.title}
             </IconHeading>
             <SubHeading>
             {index.subtitle}
              </SubHeading>
                   </>
                 )
               })}

                
            </FirstColumn>  
           </div> */}
            {/* <SecondColumn>
            <Img><img src={recruitmentIcon} /></Img>
             <IconHeading>No recruitment headache</IconHeading>
             <SubHeading>
             Hiring will help you step up and get the work done minus the headache of looking after 
             the accounts, renting office space, thinking of overheads etc.
             </SubHeading>
            </SecondColumn> */}
    
            {/* <SecondColumn>
             <IconHeading>Integrity & Transparency</IconHeading>
             <SubHeading>
             Your information is safe with us. We showcase integrity and transparency in all our dealings. Security will never be a concern.
             </SubHeading>
            </SecondColumn> */}
      
                  </>
              )
          })}
            
          </WhyUs>
        </Body>
        
        )
     }
    }



