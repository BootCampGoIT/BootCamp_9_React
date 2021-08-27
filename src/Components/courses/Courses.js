import React, { Component } from "react";

import CoursesForm from "./coursesForm/CoursesForm";

import CoursesList from "./coursesList/CoursesList";
import { addCourse, deleteCourse, getCourses } from "../../services/coursesAPI";

class Courses extends Component {
  state = {
    courses: [],
    error: "",
  };

  async componentDidMount() {
    try {
      const courses = await getCourses();
      this.setState({ courses });
    } catch (error) {
      this.setState({ error: "No matches" });
    }
  }

  addNewCourse = async (course) => {
    try {
      const id = await addCourse(course);
      this.setState((prev) => ({
        courses: [...prev.courses, { ...course, id }],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  deleteCourseById = async (id) => {
    try {
      deleteCourse(id);
      this.setState((prev) => ({
        courses: prev.courses.filter((course) => course.id !== id),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <>
        <h2>CoursesForm</h2>
        <CoursesForm addCourse={this.addNewCourse} />
        <hr />
        <h2>CoursesList</h2>
        <CoursesList
          courses={this.state.courses}
          deleteCourse={this.deleteCourseById}
        />
      </>
    );
  }
}

export default Courses;
