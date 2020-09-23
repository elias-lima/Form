import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-primary);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --color-primary: #F5F5F5;
    --color-border: #ddd;
    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;