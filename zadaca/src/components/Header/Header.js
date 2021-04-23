import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <NavLink to="/" className="Header-LogoContainer">
                    <img src={Logo} className="Header-Logo" alt="FOI logo" />
                </NavLink>
                <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
                <nav className="Header-Nav">
                    <NavLink exact  to="/" className="Header-NavItem" activeClassName="Header-NavItem_active">Home</NavLink>
                    <NavLink exact  to="/events" className="Header-NavItem" activeClassName="Header-NavItem_active">Events</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;