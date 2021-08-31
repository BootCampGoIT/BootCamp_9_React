import React, { useState, useEffect } from "react";

import CoursesForm from "./coursesForm/CoursesForm";

import CoursesList from "./coursesList/CoursesList";
import { addCourse, deleteCourse, getCourses } from "../../services/coursesAPI";

const initialState = {
  courses: [],
  error: "",
};

const Courses = () => {
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
    getAllCourses();
  }, []);

  const addNewCourse = async (course) => {
    try {
      const id = await addCourse(course);
      setState((prev) => ({
        ...prev,
        courses: [...prev.courses, { ...course, id }],
      }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.message }));
    }
  };

  const deleteCourseById = async (id) => {
    try {
      deleteCourse(id);
      setState((prev) => ({
        ...prev,
        courses: prev.courses.filter((course) => course.id !== id),
      }));
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.message }));
    }
  };
  return (
    <>
      <h2>CoursesForm</h2>
      <CoursesForm addCourse={addNewCourse} />
      <hr />
      <h2>CoursesList</h2>
      <CoursesList
        courses={state.courses || []}
        deleteCourse={deleteCourseById}
      />
    </>
  );
};

export default Courses;


