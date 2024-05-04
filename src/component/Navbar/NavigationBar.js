import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">ZSMovie</Navbar.Brand>
        <Nav className="me-end">
          <Nav.Link href="#trending">TRENDING</Nav.Link>
          <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
