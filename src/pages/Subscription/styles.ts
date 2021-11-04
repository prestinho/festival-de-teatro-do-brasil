import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay-ts";

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

export const SaveButton = styled.button`
  background: var(--primary-color);
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const Row = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledLoader = styled(LoadingOverlay)`
  overflow: hidden;
  ._loading_overlay_overlay {
    background: linear-gradient(
      108deg,
      rgba(46, 143, 198, 0.7) 0%,
      rgba(255, 112, 118, 0.7) 68%,
      rgba(255, 204, 0, 0.7) 100%
    );
    svg {
      position: fixed;
      width: 20vw;
    }
  }
`;
