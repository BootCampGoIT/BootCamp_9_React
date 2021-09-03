import React, { Suspense, useEffect } from "react";
import {
  NavLink,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import LoaderComponent from "../../Components/loader/Loader";
import { adminRoutes } from "../../routes/adminRoutes";
import { AdminPageContainer } from "./AdminPageStyled";
import CourseDetails from "../../Components/courses/courseDetails/CourseDetails";

const AdminPage = () => {
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    history.replace(`${match.url}/courses`);
  }, [history, match.url]);

  return (
    <AdminPageContainer>
      <ul className='navList'>
        {adminRoutes.map((link) => (
          <li key={link.path} className='navItem'>
            <NavLink
              to={match.url + link.path}
              exact={link.exact}
              className='navLink'
              activeClassName='activeNavLink'>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route
            path={match.path + "/courses/:courseId"}
            component={CourseDetails}
          />
          {adminRoutes.map((route) => (
            <Route
              key={route.path}
              path={match.path + route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </AdminPageContainer>
  );
};

export default AdminPage;
