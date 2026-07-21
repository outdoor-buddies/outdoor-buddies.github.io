'use client';

import "bootstrap/dist/css/bootstrap.min.css";

import './styles.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, InputGroup, Form, Button} from "react-bootstrap";
import Image from 'next/image';
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsHouseFill, BsSearch, BsPersonFill, BsCart } from "react-icons/bs";


const TopMenu = () => (
  <Navbar expand="lg" className="border-bottom py-2">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="d-flex align-items-stretch">
          <Image
            src="/images/ob-logo.png"
            alt="Company Logo"
            width={1464}
            height={526}
            style={{ width: 'auto', height: '70px' }}
            priority
          />
        </Navbar.Brand>
        <Navbar.Collapse id="top-navbar-nav" className="justify-content-end">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="/">Events</Nav.Link>
            <Nav.Link href="/search">Groups</Nav.Link>
            <Nav.Link href="/profile">Profiles</Nav.Link>
            <Nav.Link href="/about">Search</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown 
              title="Login" 
              id="right-nav-dropdown"
              align="end" // Forces the dropdown menu to open aligned to the right edge
            >
              {/*Make sure to fix these below so that login credentials are typed */}
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#orders"></NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Sign In</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
);



const MiddleMenu = () => (
  <Container fluid className="hike-background d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
    <h2 className="m-0 title">Find the Perfect Group for Your Next Outdoor Adventure</h2>
    <br/>
    <h4 className="m-0 text">Order ahead at one of our locations.</h4>
    <div className="d-flex gap-2 justify-content-center mt-4">
      <Button href="#" variant="light" className="px-4 py-2">Events</Button>
      <Button href="#" variant="light" className="px-4 py-2">Groups</Button>
    </div>
  </Container>
);

const FooterMenu = () => (
  <Container fluid className="footer">
    <Row>
      <Col>
        <span className="vogue-text">Contact Us</span>
        <hr></hr>
        <div>Emails</div>
        <div>example1@gmail.com</div>
        <div>example2@gmail.com</div>
      </Col>
      <Col>
        <span className="vogue-text">(We'd love to hear from you)</span>
        <hr></hr>
        <div>Phone Numbers</div>
        <div>555-555-5555</div>
        <div>555-555-5555</div>
      </Col>
      <Col>
        <Navbar expand="lg">
          <Container fluid className="d-flex justify-content-between align-items-stretch top-menu-container">
            <Nav className="flex-row ms-auto gap-3">
              {/*<Nav.Link><BsFacebook/> </Nav.Link>
              <Nav.Link><BsInstagram/> </Nav.Link>*/}
            </Nav>
          </Container>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

export default function Home() {
  return (
    <main className="w-100 overflow-hidden">
      <TopMenu />
      <MiddleMenu />
      <FooterMenu />
    </main>
  );
}