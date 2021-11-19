import styled from "styled-components";

type ImageProps = {
  bgImg: string;
  bgImgSmall: string;
};

export const Image = styled.div<ImageProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: ${(props) => `url(${props.bgImg}), url(${props.bgImgSmall})`};
  mask-image: linear-gradient(to bottom, black 80%, transparent);
`;

export const Title = styled.div`
  position: absolute;
  left: 0px;
  top: 20vh;
  font-size: 1.8rem;
  max-width: 70%;
  z-index: 1;
  background: rgb(255 112 118 / 85%);
  font-weight: 800;
  padding: 1rem;
  box-shadow: rgb(0 0 0 / 24%) 0px 8px 12px;
  border-radius: 0 var(--card-border) var(--card-border) 0;
  color: white;
  text-transform: uppercase;
  span.sub {
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    top: 50vh;
    font-size: 2rem;
    a.sub {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1919px) {
    padding-left: 15%;
    padding-right: 5%;
  }
`;
