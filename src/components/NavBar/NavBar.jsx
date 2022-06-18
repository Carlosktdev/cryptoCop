import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const links = [
  {
    linkName: "Market",
    linkDir: "#MarketTable",
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
