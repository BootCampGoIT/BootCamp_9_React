import { Suspense } from "react";

import { MainContainer } from "./MainStyled";
import { Route, Switch, Redirect } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import NotFoundPage from "../../pages/NotFoundPage";
import Section from "../section/Section";
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
              //     {/* <button type='button' onClick={props.history.goBack}>
              //       GoBack
              //     </button>
              //     <button type='button' onClick={props.history.goForward}>
              //       GoForward
              //     </button>
              //     {console.log("props :>> ", props)} */}
              //     {/* <Section title={name}> */}
              //     <MyComponent />
              //     {/* </Section> */}
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
