import styled from "styled-components";

export const Logo = styled.img`
  width: 36px;
  border-radius: 50%;
  position: relative;
  top: -0.5rem;

  border: 3px transparent solid;

  transition: ease all 0.4s;
`;

export const DropDownMenu = styled.div`
  transition: ease all 0.4s;
  display: none;
  opacity: 0;
  background: white;
  padding: 0 1rem 1rem 1rem;
  background-color: var(--primary-color);
  opacity: 0.9;
  border-radius: 0 0 5px 5px;
  box-shadow: var(--box-shadow);

  &:hover {
    color: black !important;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 70px;

  &:hover {
    ${DropDownMenu} {
      display: block;
      opacity: 1;
    }
    ${Logo} {
      border-color: var(--quaternary-color);
    }
  }
`;
