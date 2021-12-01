import React from "react";
import { Google } from "@styled-icons/evaicons-solid/Google";

import { User } from "firebase/auth";

import { useHistory } from "react-router";

import { GoogleLoginButton, LoggedButton } from "./styles";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useLogin } from "../../../../hooks/useLogin/UseLogin";

export interface Props {}

const GoToSubscriptionButton: React.FC<Props> = () => {
  const history = useHistory();

  const user: User | null = useAuthContext();

  const [handleSingIn] = useLogin();

  const redirectToSubscription = () => {
    history.push("/inscricao");
  };

  return (
    <div>
      {user ? (
        <LoggedButton onClick={redirectToSubscription}>Fazer a inscrição</LoggedButton>
      ) : (
        <GoogleLoginButton onClick={() => handleSingIn(redirectToSubscription)}>
          <Google size="2rem" /> | Realizar login e fazer a inscrição
        </GoogleLoginButton>
      )}
    </div>
  );
};

export default GoToSubscriptionButton;
