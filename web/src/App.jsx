import React from "react";
import Signup from "./component/Signup"
import Login from "./component/Login"
import Dash from "./component/Dash"

import {

  Switch,
  Route,
  Link

} from "react-router-dom";

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dash />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route  path="/signup">
          <Signup />
        </Route>

      </Switch>

      <nav>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

    </>




  );
}

export default App;
