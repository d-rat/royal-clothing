import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import SignInSignUpPage from "./pages/signIn-signUpPage/SignInSignUpPage";
import firebase, { auth } from "./firebase/firebase.utils";

function App() {
  firebase.unsubscribeFromAuth = null;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      firebase.unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/signin" exact component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
