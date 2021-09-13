import { Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import LoaderComponent from "../loader/Loader";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import NotFoundPage from "../../pages/NotFoundPage";

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            )
          )}
          <Route component={NotFoundPage} />
          {/* <Redirect to={mainRoutes[0].path} /> */}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;

// { path, exact, name, component }
