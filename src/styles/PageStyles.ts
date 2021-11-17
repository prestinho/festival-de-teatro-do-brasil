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

  @media (min-width: 768px) {
    padding-top: 20vh;
  }
`;

export const DefaultContainer = styled.div`
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
  margin-bottom: 3rem;
`;

export const P = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1rem;
  text-align: justify;
`;

export const Strong = styled.strong`
  color: var(--pink);
  transition: ease all 0.2s;
  &:hover {
    color: var(--quinternary-color);
  }
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
