import styled, { css } from 'styled-components';

export const TitleSpot = styled.h1`
 ${({ theme }) =>
    css` && {
      color: ${theme.colors.brandSecondary};
    }`};
`;

export const TitleI = styled.span`
 ${({ theme }) =>
    css` && {
      color: ${theme.colors.text};
    }`};
`;

export const TitleFood = styled.span`
 ${({ theme }) =>
    css` && {
      color: ${theme.colors.brandPrimary};
    }`};
`;
