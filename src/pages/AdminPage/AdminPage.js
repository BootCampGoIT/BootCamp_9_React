import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import CourseDetails from "../../Components/courses/coursesForm/courseDetails/CourseDetails";
import { adminRoutes } from "../../routes/adminRoutes";
import { AdminPageContainer } from "./AdminPageStyled";

const AdminPage = ({ match }) => {
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
    </AdminPageContainer>
  );
};

export default withRouter(AdminPage);
