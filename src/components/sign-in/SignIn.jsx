import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./SignIn.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
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
          value={email}
          required
        />

        <FormInput
          handleChange={handleChange}
          label="Password"
          name="password"
          type="password"
          value={password}
          required
        />

        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
