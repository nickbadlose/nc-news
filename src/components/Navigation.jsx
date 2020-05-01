import React from "react";
import { Link } from "@reach/router";
import { userStore } from "../stores/userinfo";
import { observer } from "mobx-react";
import SearchBox from "./SearchBox";
import styles from "../styling/Nav.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const Navigation = observer(() => {
  return (
    // <nav className="Nav">
    //   <Link to="/" className="navLink">
    //     Home
    //   </Link>
    //   <Link to="/articles" className="navLink">
    //     Articles
    //   </Link>
    //   <Link to="/topics" className="navLink">
    //     Topics
    //   </Link>
    //   <SearchBox />
    //   <Link to="/login" className="navLink">
    //     {userStore.username ? <>{userStore.username}</> : <>Log in</>}
    //   </Link>
    // </nav>
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="dark"
      className={styles.navBar}
    >
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="ml-auto"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/articles">Articles</Nav.Link>
          <Nav.Link href="/topics">Topics</Nav.Link>
        </Nav>
        <Form inline className={styles.form}>
          <FormControl
            inline
            type="text"
            placeholder="Search"
            size="sm"
            className={`mr-sm-2 ${styles.searchBar}`}
          />
          <Button
            inline
            variant="outline-info"
            size="sm"
            className={styles.button}
          >
            Search
          </Button>
        </Form>
        {/* <SearchBox className={styles.searchBar} /> */}
        <Nav>
          {userStore.username ? (
            <NavDropdown
              title={userStore.username}
              id="collapsible-nav-dropdown"
              alignRight={true}
            >
              <NavDropdown.Item href={`/${userStore.username}`}>
                Profile
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item onClick={userStore.logOut}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown
              title="Log in"
              id="collapsible-nav-dropdown"
              alignRight={true}
            >
              <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
