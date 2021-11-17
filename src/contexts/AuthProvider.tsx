import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../apis/firebase";

export const AuthContext = createContext<User | null>(null);

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
