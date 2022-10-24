import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  margin-top: -5rem;
`;


interface ISummaryCardProps {
  variant?: 'green';
}

export const SummaryCard = styled.div<ISummaryCardProps>`
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme['gray-600']};
  border: 0;
  border-radius: 6px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      color: ${props => props.theme['gray-300']};
    }
  }
  
  > strong {
    color: ${props => props.theme['gray-100']};
    display: block;
    margin-top: 0.75rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-700']};
  `}
`;