import axios from "axios";

export const getCourses = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `/courses.json`
    );
    const courses = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    return courses;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export const addCourse = async (course) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + `/courses.json`,
      course
    );
    return response.data.name;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export const deleteCourse = async (id) => {
  try {
    await axios.delete(process.env.REACT_APP_BASE_URL + `/courses/${id}.json`);
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};
