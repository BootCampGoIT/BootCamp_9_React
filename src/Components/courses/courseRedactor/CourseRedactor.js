import React, { useState, useEffect } from "react";
import { getCourses } from "../../../services/coursesAPI";
import Modal from "../../modal/Modal";
import CoursesForm from "../coursesForm/CoursesForm";

import CoursesList from "../coursesList/CoursesList";
import AddNewItem from "./addNewItem/AddNewItem";
import { CourseRedactorContainer } from "./CourseRedactorStyled";

const initialState = {
  courses: [],
  error: "",
};

const CourseRedactor = () => {
  const [state, setState] = useState(() => ({ ...initialState }));
  const [isCourseFormOpen, setCourseFormOpen] = useState(false);

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

  const toggleCourseForm = () => setCourseFormOpen((prev) => !prev);

  // const patchCourse = (newCourse) => {
  //   setState((prev) => ({
  //     ...prev,
  //     courses: prev.courses.map((course) =>
  //       course.id === newCourse.id ? newCourse : course
  //     ),
  //   }));
  // };

  return (
    <CourseRedactorContainer>
      <CoursesList>
        <AddNewItem addItem={toggleCourseForm} />
      </CoursesList>
      {isCourseFormOpen && (
        <Modal closeModal={toggleCourseForm}>
          <div className='courseFormModalWrapper'>
            <CoursesForm closeCourseForm={toggleCourseForm} />
          </div>
        </Modal>
      )}
    </CourseRedactorContainer>
  );
};

export default CourseRedactor;
