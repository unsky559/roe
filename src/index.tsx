import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { PageLanding } from './page/page-landing/page.landing';

/**
 * Welcome to ROE! 
 * This is an entry point of a project
 * 
 * All routes goes through Router component, that display needed page
 */

ReactDOM.render(
  <App></App>,
  document.body
);

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <PageLanding />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
