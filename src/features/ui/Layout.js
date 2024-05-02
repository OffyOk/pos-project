import { Outlet, Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  ToastContainer,
  Toast,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { capitalize } from 'lodash';
import { clearAlert } from './uiSlice';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Layout = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.ui.alert);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Point of Sell
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Product Management" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/new">
                  Create Product
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Outlet />
      </Container>
      <ToastContainer
        position="bottom-end"
        containerPosition="fixed"
        className="p-3"
      >
        <Toast
          show={!!alert}
          delay={3000}
          autohide
          bg={alert?.type}
          onClose={() => dispatch(clearAlert())}
        >
          <Toast.Header>
            <strong className="me-auto">{capitalize(alert?.type)}</strong>
          </Toast.Header>
          <Toast.Body>{capitalize(alert?.message)}</Toast.Body>
        </Toast>
      </ToastContainer>
      <MDBFooter
        className="text-center text-white fixed-bottom "
        style={{ backgroundColor: '#212529' }}
      >
        <MDBContainer className="p-1"></MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(33, 37, 41, 1)' }}
        >
          © 2024 Copyright:
          <a
            className="text-white"
            href="https://www.linkedin.com/in/suthichai-srivatanasup/"
          >
            OffyOk
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Layout;
