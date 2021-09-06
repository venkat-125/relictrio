import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width:80%;
  jusctify-content:center;
  align-items:center;
  display:flex;
  margin:50px 150px;
  align-self: center;
`

export const Div = ({children, className}) => {
    return(
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

Div.propType = {
    children : PropTypes.any,
    className : '',
}

