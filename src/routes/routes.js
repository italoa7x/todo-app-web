import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewTodo from "../components/NewTodo/Todo";
import EditTodo from "../components/EditTodo/EditTodo";
import Home from "../components/Home/Home";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/new-todo" exact={true} component={NewTodo} />
        <Route path="/edit-todo" component={EditTodo} />
      </Switch>
    </BrowserRouter>
  );
}

