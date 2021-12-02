import { User } from "@firebase/auth";
import React from "react";
import { useLogin } from "../../../hooks/useLogin/UseLogin";
import { MenuItem } from "../styles";

import { Container, Logo, DropDownMenu } from "./styles";

export interface Props {
  hasNavigated?: boolean;
  auth: User | null;
}

const SingInSingOutItem: React.FC<Props> = ({ hasNavigated, auth }) => {
  const [handleSingIn, handleSignOut] = useLogin();

  return (
    <Container>
      {auth ? (
        <>
          <MenuItem hasNavigated={hasNavigated}>
            <Logo src={auth.photoURL ?? ""} />
          </MenuItem>
          <DropDownMenu>
            <MenuItem onClick={() => handleSignOut()}>LOGOUT</MenuItem>
          </DropDownMenu>
        </>
      ) : (
        <MenuItem hasNavigated={hasNavigated} onClick={() => handleSingIn()}>
          LOGIN
        </MenuItem>
      )}
    </Container>
  );
};

export default SingInSingOutItem;
