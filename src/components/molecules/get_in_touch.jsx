import React, { Component } from 'react';
import styled from 'styled-components'
import hireadeveloper__bannerimg from '../../assets/img/hireadeveloper__bannerimg.png'
import Button from '../atoms/Button';
import Data from '../../json/hireDeveloper.json';
import { Input } from '../atoms/Input';
import SendBtn from '../atoms/SendBtn';



class GetInTouch extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:300px;
    background:#3C50E0;
    padding:150px 0px;
    @media only screen and (max-width: 768px) {
   margin-top:250px;
   padding:50px 0px;
   height:650px;
    }
  `;

  const GetInTouch = styled.div`
  width:380px;
  padding:0px 0px 0px 200px;
  @media only screen and (max-width: 768px) {
    width:auto;
    padding:0px 0px 0px 0px;
  }
}
  `
  

  const MianHeading = styled.h1`
  font-size: 32px;
  line-height: 44px;
  color: white;
  margin-bottom: 15px;
  font-family: var(--uxg-bold-font);
  font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 38px;
    margin-bottom: 5px;

  }
  
  `
  const SubHeading = styled.h3`
  font-size: 16px;
    line-height: 24px;
    color: white;
    mix-blend-mode: normal;
    opacity: .8;
    font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    font-weight:500;
    @media only screen and (max-width: 768px) {
      ont-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
    letter-spacing: .142857px;
    margin: 7px 0 30px;
    }
  
  `
  const Columns = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr); 
gridGap: 100; 
padding:0px 10px 0px 0px; 
@media only screen and (max-width: 768px) {
  padding:0px 20px 0px 20px;
  display:block;
  
}
`

const Placeholder = styled.span`
color:white;
@media only screen and (max-width: 768px) {
      
}
`

const LeftCol = styled.div`
    width: 35%;
`;

const RightCol = styled.div`
    width: 70%;
    @media only screen and (max-width: 768px) {
       width:100%;
    }
`;

const Form = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 100;
padding:0px 0px 0px 0px;
@media only screen and (max-width: 768px) {
  display:block;
  width:100%;
 flex-direction: column;
 width: calc(100% - 75px);
}
`;

    return(
      <Body>
      {Data.gitinTouch.map(post => {
        return(
         <>
          <Columns>
           {post.leftData.map(heading => {
            return(
             <>
              <GetInTouch>
               <MianHeading>{heading.title}</MianHeading>
               <SubHeading>{heading.subtitle}</SubHeading>
            </GetInTouch>
             {post.FormData.map(form => {
              return(
                <>
                 <RightCol>
                <Form>
                   <>
                   <Input placeholder={form.name}/>
                   <Input placeholder={form.Email}/>
                   </>
                   <>
                   <Input placeholder={form.Location}/>
                   <Input placeholder={form.MobileNumber}/>
                   </>
                </Form>
                <Input placeholder={form.YourMessage}/>
                <div style={{marginTop:'20px'}}>
                <SendBtn />
                </div>
                </RightCol>
                </>
              )
            })}
           
                   </>
               )
             
           })}
      
      </Columns>
               
        </>)
   

          })}
    </Body>
    
    )
 }
}

export default GetInTouch;