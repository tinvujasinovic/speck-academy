import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';
import img from '../../assets/images/hero.jpeg';

export const HeroWrapper = styled.section`
    background-image: url(${img});
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 80px;

    @media screen and (${breakpoints.desktopLarge}) {
        height: 500px;
        background-attachment: fixed;
    }

    
`;

export const Overlay = styled.div`
    background-color: ${colors.blackOverlay};
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (${breakpoints.mobileLarge}) {
        justify-content: flex-start;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 0 15px;

    @media screen and (${breakpoints.mobileLarge}) {
        padding: 0 25px;
    }
  

    @media screen and (${breakpoints.desktop}) {
        padding: 0;
        max-width: 993px;
        margin: 0 auto;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const Heading = styled.h2`
    color: ${colors.yellow};
    line-height: 140%;
    margin-bottom: 30px;
    font-size: 20px;

    @media screen and (${breakpoints.mobileLarge}) {
        font-size: 24px;
        max-width: 400px;
    }
  
    @media screen and (${breakpoints.desktop}) {
        font-size: 28px;
        max-width: 500px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 32px;
    }
`;

export const Subheading = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.white};
    line-height: 160%;

    @media screen and (${breakpoints.mobileLarge}) {
        max-width: 550px;
    }

    @media screen and (${breakpoints.desktop}) {
        max-width: 700px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 16px;
        max-width: 800px;
    }
`;