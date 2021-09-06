import React, { Component } from 'react';
import styled from 'styled-components'
import hireadeveloper__bannerimg from '../../assets/img/hireadeveloper__bannerimg.png'
import Button from '../atoms/Button';
import Data from '../../json/hireDeveloper.json';



class Main extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:600px;
    padding:100px 0px;
    background:#F3F7FC;
    @media only screen and (max-width: 600px) {
      height:750px;
      padding:0px;
    }
  `;

  const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gridGap: 100; 
  padding:0px 0px 0px 150px;
  @media only screen and (max-width: 600px) {
    display: block; 
    padding:0px 25px 0px 25px;
    
  }
  `

  const FirstColumn = styled.div`
  @media only screen and (max-width: 600px) {
    .example {background: red;}
  }
  `

  const MianHeading = styled.h1`
  font-size: 52px;
  line-height: 70px;
  margin-top: 100px;
  color:#00005c;
  font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  font-weight:600;
  @media only screen and (max-width: 600px) {
    font-size: 36px;
    line-height: 52px;
    letter-spacing: .01em;
  }
  `
  const SubHeading = styled.h3`
  font-size: 22px;
    line-height: 32px;
    letter-spacing: .214286px;
    color:#536083;
    margin: 30px 0px 40px 0px;
    font-family:"Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    padding-right:150px;
    font-weight:500;
    @media only screen and (max-width: 600px) {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: .142857px;
      font-weight:500;
      padding:0;
    }
  `
const SecondColumn = styled.div`
 margin-top:-20px
 @media only screen and (max-width: 600px) {
  width:100px;
  height:100px;
}
`
const Img = styled.img`
width:90%;
`
    return(
      <Body>
       {Data.MainBanner.map(post => {
        return(
         <>
          <Grid>
           <FirstColumn>
             <MianHeading>{post.head}</MianHeading>
             <SubHeading>{post.subhead}</SubHeading>
             <Button />
           </FirstColumn>

           <SecondColumn>
             <Img src={post.img} />
           </SecondColumn>
          </Grid>
                 
                  
        </>
              )
          })}
    </Body>
    
    )
 }
}

export default Main;