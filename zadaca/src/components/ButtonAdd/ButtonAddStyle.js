import styled from 'styled-components';
import { ButtonWrapper } from '../Button/ButtonStyle';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const ButtonAddWrapper = styled(ButtonWrapper)`
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
