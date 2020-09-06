import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./styles.css";

const ListCard = (props) => (
  <div className="card">
    <Card variant="outlined">
      <CardHeader>card header</CardHeader>
      <Typography variant="outlined">Título</Typography>

      <CardContent>Título do todo</CardContent>
    </Card>
  </div>
);
export default ListCard;
