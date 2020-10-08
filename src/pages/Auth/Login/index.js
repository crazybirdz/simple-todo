import React, { useReducer } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";

import classes from "./Login.module.scss";

const initialState = {
  email: "",
  password: "",
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "error":
      return { ...state, error: action.value };
    default:
      return state;
  }
};

const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, error } = state;

  const handleValueUpdated = (event) => {
    dispatch({ type: event.target.name, value: event.target.value });
  };

  const handleFormSubmitted = (event) => {};

  const disabled = password === "" || email === "";

  return (
    <form className={classes.Login} onSubmit={handleFormSubmitted}>
      <Title>Log In to Your Account!</Title>
      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        valueUpdated={handleValueUpdated}
        value={state.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        valueUpdated={handleValueUpdated}
        value={state.password}
      />
      <Button disabled={disabled}>Log In</Button>
      {error && <p style={{ color: "#e74c3c" }}>{error.message}</p>}
    </form>
  );
};

export default Login;
