import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Work Sans;
  }

  body {
    background-color: #F4F8FA;
  }
`;

export const theme = {
  color: {
    primary: '#1B31A8',
    secondary: '#0079FF'
  },
  text: {
    $blueGray900: 'rgba(30, 42, 50, 1)',
    $blueGray600: 'rgba(77, 100, 117, 1)',
    $blueGray400: 'rgba(112, 135, 151, 1)',
    $blueGray300: 'rgba(138, 156, 169, 1)',
    $blueGray100: 'rgba(203, 213, 220, 1)',
    $blueGray50: 'rgba(233, 238, 242, 1)',
    $blueGray10: 'rgba(244, 248, 250, 1)'
  }
};
