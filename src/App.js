import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { WorkHistory } from "./components/AboutMe/WorkHistory";
import { Skills } from "./components/AboutMe/Skills";
import { Education } from "./components/AboutMe/Education";

function App() {
  return (
    <Router>
      <div className="app_container">
        <div className="app_content_container">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <Main />
                </React.Fragment>
              )}
            />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route path="/AboutMe/WorkHistory" component={WorkHistory} />
            <Route path="/AboutMe/Skills" component={Skills} />
            <Route path="/AboutMe/Education" component={Education} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
