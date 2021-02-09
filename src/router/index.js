import React from "react";
import { Switch, Route } from "react-router-dom";

import Posts from "pages/Posts";
import Post from "pages/Post";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
    </Switch>
  );
}

export default Router;
