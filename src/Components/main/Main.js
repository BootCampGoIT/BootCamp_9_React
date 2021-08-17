import CoursesList from "./coursesList/CoursesList";
import PropTypes from "prop-types";
const Main = ({ courses }) => {
  return (
    <main>
      <CoursesList courses={courses} />
    </main>
  );
};

export default Main;

CoursesList.propTypes = {
  courses: PropTypes.array,
};
