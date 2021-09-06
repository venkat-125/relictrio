import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/footer.json';


const Container = styled.footer`
    background: #F0F5FC;
    float: left;
    width: 100%;
    padding: 110px 0 80px;
    margin-top:-25px;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - 75px);
  }
`;

const Block = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    @media (max-width: 768px) {
        margin-top: 40px;
  }
`;

const Block_address = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #536083;
    float: left;
    width: 200px;
    margin: 0;
`;

const Block_subHeading = styled.h6`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 27px;
    color: #04080F;
    margin: 0;
`;

const UL = styled.ul`
    margin-right: 0;
    float: left;
    list-style: none;
    padding: 0;
`;

const LI = styled.li`
    margin-top: 25px;
    margin-left:25px;
`;

const Link = styled.p`
    font-family: "Gilroy-Medium","Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #536083;
    text-decoration: none;
    margin: 0;
`;

const UL_doubleSide = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 135px;
    float: left;
    margin-right: 40px;
    list-style: none;
    padding: 0;
    @media (max-width: 768px) {
        width:200px;
       }
`;

const LI_doubleSide = styled.li`
    width: 135px;
    margin-top: 25px;
    @media (max-width: 768px) {
       margin-left:25px;
      }
`;

const InnerContainer_bottom = styled.div`
    justify-content: flex-start;
    width: 80%;
    margin: 100px auto 0 auto !important;
    margin-top: 0px;
    display: flex;
    align-items: flex-start;
    background: #F0F5FC;
    @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - 75px);
  }
`;

const Link__bottom = styled.p`
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #536083;
    mix-blend-mode: normal;
    margin-right: 55px;
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    opacity: 0.8;
    @media (max-width: 768px) {
        margin-left: 0px !important;
    }
`;
const FooterList = () => {
    return (
        <>
             <Container>
                <InnerContainer>
                    {Data.footerBlock.map(data => {
                        return (
                            <Block>
                                <img style={{ width: '163px', height: '58px', marginBottom: '10px', display: 'grid' }} src={data.imgURL} />
                                <Block_address>{data.addressBlock}</Block_address>
                            </Block>
                        )
                    })}
                    <Block>
                        {Data.contactBlock.map(data => {
                            return (
                                <Block_subHeading>{data.subHeading}</Block_subHeading>
                            )
                        })}
                        <UL>
                            {Data.contactBlock_info.map(data => {
                                return (
                                    <LI><Link><img style={{ marginRight: '15px' }} src={data.iconURL} />{data.link}</Link></LI>
                                )
                            })}
                        </UL>
                    </Block>
                    <Block>
                        {Data.followUsBlock.map(data => {
                            return (
                                <Block_subHeading>{data.subHeading}</Block_subHeading>
                            )
                        })}
                        <UL>
                            {Data.followUsBlock_info.map(data => {
                                return (
                                    <LI><Link><img style={{ marginRight: '15px' }} src={data.iconURL} />{data.link}</Link></LI>
                                )
                            })}
                        </UL>
                    </Block>
                    <Block>
                        {Data.quickBlock.map(data => {
                            return (
                                <Block_subHeading>{data.subHeading}</Block_subHeading>
                            )
                        })}
                        <UL_doubleSide>
                            {Data.quickBlock_info__left.map(data => {
                                return (
                                    <LI_doubleSide><Link>{data.link}</Link></LI_doubleSide>
                                )
                            })}
                        </UL_doubleSide>
                        <UL_doubleSide>
                            {Data.quickBlock_info__right.map(data => {
                                return (
                                    <LI_doubleSide><Link>{data.link}</Link></LI_doubleSide>
                                )
                            })}
                        </UL_doubleSide>
                    </Block>
                </InnerContainer>
                <InnerContainer_bottom>
                {Data.bottomBlock.map(data => {
                    return (
                        <>
                            <Link__bottom>{data.info1}</Link__bottom>
                            <Link__bottom style={{marginLeft: '25px'}}>{data.info2}</Link__bottom>
                            <Link__bottom style={{marginLeft: '25px'}}>{data.info3}</Link__bottom>
                        </>
                    )
                })}
            </InnerContainer_bottom>
            </Container>
        </>
    );
};

export default FooterList;

// class FooterList extends Component{
//  render(){
//     const Body = styled.h1`
//     width:100%;
//     height:250px;
//     padding:50px 0px;
//     background:#EFF5FC;
//     margin-top:-25px;
//   `;

//   const BenigitBody = styled.div`
  
//   `

//   const FooterCol = styled.div`
//   margin: 0px 0px 0;
//   position: relative;
//   `
//   const SubHeading = styled.h3`
//   font-size: 14px;
//   font-weight:500;
//   line-height: 22px;
//   text-align: center;
//   color:#536083b0;
//   `
// const Img = styled.div`
//  text-align:center;
// `
// const IconHeading = styled.h4`
  
//     font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
// `
// const Logo = styled.h1`
// float: left;
// font-size:40px;
// width:200px;
// `
// const Address = styled.h3`
// font-size: 16px;
//     line-height: 28px;
//     color: #536083;
//     width: 200px;
//     font-weight:400;
//  font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
// `
// const Linkhead = styled.h1`
// font-size: 18px;
// line-height: 27px;
// color: #04080f;
// font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
// `
// const Li = styled.li`
// font-size: 16px;
//     line-height: 18px;
//     color: #536083;
//     text-decoration: none;
//     font-family:"Gilroy-Medium",Helvetica,Arial,Verdana,Tahoma,sans-serif;
//     font-weight:400;
//     width:200px;
//     line-height:0;
// `
// const FooterBottom = styled.div`
// font-size: 14px;
//     line-height: 17px;
//     text-align: left;
//     color: rgba(83, 96, 131, 0.8);
//     mix-blend-mode: normal;
//     font-family:"Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
//     height:100px;
//     padding-left:150px;
//     background:#EFF5FC;
// `
// const BottomText = styled.ul`
// padding-left:70px;
// float:left;
// `
//     return(
//       <Body>
//         {Data.footer.map(item => {
//           return(
//             <>
//               <BenigitBody>
//                <div style={{ display: "grid",  gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20, padding:'0px 0px 0px 150px' }}>
//                 <FooterCol>
//                     {item.firstcol.map(index => {
//                         return(
//                             <>
//                             <ul>
//                             <Li><Logo> {index.head}</Logo></Li>
//                              <Li><Address>
//                              {index.address}
//                              </Address></Li>
//                              </ul>
//                             </>
//                         )
//                     })}
//                 </FooterCol>
//                 <FooterCol>
//                 {item.secondcol.map(index=> {
//                         return(
//                             <>
//                             <Linkhead>
//                              {index.head}
//                              </Linkhead>
//                              {index.secondlist.map(key => {
//                              return(
//                                 <>
//                                 <ul>
//                                   <Li>{key.mobile}</Li> 
//                                   <Li>{key.contact}</Li>    
//                                  </ul>
                                 
//                                 </>
//                              )
//                              })}
//                             </>
//                         )
//                     })}
//                 </FooterCol>
//                 <FooterCol>
//                 {item.thirdcol.map(index=> {
//                         return(
//                             <>
//                             <Linkhead>{index.head}</Linkhead>
                           
//                              {index.thirdlist.map(key => {
//                              return(
//                                 <>
//                                  <ul>
//                                   <Li>{key.socilamedia}</Li>    
//                                  </ul>
                                 
//                                 </>
//                              )
//                              })}
//                             </>
//                         )
//                     })}
//                 </FooterCol>
//                 <FooterCol>
//                 {item.forthcol.map(index=> {
//                         return(
//                             <>
//                             <Linkhead>{index.head}</Linkhead>
                             
//                              {index.forthlist.map(key => {
//                              return(
//                                 <>
//                                  <ul>
//                                   <Li>{key.links}</Li>    
//                                  </ul>
//                                 </>
//                              )
//                              })}
//                             </>
//                         )
//                     })}
//                 </FooterCol>
//                </div>
//                <FooterBottom>
//                    {item.bottomfooter.map(index => {
//                        return(
//                            <>
//                            <BottomText>
//                             {index.copyRights}
//                             </BottomText>
//                             <BottomText>
//                             {index.Terms}
//                              </BottomText>
//                              <BottomText>
//                             {index.Privacy}
//                             </BottomText>
                            
//                            </>
//                        )
//                    })}
//                </FooterBottom>
//               </BenigitBody>
//              </>
//               )
//           })}
   
//     </Body>
    
//     )
//  }
// }

// export default FooterList;