import styled from "styled-components";
import Data from '../../json/hireDeveloper.json';

const Body = styled.h1`
width:100%;
height:200px;
padding:50px 0px;
background:#EFF5FC;
margin-top:-25px;
@media only screen and (max-width: 600px) {
    width:100%;
    height:750px;
    background:#EFF5FC;
    padding:none;
}
`;
const Row = styled.div`
        width: 100%;
        display:flex;
        justify-content:space-between;
        background:#EFF5FC;
        height:200px;
        box-shadow: none;
        border-radius: none;
        margin:20px 30px 20px 30px;
        @media only screen and (max-width: 600px) {
            margin:0px;
        display:block;
        }
        `;

const Col4 = styled.div`

        float: left
        display:block;
        `;

const Col2 = styled.div`
        float: left;
        margin: 28px auto 0 auto;
        @media only screen and (max-width: 600px) {
            display:block;
        }
        `;

const Col10 = styled.div`
        float: left;
        margin: 0 auto;
        @media only screen and (max-width: 600px) {
            display:block;
        }
        `;

const ContainerInner = styled.div`
        width: 80%;
        margin: 0 auto;
        background:#EFF5FC;
        box-shadow: none;
        border-radius: none;
        @media only screen and (max-width: 600px) {
        }
        `;

const Bannerblock__heading = styled.h3`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 20px;
    line-height: 28px;
    letter-spacing: .025em;
    margin-bottom: 10px;
        color: #00005C;
        @media only screen and (max-width: 600px) {
            font-size: 16px;
    line-height: 24px;
    letter-spacing: .025em;
        }
        `;

const Bannerblock__para = styled.p`
        font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 22px;
        color: #536083;
        font-style: normal;
        font-weight: 400;
        padding-right:70px;
        @media only screen and (max-width: 600px) {
            font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
        }
        `;

        const Img = styled.img`
        margin:0px 25px 0px 0px;
        height:44px;
        @media only screen and (max-width: 600px) {
            margin-top: 10px;
    margin-right: 15px;
        }
        `;

const BannerBlock = ({
    desktopsrcfile,
    heading,
    subHeading,
    width,
    height
}) => {

    return (
        <Body>
        <ContainerInner>
            <Col4>
                <Row>
                    {Data.Block.map(data => {
                     return(
                         <>
                        
                    <Col2>
                        <Img src={data.desktopsrcfile} />
                    </Col2>
                    <Col10>
                        <Bannerblock__heading>{data.heading}</Bannerblock__heading>
                        <Bannerblock__para>{data.subHeading}</Bannerblock__para>
                    </Col10>

                         </>
                     )
                    })}
                </Row>
            </Col4>
        </ContainerInner>
        </Body>
    );
};

export default BannerBlock;