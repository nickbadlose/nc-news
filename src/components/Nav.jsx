import React from "react";
import { Link } from "@reach/router";

const Nav = ({ username }) => {
  return (
    <nav className="Nav">
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/articles" className="navLink">
        Articles
      </Link>
      <Link to="/topics" className="navLink">
        Topics
      </Link>
      <Link to="/login" className="navLink">
        {username ? <>{username}</> : <>Log in</>}
      </Link>
    </nav>
  );
};

export default Nav;
