import React from "react";
import { userStore } from "../stores/userinfo";
import { observer } from "mobx-react";
import styles from "../styling/Nav.module.css";
import "../styling/Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import logo from "../logos/news.svg";

const Navigation = observer(() => {
  return (
    <Navbar expand="sm" variant="dark" id="navbar" className={styles.navBar}>
      <Navbar.Brand href="/">
        NC <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="ml-auto"
      />
      <Navbar.Collapse id="responsive-navbar-nav" className={styles.collapse}>
        <Nav className={styles.links}>
          <Nav.Link href="/" className={styles.link}>
            Home
          </Nav.Link>
          <Nav.Link href="/articles" className={styles.link}>
            Articles
          </Nav.Link>
          <Nav.Link href="/topics" className={styles.link}>
            Topics
          </Nav.Link>
        </Nav>
        <Form className={styles.form}>
          <FormControl
            type="text"
            placeholder="Search"
            size="sm"
            className={styles.searchBar}
          />
          {/* <Button variant="outline-info" size="sm">
            Search
          </Button> */}
        </Form>
        <Nav className={styles.profile}>
          {userStore.username ? (
            <NavDropdown
              title={userStore.username}
              id="collapsible-nav-dropdown"
              alignRight
              className={styles.NavDropdown}
            >
              <NavDropdown.Item href={`/${userStore.username}`}>
                Profile
              </NavDropdown.Item>

              {/* <NavDropdown.Divider className={styles.divider} /> */}

              <NavDropdown.Item onClick={userStore.logOut}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown
              title="Log in"
              id="collapsible-nav-dropdown"
              alignRight
            >
              <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
              {/* <NavDropdown.Divider className={styles.divider} /> */}
              <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
