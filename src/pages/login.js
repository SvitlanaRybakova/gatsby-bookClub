import React, { useState, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { Form, Input, Button, ErrorMessage } from "../components/common";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  // set firebase instanse
  const { firebase } = useContext(FirebaseContext);
  // validation
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handleInputChange = (e) => {
    //  for React Native and React version 16 and less
    //  ReactОстанавливает React от сброса свойств объекта события:
    e.persist();
    setErrorMessage('');
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
    console.log(formValues);
  };
  return (
    <section>
      <Form action="" onSubmit={(e) => handleSubmit(e)}>
        <Input
          value={formValues.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />

        <Input
          value={formValues.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
          required
        />
        {errorMessage &&(
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        <Button type="submit" block>
          Log in
        </Button>
      </Form>
    </section>
  );
};
export default Login;
