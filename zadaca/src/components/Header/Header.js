import React from 'react';
import './Header.scss';
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
                    <NavItem to="/" className="Header-NavItem">Home</NavItem>
                    <NavItem to="/events" className="Header-NavItem">Events</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;

