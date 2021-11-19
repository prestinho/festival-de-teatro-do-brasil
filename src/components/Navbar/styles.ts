import styled from "styled-components";

import { Props } from "./Navbar";

export const Container = styled.div<Props>`
  height: 80px;
  position: fixed;
  display: flex;
  padding-left: 20px;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;

  @media (min-width: 768px) {
    justify-content: space-around;
    padding-left: 0px;
    height: ${(props) => (props.hasNavigated ? "60px" : "80px")};
    //background-color: ${(props) => (props.hasNavigated ? "var(--primary-color)" : "")};
    background-color: var(--primary-color);
    opacity: 0.9;
    transition: all easy 1s;
    transition: background-color 0.5s;
    transition: height 0.5s;
  }
`;

export const Img = styled.img`
  max-height: 100%;
`;

export const Girl = styled.div``;

export const MenuItem = styled.div<Props>`
  transition: ease all 0.5s;
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding-top: 1.2rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    //opacity: ${(props) => (props.hasNavigated ? "1" : "0")};
  }

  a {
    text-decoration: none;

    &:hover {
      color: black;
    }

    &:active {
      color: var(--quaternary-color);
    }
  }
`;
