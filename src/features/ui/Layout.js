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
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

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
        bgColor="Dark"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="www.linkedin.com/in/suthichai-srivatanasup"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="https://github.com/OffyOk" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  ssrivattanasup@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://github.com/OffyOk">
            OffyOk
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Layout;
