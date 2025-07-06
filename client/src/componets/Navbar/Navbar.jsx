import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {  Link } from "react-router-dom";

import cartimg from "../../componets/images/add-to-cart.png";
import titleimg from "../images/logo.png";

import "./Navbar.css";

function CollapsibleExample() {
  return (
    <>
  

<div className="navbar-wrapper">
  <Navbar
    collapseOnSelect
    expand="lg"
    className="bg-body-tertiary toggle"
    id="bg-body-tertiary"
  >
    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      className="toggle"
    />
    <Navbar.Collapse id="responsive-navbar-nav" className="toggle">
      <Nav className="me-auto tog">
        <Nav.Link href="/products">TOP COLLECTIONS</Nav.Link>
        <Nav.Link href="/products">NEW ARRIVALS</Nav.Link>
        <NavDropdown title="more collections" id="collapsible-nav-dropdown">
          <NavDropdown.Item href="/animicollections">
            Face wash Collections
          </NavDropdown.Item>
          <NavDropdown.Item href="/caroversized">
            Serum Collections
          </NavDropdown.Item>
          <NavDropdown.Item href="/movieoversized">
            hair wash Collections
          </NavDropdown.Item>
          <NavDropdown.Item href="/sportoversized">
            LIP Collections
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <Nav.Link href="/login">LOGIN</Nav.Link>
        <Nav.Link href="/profile">profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Navbar.Brand href="/" className="headtitle">
      <img className="titleimg" src={titleimg} alt="logo" />
    </Navbar.Brand>

    <Link to={"/cart"}>
      <Navbar.Brand>
        <img src={cartimg} alt="cart" className="cart-img" />
      </Navbar.Brand>
    </Link>
  </Navbar>
</div>

</>

    
  );
}

export default CollapsibleExample;
