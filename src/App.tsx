import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { useNavigation } from "./hooks/useNavigation";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subscription from "./pages/Subscription/Subscription";

const App: React.FC = () => {
  const hasNavigated = useNavigation();

  return (
    <div>
      <GlobalStyles />
      <Navbar hasNavigated={hasNavigated} />
      <Home />
    </div>
  );
};

export default App;
