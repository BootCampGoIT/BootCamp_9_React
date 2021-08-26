import { MainContainer } from "./MainStyled";
// import Courses from "../courses/Courses";
import AuthForm from "../auth/AuthForm";
import ProfileForm from "../auth/profile/ProfileForm";
import CoursesForm from "../courses/coursesForm/CoursesForm";
import Courses from "../courses/Courses";

const Main = () => {
  return (
    <MainContainer>
      {/* <AuthForm /> */}
      {/* <ProfileForm /> */}
      <Courses />
    </MainContainer>
  );
};

export default Main;
