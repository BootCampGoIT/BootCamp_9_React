import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import Filter from "../Components/filter/Filter";

import TasksForm from "../Components/tasks/TasksForm";
import TasksList from "../Components/tasks/TasksList";
import { addValue } from "../redux/tasks/tasksActions";

const TasksPage = () => {

  return (
    <>
      <TasksForm />
      <TasksList />
    </>
  );
};

export default TasksPage;
