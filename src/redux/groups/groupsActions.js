import { createAction } from "@reduxjs/toolkit";

const getGroups = createAction("@groups/getGroups");
const createGroup = createAction("@groups/createGroup");
const setError = createAction("@groups/setError");
const resetError = createAction("@groups/resetError");
const setLoader = createAction("@groups/setLoader");
const setFilter = createAction("@groups/setFilter");

export { createGroup, setError, resetError, getGroups, setLoader, setFilter };
