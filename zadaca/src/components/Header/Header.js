import React, { useContext, useState } from 'react';
import LogoImage from '../../assets/images/logo.png';
import { AuthContext } from '../../context/AuthContext';
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
    HamburgerLink,
    HamburgerLinkDummy,
    NavItemDummy
} from './HeaderStyle';

const Header = () => {

    const [showHamburgerNav, setHamburgerNav] = useState(false);
    const { isAdmin, isLoggedIn, setIsLoggedIn, setIsAdmin } = useContext(AuthContext);

    const toggleNavigation = (e) => {
        setHamburgerNav(!showHamburgerNav);
    }

    const logout = () => {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setIsAdmin(false);
    }

    const checkTrue = (value) => {
        if (value === "true" || value === true)
            return true;

        return false;
    }

    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="FOI logo" />
                </LogoContainer>
                <Hamburger onClick={toggleNavigation}>
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </Hamburger>
                {!showHamburgerNav ? <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem exact to="/events">Events</NavItem>
                    {!isLoggedIn && <NavItem exact to="/register">Register</NavItem>}
                    {!isLoggedIn && <NavItem exact to="/login">Login</NavItem>}
                    {isLoggedIn && checkTrue(isAdmin) && <NavItem exact to="/admin">Admin</NavItem>}
                    {isLoggedIn && <NavItemDummy onClick={logout}>Logout</NavItemDummy>}

                </Nav>
                    : <HamburgerNav>
                        <HamburgerLink onClick={toggleNavigation} exact to="/">Home</HamburgerLink>
                        <HamburgerLink onClick={toggleNavigation} exact to="/events">Events</HamburgerLink>
                        {!isLoggedIn && <HamburgerLink onClick={toggleNavigation} exact to="/register">Register</HamburgerLink>}
                        {!isLoggedIn && <HamburgerLink onClick={toggleNavigation} exact to="/login">Login</HamburgerLink>}
                        {isLoggedIn && checkTrue(isAdmin) && <HamburgerLink onClick={toggleNavigation} exact to="/admin">Admin</HamburgerLink>}
                        {isLoggedIn && <HamburgerLinkDummy onClick={() => { logout(); toggleNavigation(); }}>Logout</HamburgerLinkDummy>}
                    </HamburgerNav>}
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;

