import React, { useState, useEffect } from "react";
import { getCourses } from "../../../services/coursesAPI";
import FolderList from "../../folderList/FolderList";
import CoursesList from "../coursesList/CoursesList";
import AddNewItem from "./addNewItem/AddNewItem";

const initialState = {
  courses: [],
  error: "",
};

const CourseRedactor = () => {
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

  const patchCourse = (newCourse) => {
    setState((prev) => ({
      ...prev,
      courses: prev.courses.map((course) =>
        course.id === newCourse.id ? newCourse : course
      ),
    }));
  };

  return (
    <>
      <CoursesList>
        <AddNewItem />
      </CoursesList>
      {/* <FolderList arr={state.courses} patchCourse={patchCourse}/> */}
    </>
  );
};

export default CourseRedactor;
