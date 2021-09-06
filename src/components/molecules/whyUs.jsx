import { width } from '@material-ui/system';
import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/hireDeveloper.json';
import { HireNow } from '../atoms/Btn/HireNow';




class WhyUs extends Component{
    render(){
        const Body = styled.h1`
        width:100%;
        height:700px;
        margin-top:-25px;
        @media only screen and (max-width: 600px) {
          padding:0px;
  margin-top:100px;
  display:block;
  height:1350px;
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
      margin: 20px 0;
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
        font-size: 14px;
        margin:0px;
        text-transform: uppercase;
      }
      `
    
      const Subsheading = styled.h4`
      font-size: 44px;
      line-height: 60px;
      color: #00005c;
      margin: 25px 0 0;
      font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
      @media only screen and (max-width: 600px) {
        font-size: 26px;
        line-height: 38px;
      }
      `
      const SubHeading = styled.h3`
  font-size: 14px;
  font-weight:500;
  line-height: 22px;
  color:#536083b0;
  @media only screen and (max-width: 600px) {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
    letter-spacing: .142857px;
  }
  `
    
    const Img = styled.div`
     text-align:left;
     width: 88px;
    height: 48px;
    @media only screen and (max-width: 600px) {
      width: 48px;
      height: 48px;
      margin: 8px;
    }
    `
    const IconHeading = styled.h4`
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color:#00005c;
    margin: 30px 0;
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
    margin: 30px 55px 0;
    position: relative;
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
      ont-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 28px;
      letter-spacing: .142857px;
      padding:20px 20px 30px 0px;
      margin:0px;
    }
    `
const Columns = styled.div`
display: grid;
padding:0px 0px 0px 0px; 
display: flex; 
justify-content: space-around; 
`
const ResponsivetCol = styled.div`
 display:none;
 @media only screen and (max-width: 600px) {
  display:block;
  padding:20px;
}
`
     return(
       <Body>
        <WhyUs>
          {Data.whyus.map(item => {
           return(
            <>
               <ResponsivetCol>
                <Benifitsheading>{item.heading}</Benifitsheading>
                <Subsheading>{item.subheading}</Subsheading>
                <Paragraph>{item.text}</Paragraph>
                <HireNow />
              </ResponsivetCol>
             <Columns>
              <LeftCol>
                <Benifitsheading>{item.heading}</Benifitsheading>
                <Subsheading>{item.subheading}</Subsheading>
                <Paragraph>{item.text}</Paragraph>
                <HireNow />
              </LeftCol>

              <RightCol>
                {item.icondata.map(index => {
                 return(
                   <>
              <IconColumn>
               <Img><img src={index.icon} /></Img>
              <IconHeading>{index.title}</IconHeading>
              <SubHeading>{index.subtitle}</SubHeading>
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

export default WhyUs;