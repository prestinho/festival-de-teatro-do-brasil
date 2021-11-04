import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FileUploadDiv = styled.div`
  width: 400px;
  height: 280px;
  background-color: var(--light-gray);
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  transition: ease all 0.3s;
  border: 2px solid transparent;
  transform: scale(0.95);

  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 24%) 0px 8px 12px;

  &:hover {
    background-color: var(--primary-color);
    transform: scale(1);
  }

  &:active {
    border: 2px solid var(--quaternary-color);
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 280px;

  object-fit: contain;
  cursor: pointer;
`;

export interface LabelProps {
  selectedFile: boolean;
}

export const Label = styled.label<LabelProps>`
  left: 5px;
  top: ${(props) => (props.selectedFile ? "-1rem" : "50px")};
  position: relative;
  font-size: ${(props) => (props.selectedFile ? "0.6rem" : "0.8rem")};
  align-self: ${(props) => (props.selectedFile ? "self-start" : "center")};
  color: ${(props) => (props.selectedFile ? "var(--quaternary-color);" : "var(--gray);")};
  transition: ease all 0.5s;
  z-index: 1;
`;

export const ErrorLabel = styled.a`
  color: var(--pink);
  font-size: 0.6rem;
`;
