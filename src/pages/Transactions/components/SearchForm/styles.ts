import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  > input {
    flex: 1;
    padding: 1rem;
    border: 0;
    outline: none;
    border-radius: 6px;
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};

    &::placeholder {
      color: ${props => props.theme['gray-500']}
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme['green-300']};
    border: 0;
    border: 1px solid ${props => props.theme['green-300']};
    border-radius: 6px;
    padding: 1rem 2rem;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;

    :hover {
      color: ${props => props.theme['white']};
      background-color: ${props => props.theme['green-300']};
      border-color: ${props => props.theme['green-300']};;

      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;