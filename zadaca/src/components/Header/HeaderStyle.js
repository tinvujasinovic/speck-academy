import styled from 'styled-components';

import {
    colors,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';

import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    background-color: ${colors.white};
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const Inner = styled.div`
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (${breakpoints.tablet}) {
        padding: 15px 25px;
    }
    
    @media screen and (${breakpoints.desktop}) {
        padding: 15px 0;
        max-width: 993px;
        margin: 0 auto;
    }
    
    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const Logo = styled.img`
    width: 125%;
    height: 125%;
    object-fit: contain
`;

export const LogoContainer = styled(NavLink)`
    display: block;
    width: 50px;

    @media screen and (${breakpoints.desktopLarge}) {
        width: 60px;
    }
`;

export const Nav = styled.nav`
    display: none;
    @media screen and (${breakpoints.desktop}){
        display: block;
    }
`;

export const NavItem = styled(NavLink)`
    &.active {
        color: ${colors.red}
    }
    
    &:hover {
        color: ${colors.red}
    }

    &:last-child {
        margin-right: 0;
    }

    @media screen and (${breakpoints.desktop}){
        display: inline-block;
        text-decoration: none;
        color: ${colors.black};
        line-height: 50px;
        font-weigth: 600;
        font-size: 16px;
        margin: 15px 0;
        margin-right: 60px;
        transition: ${transitionEase}
    }

    @media screen and (${breakpoints.desktopLarge}){
        font-size: 18px;
    }
`;


export const NavItemDummy = styled.p`
    
    &:hover {
        color: ${colors.red}
    }

    &:last-child {
        margin-right: 0;
    }

    @media screen and (${breakpoints.desktop}){
        display: inline-block;
        text-decoration: none;
        color: ${colors.black};
        line-height: 50px;
        font-weigth: 600;
        font-size: 16px;
        margin: 15px 0;
        margin-right: 60px;
        transition: ${transitionEase}
    }

    @media screen and (${breakpoints.desktopLarge}){
        font-size: 18px;
    }   
`;

export const Hamburger = styled.div`
    width: 25px;
    @media screen and (${breakpoints.desktop}) {
        display: none;
    }
`;
export const HamburgerLine = styled.div`    
    width: 100%;
    height: 2px;
    border-radius: 100px;
    background-color: ${colors.darkGrey};
    margin-bottom: 6px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const HamburgerNav = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.white};
    top: 80px;
    left: 0;
    z-index: 100;

    @media screen and (${breakpoints.desktop}){
        display: none;
    }
`;

export const HamburgerLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.black};
    line-height: 25px;
    font-weigth: 600;
    font-size: 16px;
    margin: 15px auto;
    transition: ${transitionEase};
    display: block;
    text-align: center;
    width: fit-content;

    &.active {
        color: ${colors.red}
    }
    
    &:hover {
        color: ${colors.red}
    }
`;

export const HamburgerLinkDummy = styled.p`
    text-decoration: none;
    color: ${colors.black};
    line-height: 25px;
    font-weigth: 600;
    font-size: 16px;
    margin: 15px auto;
    transition: ${transitionEase};
    display: block;
    text-align: center;
    width: fit-content;

    &:hover {
        color: ${colors.red}
    }
`;