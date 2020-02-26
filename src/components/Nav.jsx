import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { username } = props;
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/login">{username ? <>{username}</> : <>Log in</>}</Link>
    </nav>
  );
};

export default Nav;
