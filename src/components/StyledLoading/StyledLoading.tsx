import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay-ts";

export const StyledLoader = styled(LoadingOverlay)`
  overflow: hidden;
  display: flex;
  justify-content: center;
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

export const LoaderMsg = styled.a`
  top: 20vh;
  left: 0;
  right: 0;
  margin: auto;
  position: fixed;
  color: white;
  font-size: 2.5rem;
  font-weight: 800;
`;
