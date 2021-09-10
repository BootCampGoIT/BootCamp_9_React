const CREATE_COURSE = "@/courses/createCourse";
const SET_LOADER = "@/courses/setLoader";
const GET_COURSES = "@/courses/getCourses";
const SET_ERROR = "@/courses/setError";
const RESET_ERROR = "@/courses/resetError";
const SET_FILTER = "@/courses/setFilter";

const createCourse = (course) => {
  return {
    type: CREATE_COURSE,
    payload: course,
  };
};

const setLoader = () => {
  return {
    type: SET_LOADER,
  };
};

const getCoursesAction = (courses) => ({
  type: GET_COURSES,
  payload: courses,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

const resetError = () => ({
  type: RESET_ERROR,
});
const setFilter = (value) => ({
  type: SET_FILTER,
  payload: value,
});

export {
  CREATE_COURSE,
  SET_LOADER,
  GET_COURSES,
  SET_ERROR,
  RESET_ERROR,
  SET_FILTER,
};

export {
  createCourse,
  setLoader,
  getCoursesAction,
  setError,
  resetError,
  setFilter,
};
