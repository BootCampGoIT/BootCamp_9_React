import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGroup, setError } from "../../../redux/groups/groupsActions";
import { addGroupOperation } from "../../../redux/groups/groupsOperations";
import { GroupFormContainer } from "./GroupFormStyled";

const toDataURL = (element) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
};

const initialState = {
  avatar: "",
  name: "",
  description: "",
  students: [],
};

const GroupsForm = () => {
  const dispatch = useDispatch();
  const [group, setGroup] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setGroup((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeAvatar = (e) => {
    toDataURL(e.target).then((data) =>
      setGroup((prev) => ({ ...prev, avatar: data }))
    );
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGroupOperation(group));
  };
  return (
    <GroupFormContainer onSubmit={onHandleSubmit}>
      <div className='groupsFormAvatarContainer'>
        <div className='avatarImageBlock'>
          {group.avatar && (
            <img src={group.avatar} alt={group.name} className='avatarImage' />
          )}
        </div>

        <div className='groupFormAvatarBlock'>
          <label className='groupFormAvatarButton'>
            <input
              className='groupFormAvatarFile'
              name='avatar'
              type='file'
              onChange={onChangeAvatar}
            />
            <span className='groupFormAvatarButtonText'>Add image</span>
          </label>
        </div>
      </div>
      <label className='groupsFormLabel'>
        Name
        <input
          type='text'
          value={group.name}
          onChange={onHandleChange}
          name='name'
          className='groupsFormInput'
        />
      </label>
      <label className='groupsFormLabel'>
        Description
        <textarea
          name='description'
          value={group.description}
          onChange={onHandleChange}
          className='groupsFormArea'
        />
      </label>
      <button type='submit'>Add group</button>
    </GroupFormContainer>
  );
};

export default GroupsForm;

// class GroupsForm extends Component {
//   state = {
//     name: "",
//     students: [],
//   };

//   onHandleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     !this.props.groups.some((group) => group.name === this.state.name)
//       ? this.props.createGroup(this.state)
//       : this.props.setError("Group already exist");
//   };

//   render() {
//     return (
//       <GroupFormContainer onSubmit={this.onHandleSubmit}>
//         <label>
//           Name:
//           <input
//             type='text'
//             value={this.state.name}
//             name='name'
//             onChange={this.onHandleChange}
//             placeholder='example: BootCamp 1'
//           />
//         </label>

//         <button type='submit'>Create group</button>
//       </GroupFormContainer>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     groups: state.groups.items,
//   };
// };

// export default connect(mapStateToProps, { createGroup, setError })(GroupsForm);
