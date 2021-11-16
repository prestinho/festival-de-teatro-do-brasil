import styled from "styled-components";

export const DefaultButton = styled.button`
  background: var(--primary-color);
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: var(--secondary-color);
  }
`;
