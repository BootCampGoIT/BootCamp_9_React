import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGroup, setError } from "../../../redux/groups/groupsActions";
import { addGroupsOperation } from "../../../redux/groups/groupsOperations";
import { GroupFormContainer } from "./GroupFormStyled";

const initialState = {
  name: "",
  students: [],
};

const GroupsForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.items);

  const onHandleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    !groups.some((group) => group.name === state.name)
      ? dispatch(addGroupsOperation(state))
      : dispatch(setError("Group already exist"));
  };
  return (
    <GroupFormContainer onSubmit={onHandleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={state.name}
          name='name'
          onChange={onHandleChange}
          placeholder='example: BootCamp 1'
        />
      </label>

      <button type='submit'>Create group</button>
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
