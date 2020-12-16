import styled, { css } from 'styled-components';
import Card from '@material-ui/core/Card';


export const CardCustom = styled(Card)`
 ${({ theme }) =>
    css` && {
      background: ${theme.colors.background};
      max-width: 280px;
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.primary};
      fill: ${theme.colors.text};
      margin: 10px;
    }`};
`;
