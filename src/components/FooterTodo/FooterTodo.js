import React from "react";

import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

import Icon from "@material-ui/core/Icon";

import "./styles.css";

import {} from "@material-ui/core";

const FooterTodo = (props) => (
  <div>
    <div className="divider">
      <Divider light />
    </div>
    <CardContent className="date-todo">Data: {props.dateInit}</CardContent>
    <div className="button-todo">
      <Icon
      onClick={() => {}}
      >
        <CheckCircle />
      </Icon>

      <Edit onChange={() => {}} />
      <Delete onChange={() => {}} />
    </div>
  </div>
);

export default FooterTodo;
