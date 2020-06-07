import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";
import {
  checkValidUser,
  checkValidPassword,
  checkUsernameFormat,
} from "../utils/utils";
import { Link } from "@reach/router";
import { StyledDiv } from "../styling/SignUpForm.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {
  const { form, setForm, handleSignUp } = useForm({
    username: "",
    name: "",
    password: "",
    avatar_url: "https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg",
    userExists: false,
    userInvalid: false,
    invalidPassword: false,
  });

  const handleChange = (e, input, checkUsername, checkPassword) => {
    e.persist();
    setForm((c) => {
      c[input] = e.target.value;
    });
    if (checkUsername) {
      checkValidUser(userStore.users, e.target.value)
        ? setForm((c) => {
            c.userExists = false;
          })
        : setForm((c) => {
            c.userExists = true;
          });

      checkUsernameFormat(e.target.value)
        ? setForm((c) => {
            c.userInvalid = true;
          })
        : setForm((c) => {
            c.userInvalid = false;
          });
    }
    if (checkPassword) {
      checkValidPassword(e.target.value)
        ? setForm((c) => {
            c.invalidPassword = true;
          })
        : setForm((c) => {
            c.invalidPassword = false;
          });
    }
  };

  return (
    <StyledDiv>
      <img
        src="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1300&h=400&fit=crop&crop=edges"
        srcSet="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1300&h=400&fit=crop&crop=edges 1300w, https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=600&h=200&fit=crop&crop=edges 600w"
        alt="NC-News banner"
        className="bannerImage"
      />
      <Form className="signUpForm mx-auto" onSubmit={handleSignUp}>
        <Form.Group controlId="signUpUsernameForm">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            type="text"
            value={form.username}
            onChange={(e) => handleChange(e, "username", true)}
            maxLength="12"
            required
            isInvalid={form.userExists || form.userInvalid}
          />
          <Form.Text className="text-muted">Case sensitive!</Form.Text>
          {form.userExists && (
            <Form.Control.Feedback type="invalid">
              User already exists!
            </Form.Control.Feedback>
          )}
          {form.userInvalid && (
            <Form.Control.Feedback type="invalid">
              Username can only contain letters and numbers!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="signUpNameForm">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={form.name}
            onChange={(e) => handleChange(e, "name")}
            required
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group controlId="signUpPasswordForm">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={form.password}
            onChange={(e) => handleChange(e, "password", false, true)}
            required
            placeholder="Password"
            minLength="6"
            isInvalid={form.invalidPassword}
          />
          <Form.Text className="text-muted">Case sensitive!</Form.Text>
          <Form.Control.Feedback type="invalid">
            Password must contain at least 1 letter, 1 number and no spaces!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="signUpAvatarForm">
          <Form.Label>Avatar_url</Form.Label>
          <Form.Control
            type="text"
            value={form.avatar_url}
            onChange={(e) => handleChange(e, "avatar_url")}
          />
          <Form.Text className="text-muted">Optional</Form.Text>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          size="sm"
          disabled={form.userExists || form.userInvalid || form.invalidPassword}
        >
          Sign Up
        </Button>
        <Form.Group controlId="logInLink">
          <Form.Text className="text-muted">
            <Link to="/login">Already have an account? Log in.</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </StyledDiv>
  );
};

export default SignUpForm;
