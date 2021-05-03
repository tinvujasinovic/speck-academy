import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const SearchBarWrapper = styled.div`
    padding: 0 15px;
    margin-bottom: 40px;

    @media screen and (${breakpoints.tablet}) {
        max-width: 400px;
        padding: 0;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Input = styled.input`
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    line-height: 40px;
    outline: none;
    font-size: 14px;
    width: 100%;
    padding: 0 5px;

    &:focus {
        border-colors: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }    
`;