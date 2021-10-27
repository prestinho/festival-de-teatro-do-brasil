import React, { createContext } from "react";
import { Play } from "../../../models/Play/Play";

const HomeContext = createContext({});

export interface Props {
  plays: Play[];
  children: React.ReactNode;
}
const HomeProvider: React.FC<Props> = ({ plays, children }) => {
  return (
    <HomeContext.Provider value={{ plays }}>{children}</HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
