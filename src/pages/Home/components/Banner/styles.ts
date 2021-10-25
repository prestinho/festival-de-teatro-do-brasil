import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 0px;
    align-items: flex-start;
    margin-left: 5vw;
  }
`;

export const H1 = styled.h1`
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
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 6px;
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
    padding-left: 40px;
    h2 {
        line-height: 2rem;
    }
  }
`;
