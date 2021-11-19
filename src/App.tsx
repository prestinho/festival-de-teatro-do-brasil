import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { useNavigation } from "./hooks/useNavigation";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subscription from "./pages/Subscription/Subscription";
import SubscriptionLogin from "./pages/SubscriptionLogin/SubscriptionLogin";

import { Route, Switch } from "react-router";
import PrivateRoute from "./routes/ProtectedRoute/PrivateRoute";
import SubscriptionDone from "./pages/SubscriptionDone/SubscriptionDone";
import PlayDetails from "./pages/PlayDetails/PlayDetails";
import PlaysProvider from "./contexts/PlaysProvider";

const App: React.FC = () => {
  const hasNavigated = useNavigation();

  return (
    <PlaysProvider>
      <GlobalStyles />
      <Navbar hasNavigated={hasNavigated} />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <PrivateRoute path="/inscricao" component={Subscription} />
        <Route path="/inscricao-aviso" component={SubscriptionLogin} />
        <PrivateRoute path="/inscricao-realizada" component={SubscriptionDone} />

        <Route path="/espetaculo/:playId" component={PlayDetails} />
      </Switch>
    </PlaysProvider>
  );
};

export default App;
