import { MainContainer } from "./MainStyled";
import { Route, Switch, Redirect } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import NotFoundPage from "../../pages/NotFoundPage";
import Section from "../section/Section";

const Main = () => {
  return (
    <MainContainer>
      <Switch>
        {mainRoutes.map(({ path, exact, name, component: MyComponent }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            // component={component}
            render={(props) => (
              <>
                {/* <button type='button' onClick={props.history.goBack}>
                  GoBack
                </button>
                <button type='button' onClick={props.history.goForward}>
                  GoForward
                </button>
                {console.log("props :>> ", props)} */}
                {/* <Section title={name}> */}
                <MyComponent />
                {/* </Section> */}
              </>
            )}
          />
        ))}
        <Route component={NotFoundPage} />
        {/* <Redirect to={mainRoutes[0].path} /> */}
      </Switch>
    </MainContainer>
  );
};

export default Main;
