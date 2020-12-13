import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutPage from './about/AboutPage'
import PostDetailsPage from './post-details/PostDetailsPage'
import PostsPage from './posts/PostsPage'

const Main = () => (
    <main className="container">
        <Switch>
            <Route path="/posts/:postId" component={PostDetailsPage} />

            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/">
                <PostsPage />
            </Route>
        </Switch>
    </main>
)

export default Main
