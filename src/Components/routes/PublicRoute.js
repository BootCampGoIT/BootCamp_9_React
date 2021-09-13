import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authIsAuthSelector } from "../../redux/auth/authSelectors";

const PublicRoute = ({ path, exact, component, isRestricted }) => {
  const isAuth = useSelector(authIsAuthSelector);
  
  return isAuth && isRestricted ? (
    <Redirect to='/courses' />
  ) : (
    <Route key={path} path={path} exact={exact} component={component} />
  );
};
export default PublicRoute;
