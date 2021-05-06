import React, { useState } from 'react';

import LogoImage from '../../assets/images/logo.png';
import { 
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine,
    HamburgerNav,
    HamburgerLink
} from './HeaderStyle';

const Header = () => {

    const [showHamburgerNav, setHamburgerNav] = useState(false);

    const toggleNavigation = (e) => {
        setHamburgerNav(!showHamburgerNav);
    }
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="FOI logo"/>
                </LogoContainer>
                <Hamburger onClick={toggleNavigation}>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </Hamburger>
                 { !showHamburgerNav ? <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem exact to="/events">Events</NavItem>
                    <NavItem exact to="/register">Register</NavItem>
                    <NavItem exact to="/login">Login</NavItem>
                    <NavItem exact to="/admin">Admin</NavItem>
                </Nav>
                : <HamburgerNav>
                    <HamburgerLink onClick={toggleNavigation} exact to="/">Home</HamburgerLink>
                    <HamburgerLink onClick={toggleNavigation} exact to="/events">Events</HamburgerLink>
                    <HamburgerLink onClick={toggleNavigation} exact to="/register">Register</HamburgerLink>
                    <HamburgerLink onClick={toggleNavigation} exact to="/login">Login</HamburgerLink>
                    <HamburgerLink onClick={toggleNavigation} exact to="/admin">Admin</HamburgerLink>
                </HamburgerNav>}
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;

