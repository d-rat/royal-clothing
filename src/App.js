import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
function Hats() {
  return <div>HAts</div>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/:section" exact component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
