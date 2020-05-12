import React from "react";
import { userStore } from "../stores/userinfo";
import { useForm } from "../hooks";
import { checkValidUser } from "../utils/utils";
import { Link } from "@reach/router";

const SignUpForm = () => {
  const { form, setForm, handleSignUp } = useForm({
    username: "",
    name: "",
    password: "",
    avatar_url: "",
    userExists: false,
    userInvalid: false,
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
    <form onSubmit={handleSignUp}>
      <label>
        Username:{" "}
        <input
          type="text"
          value={form.username}
          onChange={(e) => handleChange(e, "username", true)}
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
        avatar url (optional):{" "}
        <input
          type="avatar_url"
          value={form.avatar_url}
          onChange={(e) => handleChange(e, "avatar_url")}
        />
      </label>
      <button disabled={form.userExists}>Sign up!</button>
      {form.userInvalid && <p>Username cannot contain spaces</p>}
      <Link to="/login">Already have an account? Log in.</Link>
    </form>
  );
};

export default SignUpForm;
