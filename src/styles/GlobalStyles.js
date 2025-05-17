import { createGlobalStyle } from 'styled-components';
import Inter from '../assets/fonts/Inter-VariableFont_opsz,wght.ttf';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${Inter}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Inter';
    margin: 0px;
  }
  ul {
    list-style: none;
  }
  a {
      text-decoration: none;
  }
`;

export default GlobalStyles;