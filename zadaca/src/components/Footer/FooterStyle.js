import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const FooterWrapper = styled.footer`
    background-color: ${colors.darkGrey};
    padding: 20px;

  @media screen and (${breakpoints.tablet}) {
    padding: 30px;
  }
`;

export const Text = styled.footer`
    color: ${colors.lightGrey};
    font-size: 12px;
    text-align: center;
    height: 14px;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
    }
`;
