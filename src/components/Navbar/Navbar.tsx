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
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem hasNavigated={hasNavigated}>O Festival</MenuItem>
      <MenuItem hasNavigated={hasNavigated}>O PAVIO</MenuItem>
      <MenuItem hasNavigated={hasNavigated}>
        <Link to="/inscricao-aviso">Inscrição</Link>
      </MenuItem>
      <MenuItem hasNavigated={hasNavigated}>Programação</MenuItem>
      {auth && (
        <MenuItem hasNavigated={hasNavigated}>
          <a onClick={handleSignOut}>Logout</a>
        </MenuItem>
      )}
    </Container>
  );
};

export default memo(Navbar);
