import React, { useState, useContext } from "react";
import { Input, Form, Button, ErrorMessage } from "../components/common";
import { FirebaseContext } from "../components/Firebase";
import { Link } from "gatsby";

const Register = () => {
  // instanse of Firebase
  const { firebase } = useContext(FirebaseContext);

  // validation
  const [errorMessage, setErrorMessage] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handlerInputChange = (e) => {
    e.persist();
    setErrorMessage("");
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({ 
          username: formValues.username,
          email: formValues.email, 
          password: formValues.password })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.message);
        });

    }else{
      setErrorMessage('Password and Confirm Pasword fields must match');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
        <Input
        name="username"
        value={formValues.username}
        placeholder="username"
        type="text"
        required
        onChange={handlerInputChange}
      />
      <Input
        name="email"
        value={formValues.email}
        placeholder="email"
        type="email"
        required
        onChange={handlerInputChange}
      />
      <Input
        name="password"
        value={formValues.password}
        placeholder="password"
        type="password"
        required
        minLength={6}
        onChange={handlerInputChange}
      />
      <Input
        name="confirmPassword"
        value={formValues.confirmPassword}
        placeholder="confirm password"
        type="password"
        required
        minLength={6}
        onChange={handlerInputChange}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
