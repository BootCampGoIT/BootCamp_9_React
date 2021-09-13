import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authIsAuthSelector } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ path, exact, component }) => {
  const isAuth = useSelector(authIsAuthSelector);
  
  return !isAuth ? (
    <Redirect to='/signin' />
  ) : (
    <Route key={path} path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
