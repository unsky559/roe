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
import PageBlog from './page/page-blog/page.blog';
import PageAbout from './page/page-about/page.about';
import Page404 from './page/page-404/page.404';

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
                        <Route path="/blog">
                            <PageBlog />
                        </Route>
                        <Route path="/about">
                            <PageAbout />
                        </Route>
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
        
    );
  }