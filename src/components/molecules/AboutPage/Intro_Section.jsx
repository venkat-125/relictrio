import React from 'react';
import { Div } from '../../atoms';
import styled from 'styled-components';
import { backgroundColor, fontSize, lineHeight, colors, fontFamily, fontWeight} from '../../theme';
import propTypes from 'prop-types'
import About from '../../../json/aboutus.json';


const Wrapper = styled(Div)`
  width:100%;
  height:450px;
  margin:0px;
  display:flex;
  justify-content:center;
  display:inline-block;
  @media only screen and (max-width: 768px) {
    height:200px;
}
`;

export const Text = styled.div`
  margin:120px;
  @media only screen and (max-width: 768px) {
    margin:31px;
}
`

export const Title = styled.h2`
font-style: normal;
font-weight: ${fontWeight.fontWeight4};
font-size: ${fontSize.fontSize25};
line-height: ${lineHeight.lineHeight42};
text-align: center;
letter-spacing: .214286px;
color: #536083;
max-width: 700px;
margin: 0 auto;
@media only screen and (max-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: .142857px;
}
`

export const IntroSection = ({ text }) => {
    return(
        <Wrapper text={text}>
            {
                About.IntroSection.map(text => {
                    return (
                        <Text>
                        <Title>{text.heading}</Title>
                          
                        </Text>
                    )
                })
            }
        </Wrapper>
    )
}

IntroSection.propTypes = {
    
}