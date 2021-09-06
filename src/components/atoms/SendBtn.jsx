import React, { Component } from 'react';
import styled from 'styled-components'



class SendBtn extends Component{
 render(){
    const SendBtnWrapper = styled.div`
    background: white;
    border-radius: 8px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    color: #3c50e0;
    font-size: 16px;
    width: 155px;
    padding: 20px 10px;
    border-color: #ffffff;
    border: 1px solid #e0e4f0;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `;
    return(
     <SendBtnWrapper>
      Send
     </SendBtnWrapper>
    )
 }
}

export default SendBtn;