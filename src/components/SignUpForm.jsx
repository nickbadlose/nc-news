import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";
import { checkValidUser } from "../utils/utils";
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

  const handleChange = (e, input, checkUsername) => {
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
    }
  };

  return (
    <StyledDiv>
      {/* <form onSubmit={handleSignUp}>
      <label>
        Username:{" "}
        <input
          type="text"
          value={form.username}
          onChange={(e) => handleChange(e, "username", true)}
          maxLength="13"
          required
        />
        {form.userExists && <p>Username taken!</p>}
      </label>
      <label>
        name:{" "}
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange(e, "name")}
          required
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={form.password}
          onChange={(e) => handleChange(e, "password")}
          required
        />
      </label>
      <label>
        avatar url (optional do this in FOorm.Text small style ;)):{" "}
        <input
          type="avatar_url"
          value={form.avatar_url}
          onChange={(e) => handleChange(e, "avatar_url")}
        />
      </label>
      <button disabled={form.userExists}>Sign up!</button>
      {form.userInvalid && <p>Username cannot contain spaces</p>}
      <Link to="/login">Already have an account? Log in.</Link>
    </form> */}

      <img
        src="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=600&h=100&fit=crop&crop=edges"
        alt="NC-News banner"
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
            isInvalid={form.userExists || form.userInvalid} // call checkuserformat from handlechange not handlesignup
          />
          <Form.Control.Feedback type="invalid">
            User already exists!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            User already exists!
          </Form.Control.Feedback>
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
            onChange={(e) => handleChange(e, "password")}
            required
            placeholder="Password"
            minlength="6"
            isInvalid={form.invalidPassword} // maybe do a regex check for password from handlechange ?
          />
          <Form.Text className="text-muted">
            Password must contain at least 1 letter, 1 number and no spaces.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="signUpAvatarForm">
          <Form.Label>Avatar_url optional???</Form.Label>
          <Form.Control
            type="text"
            value={form.avatar_url}
            onChange={(e) => handleChange(e, "avatar_url")}
            // placeholder="avatar_url" put a default value in of mrhappy or something
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
