import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LabeledRadio = styled.div`
  label {
    display: inline-block;
    padding: 4px 11px;
    font-family: Arial;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 800;
    color: #ffffffcc;
    transition: ease all 0.2s;

    &:hover {
      color: #ffffff;
      background-color: #ffffff55;
    }
  }
`;

export const Radio = styled.input`
  display: none;

  &:checked + label {
    background-color: var(--quinternary-color);
    color: #ffffff;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 6px;
  }
`;
