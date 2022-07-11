import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import Header from './components/header/header';
import { PageLanding } from './page/page-landing/page.landing';
import PageBlog from './page/page-blog/page.blog';
import PageAbout from './page/page-about/page.about';
import Page404 from './page/page-404/page.404';
import Footer from "./components/footer/footer";

import './shared/shared-styles/style.container.scss';
import './shared/shared-styles/style.reset.scss';
import './shared/shared-styles/default/ALL.scss';
import PageArticle from "./page/page-article/page-article";
import PageArticleEditor from "./page/page-article-editor/page-article-editor";

export default function App() {
    return (
        <>
            <Router>
                <Header/>
                <main>
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
                        <Route path="/article">
                            <PageArticle />
                        </Route>
                        <Route path="/editor">
                            <PageArticleEditor />
                        </Route>
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </>
        
    );
  }
