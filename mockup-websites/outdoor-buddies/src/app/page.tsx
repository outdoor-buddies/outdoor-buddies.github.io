'use client';

import "bootstrap/dist/css/bootstrap.min.css";

import './styles.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, InputGroup, Form, Button} from "react-bootstrap";
import Image from 'next/image';
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsHouseFill, BsSearch, BsPersonFill, BsCart } from "react-icons/bs";


const NanasGreenTeaLogo = () => (
  <Container fluid className="d-flex flex-row flex-wrap justify-content-center gap-4">
    
  </Container>
);

const TopMenu = () => (
  <Navbar bg="light" expand="lg" className="border-bottom py-2">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image
            src="/images/ob-logo.png" // Replace with your actual logo path
            alt="Company Logo"
            width={1464}
            height={526}
            style={{ width: 'auto', height: '70px' }} // Keeps image aspect ratio intact
            priority
          />
        </Navbar.Brand>
        <Navbar.Collapse id="top-navbar-nav" className="justify-content-end">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown 
              title="Login" 
              id="right-nav-dropdown"
              align="end" // Forces the dropdown menu to open aligned to the right edge
            >
              {/*Make sure to fix these below so that login credentials are typed */}
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#orders">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
);

const MiddleMenu = () => (
  <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
    <h2 className="m-0 title text-white">A Modern Take on Japanese Tradition</h2>
    <br/>
    <h4 className="m-0 text text-white">Order ahead at one of our locations.</h4>
    <div className="d-flex gap-2 justify-content-center mt-4">
      <Button href="#" variant="light" className="px-4 py-2">Order Online - Bellevue</Button>
      <Button href="#" variant="light" className="px-4 py-2">Order Online - Seattle</Button>
    </div>
  </Container>
);

const FooterMenu = () => (
  <Container fluid className="footer">
    <Row>
      <Col>
        <span className="vogue-text">Bellevue</span>
        <hr></hr>
        <div>16 103rd Ave NE</div>
        <div>Bellevue, WA 98004</div>
        <div>(425) 590-9715</div>
      </Col>
      <Col>
        <span className="vogue-text">Seattle</span>
        <hr></hr>
        <div>1007 Stewart St. Ste 103</div>
        <div>Seattle, WA 98101</div>
        <div>(206) 785-6477</div>
      </Col>
      <Col>
        <Navbar expand="lg">
          <Container fluid className="d-flex justify-content-between align-items-center top-menu-container">
            <Nav className="flex-row ms-auto gap-3">
              <Nav.Link><BsFacebook/> </Nav.Link>
              <Nav.Link><BsInstagram/> </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="copyright">© 2025 - Nana's Green Tea</div>
      </Col>
    </Row>
  </Container>
);

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <NanasGreenTeaLogo/>
            <TopMenu/>
            <MiddleMenu/>
            <FooterMenu/>
          </Col>
        </Row>
      </Container>
    </main>
  );
}