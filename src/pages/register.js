import React from "react";
import { Input, Form, Button } from "../components/common";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hey');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="email" type="email" required />
      <Input placeholder="password" type="password" required minLength={3}/>
      <Input placeholder="confirm password" type="password" required minLength={3} />
      <Button type="submit" block>Register</Button>
    </Form>
  );
};

export default Register;
