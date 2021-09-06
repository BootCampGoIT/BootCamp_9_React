const CREATE_COURSE = "@/courses/createCourse";
const SET_LOADER = "@/courses/setLoader";

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

export { CREATE_COURSE, SET_LOADER };

export { createCourse, setLoader };
