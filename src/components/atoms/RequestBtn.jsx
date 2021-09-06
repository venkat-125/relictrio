import React, { Component } from 'react';
import styled from 'styled-components'



class RequestBtn extends Component{
 render(){
    const RequestWrapper = styled.button`
    color: white;
    padding: 20px 10px;
    border: solid 1px #3c50e0;
    background: #3c50e0;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    min-width: 155px;
    float:left;
    cursor: pointer;
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
     <RequestWrapper>
      Rise Request
     </RequestWrapper>
    )
 }
}

export default RequestBtn;