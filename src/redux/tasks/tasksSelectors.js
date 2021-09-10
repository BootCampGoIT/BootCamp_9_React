// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const tasksFilterSelector = (state) => state.tasks.filter;

export const tasksItemsSelector = (state) => state.tasks.items;

export const isTaskExistSelector = (state, user) =>
  state.tasks.items.some((task) => task.user === user);

export const tasksFilteredItemsSelector = (state) =>
  state.tasks.items.filter((task) =>
    task.user.toLowerCase().includes(state.tasks.filter.toLowerCase())
  );

export const memoTasksFilteredItemsSelector = createSelector(
  [tasksItemsSelector, tasksFilterSelector],
  (tasks, filter) =>
    tasks.filter((task) =>
      task.user.toLowerCase().includes(filter.toLowerCase())
    )
);

export const memoFilter = createSelector(
  [tasksFilterSelector],
  (filter) => filter
);
