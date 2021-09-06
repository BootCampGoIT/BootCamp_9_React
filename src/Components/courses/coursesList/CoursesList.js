import React, { useState, useEffect, useContext } from "react";
import { getCourses } from "../../../services/coursesAPI";
import { TransferContent } from "../../App";
import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CoursesListStyled } from "./CoursesListStyled";
import { useSelector } from "react-redux";

const initialState = {
  courses: [],
  error: "",
};

const CoursesList = ({
  courses = null,
  deleteCourse = null,
  children = null,
}) => {
  const [state, setState] = useState(() => ({ ...initialState }));
  const transferData = useContext(TransferContent);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const courses = await getCourses();
        setState((prev) => ({ ...prev, courses }));
        transferData.setContent({ courses });
      } catch (error) {
        setState((prev) => ({ ...prev, error: "No matches" }));
      }
    };
    if (!courses && !transferData.transferContent?.courses) {
      getAllCourses();
    } else
      setState((prev) => ({
        ...prev,
        courses: transferData.transferContent?.courses,
      }));
  }, [courses]);

  const selectData = () => courses || state.courses;
  return (
    <CoursesListStyled>
      {children}
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
