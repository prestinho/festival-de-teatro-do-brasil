import styled from "styled-components";
import { KeyboardArrowLeft } from "@styled-icons/material-rounded/KeyboardArrowLeft";

export const Container = styled.div``;

export const SessionDiv = styled.div`
  padding-left: 20px;
  margin-bottom: 2rem;
`;

export const Address = styled.p`
  font-size: 0.9rem;
  color: var(--gray);
`;

export const BackArrow = styled(KeyboardArrowLeft)`
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    left: -50px;
  }
`;
