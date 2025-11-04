import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.textDark};
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyle;
