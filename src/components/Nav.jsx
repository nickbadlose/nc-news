import React from "react";
import { Link } from "@reach/router";

const Nav = ({ username }) => {
  return (
    <nav className="Nav">
      <Link to="/" className="Link">
        Home
      </Link>
      <Link to="/articles" className="Link">
        Articles
      </Link>
      <Link to="/topics" className="Link">
        Topics
      </Link>
      <Link to="/login" className="Link">
        {username ? <>{username}</> : <>Log in</>}
      </Link>
    </nav>
  );
};

export default Nav;
