import React from "react";
import { Link } from "@reach/router";
import { useForm } from "../hooks";

const LogInForm = () => {
  const { form, handleChange, handleLogin } = useForm({
    username: "",
    password: "",
    invalidUser: false,
  });

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:{" "}
        <input
          type="text"
          value={form.username}
          onChange={(e) => handleChange(e, "username")}
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
      <button>Log in</button>
      {form.invalidUser && <p>Invalid username or password!</p>}
      <Link to="/signup">Don't have an account? Sign up.</Link>
    </form>
  );
};

export default LogInForm;
