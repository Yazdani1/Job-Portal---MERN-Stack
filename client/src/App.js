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
import DashboardprotectedRoute from "./components/Dashboard/DashboardprotectedRoute";
import Publishedjobs from "./components/Dashboard/Published Jobs/Publishedjobs";
import CreateJobs from "./components/Dashboard/Create Jobs/CreateJobs";
import Profile from "./components/Dashboard/Profile/Profile";
import Message from "./components/Dashboard/Message/Message";
import Detailsjob from "./components/HomePage/Detailsjob/Detailsjob";
import JobapplicationList from "./components/Dashboard/Published Jobs/JobapplicationList";
import AlluserList from "./components/HomePage/AlluserList";
import Appliedjoblist from "./components/Dashboard/AppliedjobList/Appliedjoblist";
import Wishlist from "./components/Dashboard/wishlist/Wishlist";
import EditjobPost from "./components/Dashboard/Create Jobs/EditjobPost";
import Addemployee from "./components/Dashboard/AddEmployee/Addemployee";
import AdminPostlist from "./components/Admin/AdminAllPost/AdminPostlist";
import AdminProtectedRoute from "./components/Admin/AdminProtectedRoute";
import AllUser from "./components/Admin/AdminAllPost/AllUser";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          {/* Route for super admin side */}
          <Route exact path="/admin">
            <AdminProtectedRoute AdminProtected={AdminPostlist} />
          </Route>
          <Route exact path="/all-user-info">
            <AdminProtectedRoute AdminProtected={AllUser} />
          </Route>
          {/* Route end  for super admin side  */}

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

          <Route exact path="/job-description/:id">
            <ProtectedRoute FrontProtected={Detailsjob} />
          </Route>

          <Route exact path="/all-user-lists">
            <ProtectedRoute FrontProtected={AlluserList} />
          </Route>

          {/* Protected route for dashboard side */}

          <Route exact path="/dashboard">
            <DashboardprotectedRoute DashboardProtect={Publishedjobs} />
          </Route>

          <Route exact path="/create-job-post">
            <DashboardprotectedRoute DashboardProtect={CreateJobs} />
          </Route>

          <Route exact path="/edit-job-post/:id">
            <DashboardprotectedRoute DashboardProtect={EditjobPost} />
          </Route>

          <Route exact path="/profile">
            <DashboardprotectedRoute DashboardProtect={Profile} />
          </Route>

          <Route exact path="/message">
            <DashboardprotectedRoute DashboardProtect={Message} />
          </Route>

          <Route exact path="/applied-jobs">
            <DashboardprotectedRoute DashboardProtect={Appliedjoblist} />
          </Route>

          <Route exact path="/job-application/:id">
            <DashboardprotectedRoute DashboardProtect={JobapplicationList} />
          </Route>

          <Route exact path="/wishlist">
            <DashboardprotectedRoute DashboardProtect={Wishlist} />
          </Route>

          <Route exact path="/add-employee/">
            <DashboardprotectedRoute DashboardProtect={Addemployee} />
          </Route>
          {/*  Protected route end for dashboard side */}

          {/* page not found  */}

          <Route path="*" exact component={PagenotFound} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
