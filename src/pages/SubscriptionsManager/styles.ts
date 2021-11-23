import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin: auto;
  border-radius: 10px;
  align-self: center;
  box-shadow: var(--box-shadow);
  padding: 20px;
  border-spacing: 0;
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  &:hover {
    background: var(--light-gray);
  }
`;

export const Th = styled.th`
  line-height: 3rem;
  border-bottom: 1px solid var(--light-gray);
  background-color: var(--primary-color);
  &:first-child {
    border-radius: 10px 0 0 0;
  }
  &:last-child {
    border-radius: 0 10px 0 0;
  }
`;

export const Td = styled.td`
  text-align: center;
  line-height: 3rem;

  cursor: pointer;

  &:first-child {
    color: var(--dark-gray);
  }

  &.status-P {
    color: var(--pink);
  }

  &.status-A {
    color: var(--quinternary-color);
  }

  &.status-R {
    color: var(--terciary-color);
  }
`;
