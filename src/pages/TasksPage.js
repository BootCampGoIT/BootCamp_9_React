import React, { useState } from "react";

import TasksForm from "../Components/tasks/TasksForm";
import TasksList from "../Components/tasks/TasksList";

const TasksPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && <TasksForm />}

      <TasksList />
    </>
  );
};

export default TasksPage;
