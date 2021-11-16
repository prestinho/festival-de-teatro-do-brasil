import { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { User } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";

type PrivateRouteProps = {
  path: RouteProps["path"];
  component: React.ElementType;
};

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  ...routeProps
}) => {
  const user: User | null = useContext(AuthContext);
  return (
    <Route
      {...routeProps}
      render={(props) => (user ? <Component /> : <Redirect to={"/"} />)}
    />
  );
};

export default PrivateRoute;
