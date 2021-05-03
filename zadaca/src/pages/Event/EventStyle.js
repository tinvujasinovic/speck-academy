import styled from 'styled-components';
import {
  breakpoints
} from '../../lib/style/theme';

export const EventInfo = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 230px;
  margin-bottom: 24px;

  @media screen and (${breakpoints.mobileLarge}) {
    height: 300px;
  }

  @media screen and (${breakpoints.tablet}) {
    height: 230px;
    width: 300px;
  }

  @media screen and (${breakpoints.desktop}) {
    height: 450px;
    width: 800px;
  }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

