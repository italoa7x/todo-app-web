import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewTodo from "../components/NewTodo/Todo";
import EditTodo from "../components/EditTodo/EditTodo";

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-todo" exact component={NewTodo} />
        <Route path="/edit-todo" component={EditTodo} />
      </Switch>
    </BrowserRouter>
  );
}

