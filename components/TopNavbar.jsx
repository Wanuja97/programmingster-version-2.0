import React, { useEffect } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "../styles/Navbar.module.scss";
import Image from "next/image";
export default function TopNavbar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={Styles.navcontainer}
        variant="dark"
      >
        <Container >
          <div className="logocontainer">
            <Image
              src="/programmingster-nav-logo.png"
              alt="programmingster logo"
              width="275"
              height="51"
            />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className={Styles.navitemscontainer}>
            <Nav >
              <Nav.Item className={Styles.navitem}>
                <Link href="/">
                  <a>Home </a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/about">
                  <a>About </a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </Nav.Item>
              <Nav.Item className={Styles.navitem}>
                <Link href="/privacypolicy" >
                  <a >Privacy Policy </a>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}
