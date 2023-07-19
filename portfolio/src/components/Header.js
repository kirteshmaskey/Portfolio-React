import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {

  const common = {
    marginRight:15,
    fontSize:17,
    letterSpacing:".5px",
    color:"#000000"
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div>
            <h2 className="mt-2 h2_right">
            <NavLink to="/" className="text-decoration-none" style={{ color: "#ff7722" }}>Kirtesh</NavLink>
            </h2>
          </div>

          <div>
            <Nav className="">
              <div className="mt-2">
                <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                <NavLink to="/projects" className="text-decoration-none" style={common}>Projects</NavLink>
                <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
