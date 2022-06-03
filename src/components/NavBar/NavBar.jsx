import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const links = [
  {
    linkName: "Home",
    linkDir: "#",
  },
  {
    linkName: "Businesses",
    linkDir: "#",
  },
  {
    linkName: "Trade",
    linkDir: "#",
  },
  {
    linkName: "Market",
    linkDir: "#",
  },
  {
    linkName: "Learn",
    linkDir: "#",
  },
];

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid className="text">
        <Navbar.Brand href="#" className="text-light fw-bold logo">
          Crypto<span className="cap fw-bold logo">Cop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            {links.map((link) => {
              return (
                <Nav.Link
                  key={link.linkName}
                  className="mx-3"
                  href={link.linkDir}
                >
                  <h6 className="hoverText">{link.linkName}</h6>
                </Nav.Link>
              );
            })}
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
