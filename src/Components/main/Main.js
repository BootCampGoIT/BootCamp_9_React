import CoursesList from "./coursesList/CoursesList";
import PropTypes from "prop-types";
import { MainContainer } from "./MainStyled";
import themes from "../../themes";
const Main = ({ courses }) => {
  return (
    <MainContainer colors={themes["dark"].colors}>
      <CoursesList courses={courses} />
    </MainContainer>
  );
};

export default Main;

CoursesList.propTypes = {
  courses: PropTypes.array,
};
