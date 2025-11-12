import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="bg-black navbar-dark fixed-top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#">Mohamed Mahany</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto fs-5">
            {["Home", "About", "Skills", "Tutorials", "Support"].map( 
              (section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-link"
                  style={{ color: "rgba(0, 255, 229, 1)" ,  cursor: "pointer" }}
                  onClick={() => setExpanded(false)} 
                >
                  {section}
                </Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
