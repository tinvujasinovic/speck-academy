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

    @media screen and (${breakpoints.desktop}) {
        margin-bottom: 0;
        width: 270px;
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
        margin-bottom: 32px;
    }
`;

export const Item = styled.div`
    font-size: 14px;
    margin-bottom: 4px;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
        margin-bottom: 12px;
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const Value = styled.div` 
    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;