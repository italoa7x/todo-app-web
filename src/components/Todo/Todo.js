import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import FooterTodo from "../FooterTodo/FooterTodo";

import "./styles.css";

const Todo = (props) => (
  <div className="card">
    <Card variant="outlined">
      <CardHeader>card header</CardHeader>
      <Typography className="title-todo" variant="subtitle1">
        {props.title}
      </Typography>

      <CardContent className="content">{props.content}</CardContent>
      <FooterTodo dateInit={props.dateInit}/>
    </Card>
  </div>
);
export default Todo;
