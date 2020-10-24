import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-sign-in"} ${
        inverted && "inverted"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
