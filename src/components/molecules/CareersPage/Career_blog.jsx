import React from 'react';
import styled from 'styled-components';
import { fontFamily } from '../../theme';
import './style.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Data from '../../../json/hireDeveloper.json';
import { ViewMore } from '../../atoms/Btn';

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    padding: 20px 0 40px 0px;
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
        height:auto;
        }
`;

const LeftBlock = styled.div`
    width: 25%;
    margin-top:-150px;
    padding:0;
    @media (max-width: 768px) {
        width: 100%;
        margin-top:0px;
        }
`;

const LeftBlock_SubHeading = styled.h4`
font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
color: #3c50e0;
font-family: "Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`;

const LeftBlock_Heading = styled.h2`
font-size: 32px;
line-height: 44px;
color: #00005c;
margin: 25px 0 40px;
font-family: "Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    color: #00005c;
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
font-size: 12px;
    line-height: 16px;
    letter-spacing: .375px;
    text-transform: uppercase;
    color: #3c50e0;
    margin: 25px 25px 15px;
    font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`;

const Text = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: .2px;
    text-transform: capitalize;
    color: #b8c2db;
    margin: 45px 25px 10px;
`;

const Athour = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: .2px;
    text-transform: uppercase;
    color: #536083;
    margin: 0 25px 35px;
`;

const BlogText = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: .178571px;
    color: #00005c;
    margin: 0 25px;
    word-wrap: break-word;
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


export const Career_Blog = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {Data.Blog.map(data => {
                        return (
                            <LeftBlock>
                                <LeftBlock_SubHeading>{data.title}</LeftBlock_SubHeading>
                                <LeftBlock_Heading>Relevant Articles</LeftBlock_Heading>
                                <ViewMore />
                                <OwlCarousel></OwlCarousel>
                            </LeftBlock>
                        )
                    })}
                    <RightBlock>
                        <OwlCarousel className="owl-theme" {...options} nav margin={1} dots={false}>
                            {Data.carouselBlock.map(data => {
                                return (
                                    <BlogBlock>
                                        <img src={data.imgURL} />
                                        <BlogHeading>{data.blockTxt}</BlogHeading>
                                         <BlogText>{data.blockPara}</BlogText>
                                         <Text>{data.txt}</Text>
                                         <Athour>{data.authorName}</Athour>
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
