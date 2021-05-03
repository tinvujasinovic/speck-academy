import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const EventInfoWrapper = styled.div`
    @media screen and (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Figure = styled.figure`
    width: 100%;
    height: 230px;
    margin-bottom: 24px;

    @media screen and (${breakpoints.mobileLarge}) {
        height: 300px;
    }

    @media screen and (${breakpoints.tablet}) {
        height: 230px;
        width: 400px;
    }

    @media screen and (${breakpoints.desktop}) {
        height: 350px;
        width: 600px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        height: 450px;
        width: 800px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
    &:first-child {
        margin-bottom: 20px;
    }

    @media screen and (${breakpoints.tablet}) {
        margin-bottom: 0;
        width: 300px;
    }

    @media screen and (${breakpoints.desktop}) {
        width: 300px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 400px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media screen and (${breakpoints.tablet}) {
        margin-bottom: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
        margin-bottom: 20px;
    }
  
`;

export const Item = styled.div`
    font-size: 14px;
    margin-bottom: 4px;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
        margin-bottom: 8px;
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
    
    &:first-child h3{
        text-align: left;
    }
          
    &:first-child p{
        text-align: left;
    }
`;

export const Title = styled.h3`
    text-align: right;
    margin-bottom: 8px;
`;

export const Value = styled.p` 
    text-align: right;
    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    line-height: 150%;
    padding: 20px 0;

    @media screen and (${breakpoints.tablet}) {
        width: 100%;
    }

    @media screen and (${breakpoints.desktop}) {
        width: 100%;
        font-size: 16px;    
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 800px;
        font-size: 16px;
    }
`;
