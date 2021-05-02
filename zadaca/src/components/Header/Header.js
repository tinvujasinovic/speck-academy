import React from 'react';

import LogoImage from '../../assets/images/logo.png';
import { 
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine 
} from './HeaderStyle';


const Header = () => {
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="FOI logo"/>
                </LogoContainer>
                <Hamburger>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </Hamburger>
                <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem exact to="/events">Events</NavItem>
                    <NavItem exact to="/register">Register</NavItem>
                    <NavItem exact to="/login">Login</NavItem>
                    <NavItem exact to="/admin">Admin</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;

