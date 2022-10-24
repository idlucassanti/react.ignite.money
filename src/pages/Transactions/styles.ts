import styled, { css } from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.5rem 2rem;
    background-color: ${props => props.theme['gray-700']};
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface IPriceProps {
  variant: 'entrada' | 'saida'
}

export const Price = styled.span<IPriceProps>`
  color: ${props => props.variant === 'entrada' ? 
    props.theme['green-300'] : 
    props.theme['red-300']};
`;