import React, { Component } from "react";
import { CourseFormContainer } from "./CoursesFormStyled";

const toDataURL = (element) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
};

const initialState = {
  name: "",
  description: "",
  avatar: "",
  modules: [],
};

class CoursesForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onChangeAvatar = (e) => {
    toDataURL(e.target).then((data) => this.setState({ avatar: data }));
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state);
    this.setState({ ...initialState });
  };
  render() {
    const { name, description, avatar } = this.state;
    return (
      <CourseFormContainer onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={this.onHandleChange}
            name='name'
          />
        </label>
        <label>
          Description:
          <textarea
            name='description'
            value={description}
            onChange={this.onHandleChange}
          />
        </label>
        <div className='avatarContainer'>
          <div className='avatarImageBlock'>
            <img src={avatar} alt={name} className='avatarImage' />
          </div>
          <label>
            Avatar
            <input type='file' name='avatar' onChange={this.onChangeAvatar} />
          </label>
        </div>
        <button type='submit'>Add course</button>
      </CourseFormContainer>
    );
  }
}

export default CoursesForm;
