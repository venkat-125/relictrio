import React from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter as Router, } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
 background-color: #ffffff;
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 16px;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and (max-width: 960px){
     transition: 0.8s all ease;
 }
`;

const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 80%;
`;

const NavLogo = styled(Link)`
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: 24px;
`;

const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 50px;
    transform: translate(100%, 60%);
    font-size: 28px;
    cursor: pointer;
    color: #000000;
}
`;

const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const NavItem = styled.li`
height: 80px;
`;

const NavLinks = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 24px;
height: 100%;
cursor: pointer;
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 16px;
color: #536083;
letter-spacing: 0.142857px;
&:active{
    text-shadow: 0 4px 4px rgba(0,0,0,.25);
}
&:hover{
    text-shadow: 0 4px 4px rgba(0,0,0,.25);
}
`;

const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`;

const NavBtnLink = styled(Link)`
padding: 20px 10px;
border: solid 1px transparent;
min-width: 121px;
cursor: pointer;
background: #3C50E0;
box-shadow: 0px 6px 12px rgba(149, 166, 229, 0.16);
border-radius: 8px;
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.142857px;
color: #ffffff;
margin-left: 24px;
display: block;
text-decoration: none;
`;

const Header = ({toggle}) => {
    return (
        <>
        <Router>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'><img src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/12/Relictrio_logo@2x.png?time=1622425898" alt="logo" width="180px" height="58px" /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/recruitment">Recruitment</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/odc">Offshore</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/hire-developers">Hire Developer</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/aboutus">About us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/careers">Careers</NavLinks>
                        </NavItem>
                        <NavBtn>
                        <NavBtnLink to="/contact">Get Started</NavBtnLink>
                    </NavBtn>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
            </Router>
        </>
    )
}

export default Header;
