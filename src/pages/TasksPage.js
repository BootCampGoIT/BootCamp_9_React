import React, { useState, useMemo } from "react";

import TasksForm from "../Components/tasks/TasksForm";
import TasksList from "../Components/tasks/TasksList";

const TasksPage = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const countWithCircle = () => {
    setCount((prev) => prev + 1);
  };

  const result = useMemo(() => {
    for (let i = 0; i < 999999999; i += 1) i++;
    console.log("getCount");
    return count;
  }, [count]);

  return (
    <>
      <button type='button' onClick={countWithCircle}>
        AddCount
      </button>
      <p>{result}</p>
      <hr />
      <button type='button' onClick={() => setOpen((prev) => !prev)}>
        {isOpen ? "close" : "Open"}
      </button>

      {isOpen && <TasksForm />}

      <TasksList />
    </>
  );
};

export default TasksPage;

// let currentValue = { x: 10, getResult: console.log };
// // ==========================
// function memo(currentValue) {
//   return function (newValue = currentValue) {
//     if (currentValue === newValue) {
//       console.log(newValue.x);
//     } else {
//       for (let i = 0; i < 999999999; i += 1) i++;
//       console.log("newValue");
//       console.log(newValue.x);
//       currentValue = newValue;
//     }
//   };
// }

// // =====================
// const data = memo(currentValue);

// data();
// data({ x: 11, getResult: console.log });
// data();
// data();
// data({ x: 12, getResult: console.log });
// data();
// data();
// data();
