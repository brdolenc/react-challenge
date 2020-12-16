import styled, { css } from 'styled-components';
import {
  TextField,
} from "@material-ui/core";

export const BoxFilter = styled.div`
 ${({ theme }) =>
    css` && {
      padding: 20px;
      color: ${theme.colors.text};
      margin-bottom: 30px;
      background: ${theme.colors.primary};
      border-radius: 5px;
      text-align: left;
    }`};
`;

export const TextFieldCustom = styled(TextField)`
 ${({ theme }) =>
    css` && {
      .MuiOutlinedInput-root {
        color: ${theme.colors.text};
        border-color:  ${theme.colors.text};
      }

      label {
        color: ${theme.colors.text};
      }

      .MuiOutlinedInput-notchedOutline {
        border-color:  ${theme.colors.text} !important;
      }

      .MuiOutlinedInput-notchedOutline {
        border-color:  ${theme.colors.text};

        &:hover {
          border-color:  ${theme.colors.text};
        }
      }

      .Mui-focused {
        color: ${theme.colors.text};
        border-color:  ${theme.colors.text};
      }
    }`};
`;