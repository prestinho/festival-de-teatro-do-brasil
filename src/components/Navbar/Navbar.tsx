import React from "react";

import { Container, Img, Girl } from "./styles";

import GirlImg from "../../assets/imgs/ftb.png";

export interface Props {
  hasNavigated?: boolean;
}

const Navbar: React.FC<Props> = ({ hasNavigated }) => {
  return (
    <Container hasNavigated={hasNavigated}>
      <Girl>
        <Img src={GirlImg} />
      </Girl>
    </Container>
  );
};

export default Navbar;
