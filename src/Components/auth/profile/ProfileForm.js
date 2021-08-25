import React, { Component } from "react";
import { ProfileFormContainer } from "./ProfileFormStyled";

const status = ["noStatus", "frontend", "backend", "fullstack"];

class ProfileForm extends Component {
  state = {
    avatar: "",
    firstName: "",
    lastName: "",
    birthday: "",
    sex: "male",
    email: "",
    phone: "",
    telegram: "",
    git: "",
    status: status[0],
    about: "",
    stacks: [],
    isLoading: false,
  };

  toDataURL = (element) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  };

  isStackIncludes = (value) => {
    return this.state.stacks.includes(value);
  };

  setAvatar = (e) => {
    this.toDataURL(e.target).then((avatar) => this.setState({ avatar }));
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  setStacks = (e) => {
    const { value, type } = e.target;
    if (type === "checkbox") {
      if (this.state.stacks.includes(value)) {
        this.setState((prev) => ({
          stacks: [...prev.stacks.filter((stack) => stack !== value)],
        }));
      } else {
        this.setState((prev) => ({ stacks: [...prev.stacks, value] }));
      }
    }
  };

  render() {
    return (
      <ProfileFormContainer>
        <form>
          <label>
            FirstName
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            LastName
            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            FirstName
            <input
              type='date'
              name='birthday'
              value={this.state.birthday}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Email
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.onHandleChange}
            />
          </label>
          <div className='checkBoxContainer'>
            <label>
              HTML
              <input
                type='checkbox'
                value='html'
                checked={this.isStackIncludes("html")}
                onChange={this.setStacks}
              />
            </label>
            <label>
              Java Script
              <input
                type='checkbox'
                value='javascript'
                checked={this.isStackIncludes("javascript")}
                onChange={this.setStacks}
              />
            </label>
            <label>
              React
              <input
                type='checkbox'
                value='react'
                checked={this.isStackIncludes("react")}
                onChange={this.setStacks}
              />
            </label>
            <label>
              Native
              <input
                type='checkbox'
                value='reactNative'
                checked={this.isStackIncludes("reactNative")}
                onChange={this.setStacks}
              />
            </label>
          </div>
          <label>
            {this.state.isLoading ? (
              <p>...loading</p>
            ) : (
              <div className='profileAvatarContainer'>
                <img
                  src={this.state.avatar}
                  alt={this.state.firstName || "no user"}
                  className='profileAvatar'
                />
              </div>
            )}
            <input type='file' onChange={this.setAvatar} />
          </label>
          <div className='radiogroupContainer'>
            <label>
              Male
              <input
                type='radio'
                name='sex'
                checked={this.state.sex === "male"}
                onChange={this.onHandleChange}
                value='male'
              />
            </label>
            <label>
              Female
              <input
                type='radio'
                name='sex'
                checked={this.state.sex === "female"}
                onChange={this.onHandleChange}
                value='female'
              />
            </label>
          </div>

          <label>
            Status
            <select name='status' onChange={this.onHandleChange}>
              {status.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </form>
      </ProfileFormContainer>
    );
  }
}

export default ProfileForm;

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// arr2.push(6);
// console.log(arr1);

// const arr1 = [
//   { name: "Alex", id: 1 },
//   { name: "Nikita", id: 2 },
// ];

// const arr2 = JSON.parse(JSON.stringify([...arr1]));
// arr2.push({ name: "Boris", id: 3 });
// arr2[0].name = "Andrii";
// console.log(arr1);
// console.log(arr2);
