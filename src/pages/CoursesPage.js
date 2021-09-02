import React from "react";
import Courses from "../Components/courses/Courses";
import CoursesList from "../Components/courses/coursesList/CoursesList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CourseDetails from "../Components/courses/courseDetails/CourseDetails";

const CoursesPage = () => {
  const match = useRouteMatch();
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, itaque
        autem! Impedit eaque aspernatur, enim delectus est suscipit facere
        corporis.
      </p>
      <Switch>
        <Route
          path={match.path + `/:courseID`}
          exact
          component={CourseDetails}
        />
        <Route path={match.path} exact component={CoursesList} />
      </Switch>
    </>
  );
};

export default CoursesPage;
