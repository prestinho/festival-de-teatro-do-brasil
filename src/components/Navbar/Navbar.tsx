import React, { memo } from "react";

import { Container, Img, Girl, MenuItem } from "./styles";

import GirlImg from "../../assets/imgs/ftb.png";
import { Link } from "react-router-dom";

import { User } from "@firebase/auth";
import { useAuthContext } from "../../hooks/useAuthContext";
import SingInSingOutItem from "./SingInSingOutItem/SingInSingOutItem";
export interface Props {
  hasNavigated?: boolean;
}

const Navbar: React.FC<Props> = ({ hasNavigated }) => {
  const auth: User | null = useAuthContext();

  const MenuItemNav: React.FC = (props) => {
    return <MenuItem hasNavigated={hasNavigated}>{props.children}</MenuItem>;
  };

  return (
    <Container hasNavigated={hasNavigated}>
      <Girl>
        <Img src={GirlImg} />
      </Girl>
      <MenuItemNav>
        <Link to="/" href="/">
          Home
        </Link>
      </MenuItemNav>
      <MenuItemNav>O Festival</MenuItemNav>
      <MenuItemNav>O PAVIO</MenuItemNav>
      <MenuItemNav>
        {auth ? (
          <Link to="/minhas-inscricoes" href="/minhas-inscricoes">
            Minhas Inscrições
          </Link>
        ) : (
          <Link to="/inscricao-aviso" href="/inscricao-aviso">
            Inscrever Espetáculo
          </Link>
        )}
      </MenuItemNav>
      <MenuItemNav>Programação</MenuItemNav>

      <SingInSingOutItem auth={auth} hasNavigated={hasNavigated} />
    </Container>
  );
};

export default memo(Navbar);
