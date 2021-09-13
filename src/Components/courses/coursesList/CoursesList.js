import React, { useEffect } from "react";

import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CoursesListStyled } from "./CoursesListStyled";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesOperation } from "../../../redux/courses/coursesOperations";
import { resetError, setFilter } from "../../../redux/courses/coursesActions";
import {
  coursesErrorSelector,
  coursesFilteredItemsSelector,
  coursesFilterSelector,
} from "../../../redux/courses/coursesSelectors";
import Filter from "../../filter/Filter";

const CoursesList = ({ children }) => {
  const dispatch = useDispatch();
  const courses = useSelector(coursesFilteredItemsSelector);
  const error = useSelector(coursesErrorSelector);
  const filter = useSelector(coursesFilterSelector);

  useEffect(() => {
    dispatch(getCoursesOperation());
    return () => {
      error && dispatch(resetError());
    };
  }, [dispatch, error]);

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <CoursesListStyled>
        {children}
        {!error ? (
          <>
            {courses.map((course) => (
              <CoursesListItem {...course} key={course.id} />
            ))}
          </>
        ) : (
          <p>{error}</p>
        )}
      </CoursesListStyled>
    </>
  );
};

export default CoursesList;
