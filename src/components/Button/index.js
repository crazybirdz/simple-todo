import React from "react";

import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button
        className={classes.Button}
        onClick={props.clicked}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
