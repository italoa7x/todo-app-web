import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import faCheckCircle from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import Button from "@material-ui/core/Button";
import "./styles.css";

const ListCard = (props) => (
  <div className="card">
    <Card variant="outlined">
      <CardHeader>card header</CardHeader>
      <Typography className="title-todo" variant="outlined">
        {props.title}
      </Typography>

      <CardContent className="content">Descrição: {props.content}</CardContent>
      <CardContent>Data: {props.dateIniti}</CardContent>

      <IconButton arial-label="Concluir tarefa">
        <faCheckCircle></faCheckCircle>
      </IconButton>
    </Card>
  </div>
);
export default ListCard;
