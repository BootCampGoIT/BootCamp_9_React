import { MainContainer } from "./MainStyled";
// import Courses from "../courses/Courses";
import AuthForm from "../auth/AuthForm";
import ProfileForm from "../auth/profile/ProfileForm";

const Main = () => {
  return (
    <MainContainer>
      {/* <AuthForm /> */}
      <ProfileForm />
    </MainContainer>
  );
};

export default Main;
