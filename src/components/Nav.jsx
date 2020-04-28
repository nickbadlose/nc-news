import React from "react";
import { Link } from "@reach/router";
import { userStore } from "../stores/userinfo";
import { observer } from "mobx-react";
import SearchBox from "./SearchBox";

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
      <SearchBox />
      <Link to="/login" className="navLink">
        {userStore.username ? <>{userStore.username}</> : <>Log in</>}
      </Link>
    </nav>
  );
});

export default Nav;
