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
