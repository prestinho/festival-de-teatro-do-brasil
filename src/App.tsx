import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { useNavigation } from "./hooks/useNavigation";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subscription from "./pages/Subscription/Subscription";
import Login from "./pages/Login/Login";

import { Route, Switch } from "react-router";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./routes/ProtectedRoute/ProtectedRoute";
import { useSessionContext } from "./contexts/SessionContextProvider";

const App: React.FC = () => {
  const hasNavigated = useNavigation();

  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/login",
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
  };

  return (
    <div>
      <GlobalStyles />
      <Navbar hasNavigated={hasNavigated} />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/inscricao"
          component={Subscription}
        />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
