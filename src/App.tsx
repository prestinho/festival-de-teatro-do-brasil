import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { useNavigation } from "./hooks/useNavigation";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subscription from "./pages/Subscription/Subscription";
import SubscriptionLogin from "./pages/SubscriptionLogin/SubscriptionLogin";

import { Route, Switch } from "react-router";
import PrivateRoute from "./routes/ProtectedRoute/PrivateRoute";
// import ProtectedRoute, {
//   ProtectedRouteProps,
// } from "./routes/ProtectedRoute/ProtectedRoute";

const App: React.FC = () => {
  const hasNavigated = useNavigation();

  // const [sessionContext, updateSessionContext] = useSessionContext();

  // const setRedirectPath = (path: string) => {
  //   updateSessionContext({ ...sessionContext, redirectPath: path });
  // };

  // const defaultProtectedRouteProps: ProtectedRouteProps = {
  //   isAuthenticated: !!sessionContext.isAuthenticated,
  //   authenticationPath: "/inscricao-aviso",
  //   redirectPath: sessionContext.redirectPath,
  //   setRedirectPath: setRedirectPath,
  // };

  return (
    <div>
      <GlobalStyles />
      <Navbar hasNavigated={hasNavigated} />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        {/* <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/inscricao"
          component={Subscription}
        /> */}
        <PrivateRoute path="/inscricao" component={Subscription} />
        <Route path="/inscricao-aviso" component={SubscriptionLogin} />
      </Switch>
    </div>
  );
};

export default App;
