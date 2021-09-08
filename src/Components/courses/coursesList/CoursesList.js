import React, { useEffect } from "react";

import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CoursesListStyled } from "./CoursesListStyled";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesOperation } from "../../../redux/courses/coursesOperations";
import { resetError } from "../../../redux/courses/coursesActions";

const CoursesList = ({ children }) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.items);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(getCoursesOperation());
    return () => {
      error && dispatch(resetError());
    };
  }, [dispatch, error]);

  return (
    <CoursesListStyled>
      {!error ? (
        <>
          {children}
          {courses.map((course) => (
            <CoursesListItem {...course} key={course.id} />
          ))}
        </>
      ) : (
        <p>{error}</p>
      )}
    </CoursesListStyled>
  );
};

export default CoursesList;
