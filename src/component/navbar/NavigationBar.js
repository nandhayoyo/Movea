import { Navbar, Container, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navigation.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand href="/" id="nav-dropdown">
            ABC Movea
          </Navbar.Brand>
          <Nav className="text-light">
            <NavDropdown title={"Popular"} id="nav-dropdown">
              <NavDropdown.Item href="#popularTv">On TV</NavDropdown.Item>
              <NavDropdown.Item href="#popularTheater">
                On Theater
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={"Trending"} id="nav-dropdown">
              <NavDropdown.Item href="#trendingTv">On TV</NavDropdown.Item>
              <NavDropdown.Item href="#trendingTheater">
                On Theater
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
