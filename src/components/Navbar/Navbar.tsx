import React, { memo } from "react";

import { Container, Img, Girl, MenuItem } from "./styles";

import GirlImg from "../../assets/imgs/ftb.png";
import { Link } from "react-router-dom";

export interface Props {
  hasNavigated?: boolean;
}

const Navbar: React.FC<Props> = ({ hasNavigated }) => {
  return (
    <Container hasNavigated={hasNavigated}>
      <Girl>
        <Img src={GirlImg} />
      </Girl>
      <MenuItem hasNavigated={hasNavigated}>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem hasNavigated={hasNavigated}>O Festival</MenuItem>
      <MenuItem hasNavigated={hasNavigated}>O PAVIO</MenuItem>
      <MenuItem hasNavigated={hasNavigated}>
        <Link to="/inscricao">Inscrição</Link>
      </MenuItem>
      <MenuItem hasNavigated={hasNavigated}>Programação</MenuItem>
    </Container>
  );
};

export default memo(Navbar);
