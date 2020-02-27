import React from "react";
import { Link } from "@reach/router";

const Nav = ({ username }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/login">{username ? <>{username}</> : <>Log in</>}</Link>
    </nav>
  );
};

export default Nav;
