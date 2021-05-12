import styled from 'styled-components';
import {
    breakpoints, colors
} from '../../lib/style/theme';

export const Grid = styled.div`
    display: grid;
    row-gap: 32px;

    &:last-child {
            margin-bottom: 16px;
        }

    @media screen and (${breakpoints.mobileLarge}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;

    }

    @media screen and (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);

        ${props => props.columns === 3 &&
        'padding: 0 32px'
    }
    }
    
    @media screen and (${breakpoints.desktopLarge}) {
        ${props => props.columns === 3 &&
        'padding: 0 84px;'
    }

        ${props => props.columns === 4 &&
        'grid-template-columns: repeat(4, 1fr);'
    }
    }
`;

export const Main = styled.main`
    min-height: calc(100vh - 54px);

    @media screen and (${breakpoints.tablet}) {
        min-height: calc(100vh - 74px);
    }
`;

export const Form = styled.form`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 32px;

    @media screen and (${breakpoints.tablet}) {
        width: 400px;        
        padding-bottom: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
        width: 400px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 400px;
    }
`;

export const FormRow = styled.div`
    margin-bottom: 32px;

    &:last-chiled {
        margin-bottom: 0px;
    }
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const InputLabel = styled.label`
    font-size: 14px;
    display: block;
    font-weight: 600;
    margin-bottom: 4px;

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 16px;
    }
`;

export const InputText = styled.input`
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 40px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    font-familiy: 'Montserrat', sans-serif;

    &:focus  {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const TextArea = styled.textarea`
     border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 150%;
    padding: 10px;
    outline: none;
    font-size: 14px;
    font-familiy: 'Montserrat', sans-serif;
    min-width: 100%;

    &:focus  {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputCheckbox = styled.input`
    margin-right: 12px;
    width: 18px;
    height: 18px;
`;

export const InputError = styled.p`
    font-size: 14px;
    color: ${colors.red};
    padding-top: 8px;
`;