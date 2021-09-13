import { addCourse, getCourses } from "../../services/coursesAPI";
import {
  createCourse,
  getCoursesAction,
  setError,
  setLoader,
} from "./coursesActions";

export const getCoursesOperation = () => async (dispatch, getState) => {
  const tokenId = getState().auth.tokens.tokenId;
  dispatch(setLoader());
  try {
    const courses = await getCourses(tokenId);
    dispatch(getCoursesAction(courses));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export const addCourseOperation = (course) => async (dispatch, getState) => {
  const tokenId = getState().auth.tokens.tokenId;
  dispatch(setLoader());
  try {
    const id = await addCourse(course, tokenId);
    dispatch(createCourse({ id, ...course }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
