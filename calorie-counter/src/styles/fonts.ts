import { css } from 'styled-components';
import Syne from '../assets/fonts/Syne/static/Syne-Medium.ttf';
import OpenSans from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

export const fonts = css`
  @font-face {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Syne'), url(${Syne}) format('truetype');
  }
  @font-face {
    font-family: 'Open-sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Open-sans'), url(${OpenSans}) format('truetype');
  }
`;
