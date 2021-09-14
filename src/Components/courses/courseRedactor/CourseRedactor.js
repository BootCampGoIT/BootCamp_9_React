import React, { useState } from "react";
import AddNewItem from "../../addNewItem/AddNewItem";
import Modal from "../../modal/Modal";
import CoursesForm from "../coursesForm/CoursesForm";
import CoursesList from "../coursesList/CoursesList";

import { CourseRedactorContainer } from "./CourseRedactorStyled";

const CourseRedactor = () => {
  const [isCourseFormOpen, setCourseFormOpen] = useState(false);

  const toggleCourseForm = () => setCourseFormOpen((prev) => !prev);

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
