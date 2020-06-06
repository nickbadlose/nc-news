import React from "react";
import { Link } from "@reach/router";
import { useForm } from "../hooks";
import { StyledDiv } from "../styling/LoginForm.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LogInForm = () => {
  const { form, handleChange, handleLogin } = useForm({
    username: "jessjelly",
    password: "123",
    invalidUser: false,
  });

  return (
    <StyledDiv>
      <img
        src="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=600&h=200&fit=crop&crop=edges"
        alt="NC-News banner"
      />
      <Form className="logInForm mx-auto" onSubmit={handleLogin}>
        <Form.Group controlId="loginUsernameForm">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            type="text"
            value={form.username}
            onChange={(e) => handleChange(e, "username")}
            required
            isInvalid={form.invalidUser}
          />
          <Form.Text className="text-muted">
            Case sensitive! (Default username jessjelly)
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginPasswordForm">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={form.password}
            onChange={(e) => handleChange(e, "password")}
            required
            placeholder="Password"
            isInvalid={form.invalidUser}
          />
          <Form.Text className="text-muted">
            Case sensitive! (Default user password 123)
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Incorrect username or password!
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary" size="sm">
          Log In
        </Button>
        <Form.Group controlId="signUpLink">
          <Form.Text className="text-muted">
            <Link to="/signup">Don't have an account? Sign up.</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </StyledDiv>
  );
};

export default LogInForm;
