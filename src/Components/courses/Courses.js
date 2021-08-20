import React, { Component } from "react";
import Modal from "../modal/Modal";
import CoursesForm from "./coursesForm/CoursesForm";
import { v4 as uuidv4 } from "uuid";
import CoursesList from "./coursesList/CoursesList";

class Courses extends Component {
  state = {
    courses: [],
    // isModalOpen: false,
  };

  addCourse = (course) => {
    this.setState((prev) => ({
      courses: [...prev.courses, { ...course, id: uuidv4() }],
    }));
  };

  //   toggleModal = () => {
  //     this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
  //   };

  render() {
    return (
      <>
        <CoursesForm addCourse={this.addCourse} />
        <CoursesList courses={this.state.courses} />
        {/* <button type='button' onClick={this.toggleModal}>
          {this.state.isModalOpen ? "Close" : "Open"}
        </button>
        {this.state.isModalOpen && (
          <Modal closeModal={this.toggleModal}>
            <p>Lorem ipsum dolor sit amet.</p>
          </Modal>
        )} */}
      </>
    );
  }
}

export default Courses;
