import { createAction } from "@reduxjs/toolkit";

export const addTaskActionCreator = createAction("tasks/addTask");
export const deleteTaskActionCreator = createAction("tasks/deleteTask");
export const setFilter = createAction("setFilter");

export const addValue = createAction("setValue");
