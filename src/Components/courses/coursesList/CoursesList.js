import React, { useState, useEffect } from "react";
import { getCourses } from "../../../services/coursesAPI";

import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CoursesListStyled } from "./CoursesListStyled";

const initialState = {
  courses: [],
  error: "",
};

const CoursesList = ({ courses = null, deleteCourse = null }) => {
  const [state, setState] = useState(() => ({ ...initialState }));

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const courses = await getCourses();
        setState((prev) => ({ ...prev, courses }));
      } catch (error) {
        setState((prev) => ({ ...prev, error: "No matches" }));
      }
    };
    !courses && getAllCourses();
  }, [courses]);

  const selectData = () => courses || state.courses;

  return (
    <CoursesListStyled>
      {selectData().map((course) => (
        <CoursesListItem
          {...course}
          deleteCourse={deleteCourse}
          key={course.id}
        />
      ))}
    </CoursesListStyled>
  );
};

export default CoursesList;
