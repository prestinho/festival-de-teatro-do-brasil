import styled from "styled-components";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";

export const Sessions = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  padding-top: 0;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
`;

export const AddButton = styled.a`
  display: block;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: var(--terciary-color);
  cursor: pointer;

  &:hover {
    color: var(--quaternary-color);
  }
`;

export const Row = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
