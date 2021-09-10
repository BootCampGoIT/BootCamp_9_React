import React from "react";
import { useSelector } from "react-redux";
import {
  deleteTaskActionCreator,
  setFilter,
} from "../../redux/tasks/tasksActions";
import {
  memoFilter,
  memoTasksFilteredItemsSelector,
} from "../../redux/tasks/tasksSelectors";
import Filter from "../filter/Filter";

const TasksList = () => {
  const tasks = useSelector(memoTasksFilteredItemsSelector);
  const filter = useSelector(memoFilter);
  const deleteTask = (e) => {
    deleteTaskActionCreator(e.target.id);
  };

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
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
            <button type='button' id={task.id} onClick={deleteTask}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
