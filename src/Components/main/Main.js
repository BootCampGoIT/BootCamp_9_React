import { Suspense } from "react";

import { MainContainer } from "./MainStyled";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import LoaderComponent from "../loader/Loader";

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          {mainRoutes.map(({ path, exact, name, component }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              component={component}
              // render={(props) => (
              //   <>
              //     <Section title={name}>
              //       <MyComponent {...props} />
              //     </Section>
              //   </>
              // )}
            />
          ))}
          {/* <Route component={NotFoundPage} /> */}
          {/* <Redirect to={mainRoutes[0].path} /> */}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
