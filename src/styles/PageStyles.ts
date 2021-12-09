import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  /* background: var(--light-gray); */
  /* background: linear-gradient(#e66465, #9198e5);  */
  //background: linear-gradient(to bottom, var(--secondary-color) 70%, var(--primary-color) );

  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#ffed6b, #ff9494);
  min-height: 100vh;
  color: var(--terciary-color);
  padding: 5vw;

  padding-top: 80px;
`;

export const DefaultContainer = styled.div`
  width: 90vw;
  max-width: 900px;
  padding: 20px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  top: 80px;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 50px;
    top: 80px;
  }
`;

export const MainTitle = styled.h1`
  letter-spacing: -2px;

  background: linear-gradient(#ff46be, #ff2525);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: var(--pink);
`;

export const H3 = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
`;

export const P = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1rem;
  text-align: justify;
  white-space: pre-line;
`;

export const Strong = styled.strong`
  color: var(--pink);
  transition: ease all 0.2s;
  &:hover {
    color: var(--quinternary-color);
  }
`;

export const Ul = styled.ul`
  padding-bottom: 2rem;
  list-style: none;
`;

export const Li = styled.li`
  line-height: 1.5rem;
  padding-left: 2rem;
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  transition: ease all 0.2s;
  font-weight: 800;
  text-decoration: none;
  background: var(--pink);
  padding: 0 10px;
  border-radius: 4px;
  &:hover {
    background: var(--secondary-color);
  }
`;

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
