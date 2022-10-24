import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }

  body {
    background-color: ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialised; // para o chrome deixarfonte mais estilosa
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`;