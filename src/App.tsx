import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import { useNavigation } from './hooks/useNavigation';

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App: React.FC = () => {

  const hasNavigated = useNavigation();

  return (
    <>
      <GlobalStyles />
      <Navbar hasNavigated={hasNavigated}/>
      <Home />
    </>
  );
}

export default App;
