import React, { memo } from "react";

import { Container, Img, Girl, MenuItem } from "./styles";

import GirlImg from "../../assets/imgs/ftb.png";
import { Link } from "react-router-dom";

import { User, signOut, getAuth } from "@firebase/auth";
import { useAuthContext } from "../../hooks/useAuthContext";
export interface Props {
  hasNavigated?: boolean;
}

const Navbar: React.FC<Props> = ({ hasNavigated }) => {
  const auth: User | null = useAuthContext();

  const handleSignOut = () => {
    if (auth) {
      signOut(getAuth())
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };
  return (
    <Container hasNavigated={hasNavigated}>
      <Girl>
        <Img src={GirlImg} />
      </Girl>
      <MenuItem hasNavigated={hasNavigated}>
        <Link to="/" href="/">
          Home
        </Link>
      </MenuItem>
      <MenuItem hasNavigated={hasNavigated}>O Festival</MenuItem>
      <MenuItem hasNavigated={hasNavigated}>O PAVIO</MenuItem>
      <MenuItem hasNavigated={hasNavigated}>
        <Link to="/minhas-inscricoes" href="/minhas-inscricoes">
          Inscrição
        </Link>
      </MenuItem>
      <MenuItem hasNavigated={hasNavigated}>Programação</MenuItem>
      {auth && (
        <MenuItem hasNavigated={hasNavigated}>
          <span onClick={handleSignOut}>Logout</span>
        </MenuItem>
      )}
    </Container>
  );
};

export default memo(Navbar);
