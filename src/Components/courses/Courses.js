import React, { Component } from "react";

import CoursesForm from "./coursesForm/CoursesForm";

import CoursesList from "./coursesList/CoursesList";
import axios from "axios";

class Courses extends Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://bc-9-platform-default-rtdb.firebaseio.com/courses.json`
      );
      console.log("response :>> ", response);
      const courses = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      this.setState({ courses });
    } catch (error) {
      console.log(error);
    }

    // -------------------- localStorage -------------------------
    const courses = JSON.parse(localStorage.getItem("courses"));
    courses && this.setState({ courses: courses });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return {positopn: 300}
  // }

  componentDidUpdate(prevProps, prevState, snapShot) {
    // -------------------- localStorage -------------------------
    localStorage.setItem("courses", JSON.stringify(this.state.courses));
  }

  addCourse = async (course) => {
    try {
      const response = await axios.post(
        `https://bc-9-platform-default-rtdb.firebaseio.com/courses.json`,
        course
      );

      this.setState((prev) => ({
        courses: [...prev.courses, { ...course, id: response.data.name }],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  deleteCourse = async (id) => {
    try {
      await axios.delete(
        `https://bc-9-platform-default-rtdb.firebaseio.com/courses/${id}.json`
      );
      this.setState((prev) => ({
        courses: prev.courses.filter((course) => course.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h2>CoursesForm</h2>
        <CoursesForm addCourse={this.addCourse} />
        <h2>CoursesList</h2>
        <CoursesList
          courses={this.state.courses}
          deleteCourse={this.deleteCourse}
        />
      </>
    );
  }
}

export default Courses;
