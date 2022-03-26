import Button from "@restart/ui/esm/Button";
import React from "react";
import userIcon from "../assets/user-icon.svg";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Brand from "./Brand";

function Header() {
  return (
    <div className="margin-listorder">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {/* <Navbar.Collapse className="justify-content-end"> */}
            <Navbar.Text>
              <img className="mx-2" src={userIcon} alt="" />
              <a className="mx-2" href="">
                Unis Badri{" "}
              </a>
            </Navbar.Text>
            {/* </Navbar.Collapse> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
