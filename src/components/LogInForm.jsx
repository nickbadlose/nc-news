import React from "react";
import { Link } from "@reach/router";
import { useForm } from "../hooks";
import { StyledDiv } from "../styling/LoginForm.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import bannerImage from "../logos/nc-news.banner.jpeg";
import mobileImage from "../logos/nc-news.mobile.jpeg";

const LogInForm = () => {
  const { form, handleChange, handleLogin } = useForm({
    username: "jessjelly",
    password: "a12345",
    invalidUser: false,
  });

  return (
    <StyledDiv>
      <img
        src={bannerImage}
        srcSet={`${bannerImage} 1300w, ${mobileImage} 600w`}
        alt="NC-News banner"
        className="bannerImage"
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
            Case sensitive! (Default user password a12345)
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
