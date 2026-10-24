import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3b82f6; /* Example usage of CSS variables */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8fafc; /* Slate-50 from Tailwind palette */
  }
`;

export default GlobalStyles;
