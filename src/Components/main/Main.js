import CoursesList from "./coursesList/CoursesList";
import PropTypes from "prop-types";
import { MainContainer } from "./MainStyled";
import FolderList from "../folderList/FolderList";

const Main = ({ courses }) => {
  return (
    <MainContainer>
      {/* <CoursesList courses={courses} /> */}

      <FolderList arr={courses}/>
    </MainContainer>
  );
};

export default Main;

CoursesList.propTypes = {
  courses: PropTypes.array,
};
