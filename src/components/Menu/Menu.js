import React from "react";
import { ExitToApp, AddCircleOutline } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';

import "./styles.css";

const Menu = () => (
  <div className="menu-bar">
    <div className="list-options">
      <IconButton className="btn">
        <ExitToApp /> 
      </IconButton>

      <IconButton className="btn" href="/new-todo">
        <AddCircleOutline/>
      </IconButton>
    </div>
  </div>
);
export default Menu;
