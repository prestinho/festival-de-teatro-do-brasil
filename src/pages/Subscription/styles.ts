import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 700px;
  padding: 20px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 24%) 0px 8px 12px;
  position: relative;
  top: 80px;

  @media (min-width: 768px) {
    top: 0px;
    padding: 50px;
  }
`;

export const H3 = styled.h3`
  text-align: center;
`;

export const Sessions = styled.div`
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
