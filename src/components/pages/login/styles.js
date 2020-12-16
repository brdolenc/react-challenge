import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ButtonCustom = styled(Button)`
 ${({ theme }) =>
    css` && {
      background: ${theme.colors.brandSecondary};
      border-color: ${theme.colors.brandSecondary};
      color: ${theme.colors.text};
      margin-top: 50px;
    }`};
`;

export const ProgressCustom = styled(CircularProgress)`
 ${({ theme }) =>
    css` && {
      color: ${theme.colors.text};
      margin-top: 50px;
    }`};
`;

