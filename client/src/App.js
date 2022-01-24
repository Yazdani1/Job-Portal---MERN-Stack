import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import SignIn from "./components/auth/Signin";
import ResetPassword from "./components/auth/ResetPassword";
import NewPassword from "./components/auth/NewPassword";
import Home from "./components/HomePage/Home";
import PagenotFound from "./components/PagenotFound";
import ProtectedRoute from "./components/Protectedroute";
import { UserProvider } from "./components/UserContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          {/* route for client side */}
          <Route path="/" exact>
            <ProtectedRoute FrontProtected={Home} />
          </Route>

          <Route path="/signup">
            <ProtectedRoute FrontProtected={Signup} />
          </Route>

          <Route path="/signin">
            <ProtectedRoute FrontProtected={SignIn} />
          </Route>

          <Route exact path="/reset">
            <ProtectedRoute FrontProtected={ResetPassword} />
          </Route>

          <Route exact path="/reset/:token">
            <ProtectedRoute FrontProtected={NewPassword} />
          </Route>

          {/* page not found  */}

          <Route path="*" exact component={PagenotFound} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
