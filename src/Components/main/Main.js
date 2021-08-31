import { MainContainer } from "./MainStyled";
// import Courses from "../courses/Courses";
import AuthForm from "../auth/AuthForm";
import ProfileForm from "../auth/profile/ProfileForm";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import Courses from "../courses/Courses";
import Data from "../hoc/Data1";
import Data2 from "../hoc/Data2";
import DataContainer from "../hoc/DataContainer";
import Toggler from "../hooks/Toggler";

const Main = () => {
  return (
    <MainContainer>
      {/* <AuthForm /> */}
      {/* <ProfileForm /> */}
      <Courses />
      {/* <DataContainer /> */}
      {/* <Toggler /> */}
    </MainContainer>
  );
};

export default Main;
