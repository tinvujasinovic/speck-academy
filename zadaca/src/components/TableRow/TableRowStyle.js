import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import {
    breakpoints,
    colors,
    transitionEase
} from '../../lib/style/theme';

export const TableRowWrapper = styled.tr`
  height: 60px;
  &:hover{
      background-color: ${props => props.isHeader ? '' : `${colors.lightGrey} !important`};
  }
`;

export const Header = styled.th`
    text-align: left;
    padding: 0 16px;
    display: ${props => [3, 4, 5, 6, 7].includes(props.index) ? 'none' : 'table-cell'};

    @media screen and (${breakpoints.mobileLarge}) {
        display: table-cell;
        display: ${props => [4, 5, 6].includes(props.index) ? 'none' : 'table-cell'};
    }    
    @media screen and (${breakpoints.tablet}) {
        display: table-cell;
    }  
`;

export const Data = styled.td`
    text-align: left;
    padding: 0 16px;
    display: ${props => [3, 4, 5, 6, 7].includes(props.index) ? 'none' : 'table-cell'};

    @media screen and (${breakpoints.mobileLarge}) {
        display: table-cell;
        display: ${props => [4, 5, 6].includes(props.index) ? 'none' : 'table-cell'};
    }  
    @media screen and (${breakpoints.tablet}) {
        display: table-cell;
    }  
`;

export const Delete = styled(FaTrashAlt)`
transition: ${transitionEase};
    &:hover{
        color: ${colors.red};
        cursor: pointer;
    }
`;