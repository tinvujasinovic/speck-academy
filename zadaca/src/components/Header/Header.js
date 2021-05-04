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
    HamburgerNav
} from './HeaderStyle';

const Header = () => {

    const [showHamburgerNav, setHamburgerNav] = useState(false);

    const showNavigation = (e) => {
        e.preventDefault();
        setHamburgerNav(!showHamburgerNav);

    }

    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="FOI logo"/>
                </LogoContainer>
                <Hamburger onClick={showNavigation}>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </Hamburger>
                 { !showHamburgerNav ? <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem exact to="/events">Events</NavItem>
                </Nav>
                : <HamburgerNav/>}
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;

