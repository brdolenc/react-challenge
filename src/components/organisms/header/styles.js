import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

export const ButtonCustom = styled(Button)`
 ${({ theme }) =>
    css` && {
      background: ${theme.colors.secondary};
      border-color: ${theme.colors.tertiary};
      color: ${theme.colors.text};
    }`};
`;

export const Header = styled.header`
 ${({ theme }) =>
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.text};
      padding: 20px;
    `};
`;
