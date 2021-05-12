import styled from 'styled-components';
import {
    colors,
    boxShadowHover
} from '../../lib/style/theme';


export const TableWrapper = styled.table`
    margin: 32px 0;
    width: 100%; 
    box-shadow: ${boxShadowHover}
`;

export const Header = styled.thead`
    background-color: ${colors.red};
    color: ${colors.white};
    
`;

export const Body = styled.tbody`
    tr:nth-child(even){
        background-color: ${colors.grey};
    };
`;

export const InfoText = styled.p `
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
    color: ${colors.darkGrey};
`;
