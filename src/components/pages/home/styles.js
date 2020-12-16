import styled, { css } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ProgressCustom = styled(CircularProgress)`
 ${({ theme }) =>
    css` && {
      color: ${theme.colors.text};
      margin-top: 50px;
    }`};
`;

