import React from 'react';
import styled from 'styled-components';
import { fontFamily } from '../../theme';
import './style.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import About from '../../../json/aboutus.json'

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    padding: 100px 0 100px;
    @media only screen and (max-width: 768px) {
        padding: 0px 0px 0px;
    }
`;

const InnerContainer = styled.div`
    width: 80%;
    padding: 15px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        }
`;

const LeftBlock = styled.div`
    width: 25%;
    margin-top:-400px;
    padding:0;
    @media (max-width: 768px) {
        width: 100%;
        margin-top:0px;
        }
`;

const LeftBlock_SubHeading = styled.h4`
font-family: ${fontFamily.boldFont};
font-size: 44px;
line-height: 60px;
color: #00005c;
`;

const LeftBlock_Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: .142857px;
    color: #536083;
    @media only screen and (max-width: 768px) {
    
    }
`;

const RightBlock = styled.div`
    width: 70%;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
    
    }
`;

const BlogBlock = styled.div`
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    margin-left: 0px;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    width: 0px;
    position: relative;
    margin-right: 0px;
    width: 328px;
    height: auto;
    padding:0px 50px 0px 0px;
    @media (max-width: 768px) {
        margin: 50px 0;
        }
`;

const BlogSubHeading = styled.h4`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.375px;
    text-transform: uppercase;
    color: #3C50E0;
    margin: 25px 25px 15px;
`;

const BlogHeading = styled.h2`

`;

const BlogAuthorBy = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: #B8C2DB;
    margin: 45px 25px 10px;
`;

const BlogAuthorName = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #536083;
    margin: 0 25px 35px;
`;

const options = {
    center: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2.6,
        }
    },
};


export const JournySection = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {About.Journey.map(data => {
                        return (
                            <LeftBlock>
                                <LeftBlock_SubHeading>{data.title}</LeftBlock_SubHeading>
                                <LeftBlock_Heading>{data.subtitle}</LeftBlock_Heading>
                                <OwlCarousel></OwlCarousel>
                            </LeftBlock>
                        )
                    })}
                    <RightBlock>
                        <OwlCarousel className="owl-theme" {...options} nav margin={1} dots={false}>
                            {About.carouselBlock.map(data => {
                                return (
                                    <BlogBlock>
                                        <img src={data.imgURL} />
                                        <BlogHeading>{data.blockTxt}</BlogHeading>
                                         <BlogAuthorName>{data.blockPara}</BlogAuthorName>
                                    </BlogBlock>
                                )
                            })}
                        </OwlCarousel>
                    </RightBlock>
                </InnerContainer>

            </Container>
        </>
    );
};
