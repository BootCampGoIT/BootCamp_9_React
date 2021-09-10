import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskActionCreator, addValue } from "../../redux/tasks/tasksActions";
import { isTaskExistSelector } from "../../redux/tasks/tasksSelectors";

const TasksForm = () => {
  const [data, setData] = useState({
    user: "",
    task: "",
  });
  const dispatch = useDispatch();

  const isTaskExist = useSelector((state) =>
    isTaskExistSelector(state, data.user)
  );

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    isTaskExist
      ? alert(`User ${data.user} exist`)
      : dispatch(addTaskActionCreator({ ...data, id: new Date().toString() }));
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          User:
          <input
            type='text'
            value={data.user}
            name='user'
            onChange={onHandleChange}
          />
        </label>
        <label>
          Task:
          <input
            type='text'
            value={data.task}
            name='task'
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>Add task</button>
      </form>
    </>
  );
};

export default TasksForm;
