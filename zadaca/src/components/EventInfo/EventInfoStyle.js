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
        width: 500px;
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
    margin-bottom: 15px;

    @media screen and (${breakpoints.tablet}) {
        margin-bottom: 0;
        width: 400px;
    }

    @media screen and (${breakpoints.desktop}) {
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
        margin-bottom: 32px;
    font-size: 16px;
    }
`;

export const Item = styled.div` 
    &:last-item{
        text-align: right;
    }
    @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
    }
`;


export const Title = styled.div` 
    text-align: right;
    font-weight: bold;
`;

export const Value = styled.div` 
    text-align: right;
`;