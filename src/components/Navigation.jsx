import React from "react";
import { userStore } from "../stores/userinfo";
import { searchStore } from "../stores/search";
import { observer } from "mobx-react";
import styles from "../styling/Nav.module.css";
import "../styling/Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import logo from "../logos/news.svg";
import search from "../logos/search.svg";
import { Link } from "@reach/router";

const Navigation = observer(() => {
  return (
    <Navbar expand="sm" variant="dark" id="navbar" className={styles.navBar}>
      <Navbar.Brand as={Link} to="/" className={styles.brand}>
        NC <img src={logo} alt="news" />
      </Navbar.Brand>
      <Form className={styles.form}>
        <FormControl
          aria-label="Search box"
          type="text"
          placeholder="Search"
          size="sm"
          className={styles.searchBar}
          value={searchStore.search}
          onChange={searchStore.handleChange}
        />
        <button
          className={styles.searchButton}
          onClick={searchStore.handleSubmit}
        >
          <img src={search} alt="search" className={styles.img} />
        </button>
      </Form>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.toggle}
      />
      <Navbar.Collapse id="responsive-navbar-nav" className={styles.collapse}>
        <Nav className={styles.links}>
          <Nav.Link as={Link} to="/" className={styles.link}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/articles" className={styles.link}>
            Articles
          </Nav.Link>
          <Nav.Link as={Link} to="/topics" className={styles.link}>
            Topics
          </Nav.Link>
        </Nav>
        <Nav className={styles.profile}>
          {userStore.username ? ( // need to add a logged in logo maybe? or maybe it's better with username?
            <NavDropdown
              title={userStore.username}
              id="collapsible-nav-dropdown"
              alignRight
            >
              <NavDropdown.Item as={Link} to={`/${userStore.username}`}>
                Profile
              </NavDropdown.Item>
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
              <NavDropdown.Item as={Link} to="/login">
                Log in
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                Sign up
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
