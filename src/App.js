import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {Header} from './components/Header';
import {Main}   from './components/Main';
import {Projects} from './components/Projects';
import {AboutMe} from './components/AboutMe';

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
          <Route path="/AboutMe" component={AboutMe} />
          <Redirect to="/" />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
