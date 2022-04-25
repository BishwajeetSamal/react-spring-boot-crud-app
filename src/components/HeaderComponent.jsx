import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import ListEmployeeComponent from "./ListEmployeeComponent";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import ViewEmployeeComponent from "./ViewEmployeeComponent";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#"> Employee Management App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Main Page</Nav.Link>
              <Nav.Link href="/ListEmployeeComponent">Show Employees</Nav.Link>
              <Nav.Link href="/AddEmployee">Add Employee</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route
            path="/ListEmployeeComponent"
            element={<ListEmployeeComponent />}
          />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/UpdateEmployee/:id" element={<UpdateEmployee />} />
          <Route
            path="/ViewEmployeeComponent/:id"
            element={<ViewEmployeeComponent />}
          />
        </Routes>
      </Router>
      <FooterComponent />
    </>
  );
}

export default Header;
