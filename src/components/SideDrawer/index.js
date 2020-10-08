import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

import classes from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const sideDrawerClasses = [classes.SideDrawer];
  if (props.isShowed) {
    sideDrawerClasses.push(classes.Visible);
  }

  return (
    <div className={sideDrawerClasses.join(" ")}>
      <Button clicked={props.closed}>Simple Todo</Button>
      <nav className={classes.Links}>
        <NavLink to="/" onClick={props.closed} className={classes.Link}>
          Create Todos
        </NavLink>
        <NavLink to="/login" onClick={props.closed} className={classes.Link}>
          Login
        </NavLink>
        <NavLink to="/view" onClick={props.closed} className={classes.Link}>
          View Todos
        </NavLink>
      </nav>
    </div>
  );
};

export default SideDrawer;
