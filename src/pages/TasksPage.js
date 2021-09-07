import React, { useState } from "react";
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  setFilter,
} from "../redux/tasks/tasksActions";
import { connect } from "react-redux";

const TasksPage = ({
  isTaskExist,
  tasks,
  filter,
  setFilter,
  addTaskActionCreator,
  deleteTaskActionCreator,
}) => {
  const [data, setData] = useState({
    user: "",
    task: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    isTaskExist(data.user)
      ? alert(`User ${data.user} exist`)
      : addTaskActionCreator({ ...data, id: new Date().toString() });
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
      {/* ----------------- */}
      <label>
        <input
          type='text'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>

      {/* ----------------- */}

      <ul>
        {tasks.map((task) => (
          <li
            style={{
              border: "1px solid black",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
            key={task.id}>
            <span>{task.user}</span>
            <span>{task.task}</span>
            <button
              type='button'
              onClick={() => deleteTaskActionCreator(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const isTaskExist = (user) => {
    return state.tasks.items.some((task) => task.user === user);
  };
  return {
    isTaskExist,
    tasks: state.tasks.items.filter((task) =>
      task.user.toLowerCase().includes(state.tasks.filter.toLowerCase())
    ),
    filter: state.tasks.filter,
  };
};

const mapDispatchToProps = {
  addTaskActionCreator,
  deleteTaskActionCreator,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
