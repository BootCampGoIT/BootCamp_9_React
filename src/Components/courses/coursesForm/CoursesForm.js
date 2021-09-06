import React, { useState, useContext } from "react";
import { createCourse, setLoader } from "../../../redux/courses/coursesActions";
import { CustomLanguage } from "../../App";

import { CourseFormContainer } from "./CoursesFormStyled";
import { connect } from "react-redux";
import { addCourse } from "../../../services/coursesAPI";
import LoaderComponent from "../../loader/Loader";

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

const CoursesForm = ({ createCourse, setLoader, isLoading }) => {
  const [course, setCourse] = useState({ ...initialState });
  const { language } = useContext(CustomLanguage);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeAvatar = (e) => {
    toDataURL(e.target).then((data) =>
      setCourse((prev) => ({ ...prev, avatar: data }))
    );
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader();
      const id = await addCourse(course);
      createCourse({ id, ...course });
    } catch (error) {
    } finally {
      setLoader();
    }

    setCourse({ ...initialState });
  };

  return (
    <>
      {isLoading && <LoaderComponent />}
      <CourseFormContainer onSubmit={onHandleSubmit}>
        <div className='coursesFormAvatarContainer'>
          <div className='avatarImageBlock'>
            {course.avatar && (
              <img
                src={course.avatar}
                alt={course.name}
                className='avatarImage'
              />
            )}
          </div>

          <div className='courseFormAvatarBlock'>
            <label className='courseFormAvatarButton'>
              <input
                className='courseFormAvatarFile'
                name='avatar'
                type='file'
                onChange={onChangeAvatar}
              />
              <span className='courseFormAvatarButtonText'>Add image</span>
            </label>
          </div>
        </div>
        <label className='coursesFormLabel'>
          {language.courses.courseForm["name"]}
          <input
            type='text'
            value={course.name}
            onChange={onHandleChange}
            name='name'
            className='coursesFormInput'
          />
        </label>
        <label className='coursesFormLabel'>
          {language.courses.courseForm["description"]}
          <textarea
            name='description'
            value={course.description}
            onChange={onHandleChange}
            className='coursesFormArea'
          />
        </label>
        <button type='submit'>
          {language.courses.courseForm["addCourse"]}
        </button>
      </CourseFormContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.courses.isLoading,
  };
};

export default connect(mapStateToProps, { createCourse, setLoader })(
  CoursesForm
);

// class CoursesForm extends Component {
//   state = {
//     ...initialState,
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onChangeAvatar = (e) => {
//     toDataURL(e.target).then((data) => this.setState({ avatar: data }));
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addCourse(this.state);
//     this.setState({ ...initialState });
//   };
//   render() {
//     const { name, description, avatar } = this.state;
//     return (
//       <CourseFormContainer onSubmit={this.onHandleSubmit}>
//         <div className='avatarContainer'>
//           <div className='avatarImageBlock'>
//             <img src={avatar} alt={name} className='avatarImage' />
//           </div>
//           <label className='coursesFormLabel'>
//             Avatar
//             <input type='file' name='avatar' onChange={this.onChangeAvatar} className="coursesFormInput" />
//           </label>
//         </div>
//         <label className='coursesFormLabel'>
//           Name:
//           <input
//             type='text'
//             value={name}
//             onChange={this.onHandleChange}
//             name='name'
//             className='coursesFormInput'
//           />
//         </label>
//         <label className='coursesFormLabel'>
//           Description:
//           <textarea
//             name='description'
//             value={description}
//             onChange={this.onHandleChange}
//             className='coursesFormArea'
//           />
//         </label>
//         <button type='submit'>Add course</button>
//       </CourseFormContainer>
//     );
//   }
// }

// export default CoursesForm;
