import React from "react";
import { Link } from "@reach/router";
import { userStore } from "../stores/userinfo";
import { observer } from "mobx-react";

const Nav = observer(() => {
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
        {userStore.username ? <>{userStore.username}</> : <>Log in</>}
      </Link>
    </nav>
  );
});

export default Nav;
