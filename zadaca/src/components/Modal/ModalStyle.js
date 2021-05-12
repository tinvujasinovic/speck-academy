import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import {
    colors,
    boxShadowHover,
    breakpoints
} from '../../lib/style/theme';

export const ModalWrapper = styled.div`
    border-radius: 8px;
    background-color: ${colors.white};    
    width: 90%;    
    box-shadow: ${boxShadowHover};
    z-index: 300;

    @media screen and (${breakpoints.mobileLarge}) {
        width: 450px;    
    }    
`;

export const FormWrapper = styled.div`
    padding: 0 25px;
`;

export const Title = styled.h3`
    color: ${colors.red};
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
`;

export const Cross = styled(FaTimes)`
    color: ${colors.darkGrey};
    cursor:pointer; 
`;

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    top:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;      
    height: fit-content;
    @media screen and (${breakpoints.mobileLarge}) {
        height: unset; 
    }    
`;

