import styled from 'styled-components';
import {
    colors,
    transitionEase
} from '../../lib/style/theme';

export const ButtonAddWrapper = styled.button`
   display: block;
    text-decoration: none;
    line-height: 40px;
    text-align: center;
    border: 1px solid ${colors.red};
    border-radius: 6px;
    transition: ${transitionEase};
    font-size: 16px;
    font-family: "Montserrat", sans-serif;

    &:focus {
        outline: none;
    }
    border-color: ${colors.darkGrey};
    background: ${colors.white};
    color: ${colors.darkGrey};
    width: 150px;
    font-weight: 600;
   
    &:hover {
        cursor: pointer;
        border-color: ${colors.green};
        color: ${colors.green};
        background: ${colors.white};
    }
`;
