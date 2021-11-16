import React from "react";
import { Google } from "@styled-icons/evaicons-solid/Google";

import { signInWithPopup, User } from "firebase/auth";
import { auth, googleProvider } from "../../../../apis/firebase";

import { useHistory } from "react-router";

import { GoogleLoginButton, LoggedButton } from "./styles";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export interface Props {}

const GoToSubscriptionButton: React.FC<Props> = () => {
  const history = useHistory();

  const user: User | null = useAuthContext();

  const singIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        redirectToSubscription();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const redirectToSubscription = () => {
    history.push("/inscricao");
  };

  return (
    <div>
      {user ? (
        <LoggedButton onClick={redirectToSubscription}>Fazer a inscrição</LoggedButton>
      ) : (
        <GoogleLoginButton onClick={singIn}>
          <Google size="2rem" /> | Realizar login e fazer a inscrição
        </GoogleLoginButton>
      )}
    </div>
  );
};

export default GoToSubscriptionButton;
