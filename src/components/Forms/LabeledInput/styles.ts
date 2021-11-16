import styled from "styled-components";

export const CustomInput = styled.input`
  line-height: 2rem;
  border-bottom: 2px solid var(--light-gray);
  width: 100%;
  padding-left: 10px;

  &:focus {
    border-bottom: 2px solid var(--quaternary-color);
    outline: none;
  }

  &.error {
    border-bottom: 2px solid var(--pink);
  }

  &[type="date"] {
    &::-webkit-calendar-picker-indicator {
      background: transparent;
      bottom: 0;
      color: transparent;
      cursor: pointer;
      height: auto;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 6rem;
  min-height: 2.5rem;
  background: none;
  border-bottom: 2px solid var(--light-gray);
  line-height: 1.5rem;
  padding-top: 0.5rem;
  padding-left: 10px;

  &:focus {
    border-bottom: 2px solid var(--quaternary-color);
    outline: none;
  }

  &.error {
    border-bottom: 2px solid var(--pink);
  }
`;

export const ErrorLabel = styled.a`
  color: var(--pink);
  font-size: 0.6rem;
  /* position: absolute;
  left: 0;
  bottom: -1rem; */
`;

export const FloatingLabel = styled.div`
  position: relative;
`;

export const FloatingLabelText = styled.label`
  position: absolute;
  pointer-events: none;
  font-size: 0.8rem;
  color: var(--gray);
  left: 10px;
  top: 0.4rem;
  transition: 0.3s ease all;

  ${CustomInput}[type=number].error ~ &,
  ${CustomInput}:focus ~ &,
  ${CustomInput}:valid ~ &,
  ${TextArea}:focus ~ &,
  ${TextArea}:valid ~ & {
    top: -1rem;
    left: 5px;
    font-size: 0.6rem;
    color: var(--quaternary-color);
  }
`;

export const RefDiv = styled.div`
  position: relative;
  top: -80px;
`;
