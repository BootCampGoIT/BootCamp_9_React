import React from "react";
import AuthForm from "../../Components/auth/AuthForm";
import { AuthPageContainer } from "./AuthPageStyled";

const AuthPage = () => {
  return (
    <AuthPageContainer>
      <AuthForm />
    </AuthPageContainer>
  );
};

export default AuthPage;
