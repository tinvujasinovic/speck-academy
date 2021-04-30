import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const Grid = styled.div`
    display: grid;
    row-gap: 32px;

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

`;