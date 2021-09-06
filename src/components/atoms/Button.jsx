import React, { Component } from 'react';
import styled from 'styled-components'


const ButtonWrapper = styled.div`
    color: #ffffff;
    padding: 20px 10px;
    border: solid 1px #3c50e0;
    background: #3c50e0;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    width:150px;
    cursor: pointer;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    @media only screen and (max-width: 600px) {
      font-size: 14px!important;
      line-height: 16px!important;
      letter-spacing: .142857px!important;
      padding: 15px;
    min-width: 150px;
}
    }
  `;
export const Button = () => {
    
    return(
     <ButtonWrapper>
      Get Started
     </ButtonWrapper>
    )
}

export default Button;

export const Nav_Button = styled.button`
padding: 20px 10px;
border: solid 1px transparent;
min-width: 175px;
cursor: pointer;
background: ${(props) => props.bg};
box-shadow: 0px 6px 12px rgba(149, 166, 229, 0.16);
border-radius: 8px;
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 16px;
line-height: 16px;
text-align: center;
letter-spacing: 0.142857px;
color: ${(props) => props.color};
margin: 0 auto;
display: ${(props) => props.block};
`;

