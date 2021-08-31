import { MainContainer } from "./MainStyled";

import Courses from "../courses/Courses";
import ProfileForm from "../profile/ProfileForm";
import AuthForm from "../auth/AuthForm";

const Main = () => {
  return (
    <MainContainer>
      <AuthForm />
      <ProfileForm />
      <Courses />
    </MainContainer>
  );
};

export default Main;
