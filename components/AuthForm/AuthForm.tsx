import React from "react";
import SigninForm from "./SigninForm";
import SignUpForm from "./SignupForm";

export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";

interface AuthFormValues {
  mode: string;
}

const AuthForm = ({ mode }: AuthFormValues) => {
  return (
    <div className="my-4 md:my-10 px-2">
      {mode === SIGNIN ? <SigninForm /> : <SignUpForm />}
    </div>
  );
};

export default AuthForm;
