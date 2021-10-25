import React from "react";

import { Container, Img, Girl, Link } from "./styles";

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
      <Link hasNavigated={hasNavigated}>Home</Link>
      <Link hasNavigated={hasNavigated}>O Festival</Link>
      <Link hasNavigated={hasNavigated}>O PAVIO</Link>
      <Link hasNavigated={hasNavigated}>Inscrições</Link>
      <Link hasNavigated={hasNavigated}>Programação</Link>
    </Container>
  );
};

export default Navbar;
