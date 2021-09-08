import { getCourses } from "../../services/coursesAPI";
import { getCoursesAction, setError, setLoader } from "./coursesActions";

export const getCoursesOperation = () => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const courses = await getCourses();
    dispatch(getCoursesAction(courses));
  } catch (error) {
      dispatch(setError(error.message))
  } finally {
    dispatch(setLoader());
  }
};
