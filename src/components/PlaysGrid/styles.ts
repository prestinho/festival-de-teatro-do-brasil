import styled from "styled-components";

export const Container = styled.div`
  /* grid-template-columns: 320px 320px 320px; */
  width: 100%;
  min-height: 450px;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(auto-fill, var(--card-width));
  grid-auto-rows: min-content;

  transition: ease all 0.2s;
`;
