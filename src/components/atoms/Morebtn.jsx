import React, { Component } from 'react';
import styled from 'styled-components'



class MoreBtn extends Component{
 render(){
    const MoreBtntWrapper = styled.button`
    background: #ffffff;
    border-radius: 8px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    padding: 20px 10px;
    color: #3c50e0;            
    float:right;
    font-size: 16px;
    min-width: 155px;
    border-color: #ffffff;
    border: 1px solid #e0e4f0;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;

    @media only screen and (max-width: 600px) {
      box-shadow: 0 8px 12px rgb(149 166 229 / 24%);
      border-radius: 8px;
      font-size: 14px ;
      line-height: 16px ;
      letter-spacing: .142857px;
      padding: 15px;
      }
  `;
    return(
     <MoreBtntWrapper>
      know More
     </MoreBtntWrapper>
    )
 }
}

export default MoreBtn;