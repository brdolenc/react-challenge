import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${({ theme }) =>
    css`
    body {
      padding: 0;
      margin: 0;
      background: ${theme.colors.background};
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
  `};
`;

export const Main = styled.main`
 ${({ theme }) =>
    css`
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      padding: 20px;
      text-align: center;
    `};
`;
