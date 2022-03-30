import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Header from './components/header/header';
import { PageLanding } from './page/page-landing/page.landing';

import './shared/shared-styles/style.container.scss';
import './shared/shared-styles/style.reset.scss';
import './shared/shared-styles/default/ALL.scss';

export default function App() {
    return (
        <>
            <Router>
                <Header/>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/" exact>
                            <PageLanding />
                        </Route>
                        <Route path="/lol">
                            <div className="container">
                                <h1>Lol</h1>
                            </div>
                        </Route>
                        <Route path="*">
                            <div className="container">
                                <h1>404</h1>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
        
    );
  }