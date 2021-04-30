import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const SectionWrapper = styled.section`
    padding: 60px 15px;

    padding-top: ${props => props.withoutTopPadding == true ? "0px": "" }
    
    @media screen and (${breakpoints.tablet}) {
        padding: 80px 25px;
        
        padding-top: ${props => props.withoutTopPadding == true ? "0px": "" }
    }

    @media screen and (${breakpoints.desktop}) {
        padding: 80px 0;
        max-width: 993px;
        margin: 0 auto;
        
        padding-top: ${props => props.withoutTopPadding == true ? "0px": "" }
    }

    @media screen and (${breakpoints.desktopLarge}) {
        padding: 100px 0;
        max-width: 1280px;

        padding-top: ${props => props.withoutTopPadding == true ? "0px": "" }
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 20px;
    margin-bottom: 32px;
        margin-top: 40px;

    @media screen and (${breakpoints.mobileLarge}) {
        font-size: 24px;
        margin-top: 40px;
    }

    @media screen and (${breakpoints.tablet}) {
        margin-bottom: 48px;
        margin-top: 40px;
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 28px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 32px;
    }
`;
