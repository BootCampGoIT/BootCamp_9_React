import axios from "axios";

export const getCourses = async (tokenId) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `/courses.json?auth=${tokenId}`
    );
    const courses = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    return courses;
  } catch (error) {
    if (error.response.status === 404) {
      throw new Error("!!!!!!!!!!!!!!!!!!!!!");
    }
  }
};

export const getCourseByID = async (id) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `/courses/${id}.json`
    );
    return { ...response.data, id };
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export const patchCourseByID = async (courseEdited) => {
  try {
    return await axios.patch(
      process.env.REACT_APP_BASE_URL + `/courses/${courseEdited.id}.json`,
      { name: courseEdited.name }
    );
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export const addCourse = async (course, tokenId) => {;
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + `/courses.json?auth=${tokenId}`,
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
