import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import CourseDetails from "../Components/courses/coursesForm/courseDetails/CourseDetails";
import { adminRoutes } from "../routes/adminRoutes";

const AdminPage = ({ match }) => {
  return (
    <>
      <ul className='navList'>
        {adminRoutes.map((link) => (
          <li key={link.path}>
            <NavLink to={match.url + link.path} exact={link.exact}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        {adminRoutes.map((route) => (
          <Route
            key={route.path}
            path={match.path + route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route
          path='/admin/courses/:courseId'
          exact
          component={CourseDetails}
        />
      </Switch>
    </>
  );
};

export default withRouter(AdminPage);
