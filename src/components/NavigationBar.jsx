import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap"
import Logo from "../assets/logo.png"

const NavigationBar = () =>  {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Tentang Kami</Nav.Link>
              <Nav.Link href="#produk">Product</Nav.Link>
              <Nav.Link href="#kontak">Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavigationBar