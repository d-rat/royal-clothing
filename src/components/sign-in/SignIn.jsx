import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./SignIn.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {
  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(
        signInState.email,
        signInState.password
      );
      setSignInState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInState({
      ...signInState,
      [name]: value,
    });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="Email"
          name="email"
          type="email"
          value={signInState.email}
          required
        />

        <FormInput
          handleChange={handleChange}
          label="Password"
          name="password"
          type="password"
          value={signInState.password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
