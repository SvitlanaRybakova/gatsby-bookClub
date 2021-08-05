import React, { useState, useContext } from "react";
import { FirebaseContext } from '../components/Firebase';
import { Form, Input, Button } from '../components/common';



const Login = () => {

  const [formValues, setFormValues] = useState({email: "", password: ""});

  // set firebase instanse
  const {firebase} = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.login({email: formValues.email, password: formValues.password});

  }

  const handleInputChange = (e) => {
    //  for React Native and React version 16 and less 
    //  ReactОстанавливает React от сброса свойств объекта события:
    e.persist();
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
    console.log(formValues);
  }
  return (
    <section>
      <Form action="" onSubmit={(e) => handleSubmit(e)}>
        <Input 
        value={formValues.email} 
        name="email" 
        onChange={handleInputChange} 
        type="email" 
        placeholder="email" 
        />

        <Input
        value={formValues.password} 
        name="password" 
        onChange={handleInputChange} 
        type="password" 
        placeholder="password" 
        />
        <Button type="submit" block >Log in</Button>
      </Form>
    </section>
  );
};
export default Login;
