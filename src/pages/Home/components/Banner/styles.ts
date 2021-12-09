import styled from "styled-components";
import { MainTitle } from "../../../../styles/PageStyles";

export const Container = styled.div`
  height: 60vh;
  max-height: 500px;
  display: flex;
  //flex-direction: column;
  justify-items: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    //margin-left: 5vw;
  }
`;

export const Year = styled.div`
  display: none;
  @media (min-width: 665px) {
    display: block;
    align-self: center;
    line-height: 0.55;
    color: #ffd549;
    font-weight: 800;
    position: relative;
    font-size: 8rem;
    padding-left: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 10rem;
    padding-left: 2rem;
  }
  @media (min-width: 980px) {
    font-size: 13rem;
    left: 3rem;
  }
`;

export const H1 = styled(MainTitle)`
  animation: puffIn 1s;
  z-index: 2;
`;

export const Dias = styled.div`
  display: flex;
  justify-items: center;
  padding-left: 20px;
  h2 {
    line-height: 2rem;
    background: var(--quinternary-color);
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    color: white;
    padding: 4px;
    margin-top: 30px;

    transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
  }

  @media (min-width: 768px) {
    //padding-left: 40px;
    h2 {
      line-height: 2rem;
    }
  }
`;
