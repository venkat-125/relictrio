import React, { Component } from 'react';
import styled from 'styled-components'
import Button from '../atoms/Button';
import Data from '../../json/hireDeveloper.json';
import RequestBtn from '../atoms/RequestBtn';
import MoreBtn from '../atoms/Morebtn';



class Card extends Component{
 render(){
    const Body = styled.h1`
    width:80%;
    margin-left:100px;
    @media only screen and (max-width: 600px) {
      margin:0px;
      width:100%;
      height:auto;
  
    }
  `;

  const Card = styled.div`
  background: white;
  box-shadow: var(--box-shadow-1);
  border-radius: 12px;
  padding: 60px 40px;
  max-width: 390px;
  box-shadow:0px 4px 24px rgba(149, 166, 229, 0.16);
  @media only screen and (max-width: 600px) {
    padding: 60px 0px 0px 0px;
    margin-bottom:20px;
  }
}
  `
  const Columns = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr); 
gridGap: 100; 
padding:0px 0px 0px 150px; 
@media only screen and (max-width: 600px) {
  padding:0px 20px 0px 20px;
  display:block;
}
`

  const MianHeading = styled.h1`
  font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3c50e0;
  font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 600px) {
    ont-size: 14px;
    line-height: 0px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding-left:15px;
  }
  
  `
  const SubHeading = styled.h3`
  font-size: 32px;
  line-height: 44px;
  color: var(--uxg-black);
  margin: 25px 0 15px;
  font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 38px;
    padding-left:15px;
  }
  
  `

const Ul = styled.ul`
  text-decoration:none;
  background-image: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/tick__icon__3.svg');
  background-repeat: no-repeat;
  background-size: 5%;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: .025em;
  padding-left: 20px;
  margin-left:0px;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    margin-left:15px;
  }
`
const Li = styled.li`
  list-style-type:none;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: .025em;
  padding-left: 10px;
  color:#536083;
  font-weight:400;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: .025em;
    font-weight:700;
  }
  `
const Buttons = styled.div`
margin-top:50px;
@media only screen and (max-width: 600px) {
  width: calc(100% - 10px);

}
`
    return(
      <Body>
       {Data.cards.map(post => {
        return(
         <>
          <Columns>
           {post.FirstCard.map(heading => {
             return(
               <>
                <Card>
                 <MianHeading>{heading.title}</MianHeading>
                 <SubHeading>{heading.subtitle}</SubHeading>
                  {heading.List.map(list => {
                   return(
                    <>
                     <Ul>
                      <Li>{list.text}</Li>
                     </Ul>
                    </>
                    )
                   }
                  )}
                  <div style={{marginTop:'50px'}}>
                  <RequestBtn />
                  <MoreBtn />
                  </div>
                </Card>
          {post.SecondCard.map(heading => {
            return(
             <>
              <Card>
               <MianHeading>{heading.title}</MianHeading>
               <SubHeading>{heading.subtitle}</SubHeading>
                {heading.List.map(list => {
                 return(
                 <>
                  <Ul>
                     <Li>{list.text}</Li>
                  </Ul>
                 </>
                 )
                }
                )}
                 <Buttons>
                  <RequestBtn />
                  <MoreBtn />
                  </Buttons>
              </Card>
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

export default Card;