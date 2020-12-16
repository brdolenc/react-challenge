import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

export const ButtonCustom = styled(Button)`
 ${({ theme }) =>
    css` && {
      background: ${theme.colors.tertiary};
      border-color: ${theme.colors.tertiary};
      color: ${theme.colors.text};
    }`};
`;

export const ButtonCustomActived = styled(Button)`
 ${({ theme }) =>
    css` && {
      background: ${theme.colors.actived};
      border-color: ${theme.colors.tertiary};
      color: ${theme.colors.text};

      &:hover{
        background: ${theme.colors.actived};
      }
    }`};
`;
