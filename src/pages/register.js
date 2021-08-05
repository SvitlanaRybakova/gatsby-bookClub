import React, { useState } from "react";
import { Input, Form, Button } from "../components/common";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handlerInputChange = (e) => {
    e.persist();
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        minLength={3}
        onChange={handlerInputChange}
      />
      <Input
        name="confirmPassword"
        value={formValues.confirmPassword}
        placeholder="confirm password"
        type="password"
        required
        minLength={3}
        onChange={handlerInputChange}
      />
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
