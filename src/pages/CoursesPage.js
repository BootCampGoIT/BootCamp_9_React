import React from "react";
import Courses from "../Components/courses/Courses";
import CoursesList from "../Components/courses/coursesList/CoursesList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CourseDetails from "../Components/courses/courseDetails/CourseDetails";
import CoursesForm from "../Components/courses/coursesForm/CoursesForm";

const CoursesPage = () => {
  const match = useRouteMatch();
  return (
    <>
      <CoursesForm />
      <CoursesList />
      {/* <Switch>
        <Route
          path={match.path + `/:courseId`}
          exact
          component={CourseDetails}
        />
        <Route path={match.path} exact component={CoursesList} />
      </Switch> */}
    </>
  );
};

export default CoursesPage;
