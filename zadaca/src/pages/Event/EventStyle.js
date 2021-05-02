import styled from 'styled-components';
import Section from '../../components/Section/Section';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const SectionEventsWrapper = styled(Section)`
    background-color: ${colors.black};
    padding: 20px;

  @media screen and (${breakpoints.tablet}) {
    padding: 30px;
  }
`;

export const Text = styled.footer`
    color: ${colors.lightGrey};
    font-size: 12px;
    text-align: center;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
  }
`;
