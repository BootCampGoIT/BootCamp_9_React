import { addCourse, getCourses } from "../../services/coursesAPI";
import { createCourse, getCoursesAction, setError, setLoader } from "./coursesActions";

export const getCoursesOperation = () => async (dispatch) => {
  dispatch(setLoader());
  try {
    const courses = await getCourses();
    dispatch(getCoursesAction(courses));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export const addCourseOperation = (course) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const id = await addCourse(course);
    dispatch(createCourse({id, ...course}));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
