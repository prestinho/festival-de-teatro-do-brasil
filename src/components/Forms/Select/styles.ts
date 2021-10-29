import styled from "styled-components";

export const CustomSelect = styled.select`
  margin-left: 1rem;
  background: none;
  //border-bottom: 2px solid var(--light-gray);
  font-size: 1rem;

  &:focus {
    //border-bottom: 2px solid var(--quaternary-color);
    outline: none;
    color: var(--quaternary-color);
  }
`;

export const Label = styled.label`
  padding-left: 0.5rem;
  color: #7d7d7d;
  font-size: 0.8rem;
`;

