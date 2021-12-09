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
import ScrollToTop from "./services/ScrollToTop/ScrollToTop";
import LocalStorageService from "./services/LocalStorageService/LocalStorageService";
import SubscriptionsManager from "./pages/SubscriptionsManager/SubscriptionsManager";
import { useOncePerSession } from "./hooks/useOncePerSession/useOncePerSession";
import Festival from "./pages/Festival/Festival";
import AboutUs from "./pages/AboutUs/AboutUs";

const App: React.FC = () => {
  const hasNavigated = useNavigation();

  useOncePerSession(LocalStorageService.clear);

  return (
    <PlaysProvider>
      <GlobalStyles />
      <Navbar hasNavigated={hasNavigated} />
      <ScrollToTop />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/o-festival" component={Festival} />
        <Route path="/a-pavio" component={AboutUs} />
        <Route path="/inscricao-aviso" component={SubscriptionLogin} />
        <Route path="/espetaculo/:playId" component={PlayDetails} />

        <PrivateRoute path="/inscricao" component={Subscription} />
        <PrivateRoute
          path="/inscricao-realizada"
          component={SubscriptionDone}
        />
        <PrivateRoute
          path="/editar-inscricao/:playId"
          component={Subscription}
        />
        <PrivateRoute
          path="/minhas-inscricoes"
          component={SubscriptionsManager}
        />
      </Switch>
    </PlaysProvider>
  );
};

export default App;
