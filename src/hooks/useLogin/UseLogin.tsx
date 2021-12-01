import { signInWithPopup, getAuth, signOut, User } from "@firebase/auth";
import { auth, googleProvider } from "../../apis/firebase";

export const useLogin = () => {
  const handleSingIn = (onSuccess?: () => void) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (onSuccess) onSuccess();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = (onSuccess?: () => void) => {
    if (auth) {
      signOut(getAuth())
        .then(() => {
          if (onSuccess) onSuccess();
        })
        .catch((error) => {
          // TODO: treat exception
          // An error happened.
        });
    }
  };

  return [handleSingIn, handleSignOut];
};
