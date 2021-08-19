import CoursesList from "./coursesList/CoursesList";
import PropTypes from "prop-types";
import { MainContainer } from "./MainStyled";
import FolderList from "../folderList/FolderList";

const Main = ({ courses }) => {
  return (
    <MainContainer>
      <FolderList arr={courses}/>
      <CoursesList courses={courses} />

    </MainContainer>
  );
};

export default Main;

CoursesList.propTypes = {
  courses: PropTypes.array,
};
