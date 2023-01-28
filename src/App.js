import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";
import LMS from "./LMS";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Calenders from "./Calenders";
import AllCourses from "./AllCourses";
import FrontendCourse from "./Courses/FrontendCourse";
import BackendCourse from "./Courses/BackendCourse";
import UiDesign from "./Courses/UiDesign";
import Frontendvideo from "./Videos/Frontendvideo";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <HomeScreen /> */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/Application">
            <ApplicationForm />
          </Route>
          <Route path="/lms">
            <LMS />
          </Route>
          <Route path="/frontendvideo">
            <Frontendvideo />
          </Route>

          <Sidebar>
            <Route path="/Student/dashboard">
              <Dashboard />
            </Route>
            <Route path="/Student/calender">
              <Calenders />
            </Route>
            <Route path="/Student/courses/Frontend">
              <FrontendCourse />
            </Route>
            <Route path="/Student/courses/Backend">
              <BackendCourse />
            </Route>
            <Route path="/Student/courses/UiDesign">
              <UiDesign />
            </Route>
          </Sidebar>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
