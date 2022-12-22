import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html {
    background-color: ${props => props.theme.colors.whiteOne};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colors.blackOne};
  }

  a {
    text-decoration: none;
  }
`;
