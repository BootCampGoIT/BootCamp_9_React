import React from "react";
import Courses from "../Components/courses/Courses";
import CoursesList from "../Components/courses/coursesList/CoursesList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CourseDetails from "../Components/courses/courseDetails/CourseDetails";

const CoursesPage = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          path={match.path + `/:courseId`}
          exact
          component={CourseDetails}
        />
        <Route path={match.path} exact component={CoursesList} />
      </Switch>
    </>
  );
};

export default CoursesPage;
