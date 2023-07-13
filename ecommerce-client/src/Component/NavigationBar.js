import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../App.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/Slice/userSlices";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";


export function NavigationBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.userPurchase.isLoggedin);

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/signup");
  }


  return (
    <>
      <Paper elevation={6} style={{backgroundColor:"white"}}>
        <Container>
          <Row>
            <Col lg={1} sm={12}></Col>
            <Col lg={11} sm={12}>
              <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand href="#home" style={{
                  fontSize: 25,
                  fontFamily: 'monospace',
                  color: 'black'
                }}
                  className='texthead'
                ><h4 className='pe-5 headBrand'>Ecommerce</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: 'black' }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav>
                    <LinkContainer to="/">
                    <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Home</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/features">
                    <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Our Store</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                    <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Contact</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                    <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>About</h5></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/addtocart">
                    <Nav.Link
                        style={{
                          fontSize: 25,
                          fontFamily: 'monospace',
                          color: 'black'
                        }}
                        className='textStyle'
                      ><h5 className='ms-2 heading'>Add</h5></Nav.Link>
                    </LinkContainer>
                    <Form className="d-flex align-items-center">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="ms-5"
                      aria-label="Search"
                      style={{
                           height:35
                      }}
                        
                    />
                   
                  </Form>
                    {
                      isLoggedIn ? (
                        <LinkContainer to="/signup">
                          <Nav.Link className="text-light">
                            <Button className="ms-3 btn btn-sm btn-danger" onClick={handleLogOut}>Logout</Button>
                          </Nav.Link>
                        </LinkContainer>
                      ) : (
                        <LinkContainer to="/signin">
                          <Nav.Link className="text-light">
                            <Button className="ms-3 btn btn-sm  btn-primary">Login</Button>
                          </Nav.Link>
                        </LinkContainer>
                      )
                    }


                  </Nav>
                  


                </Navbar.Collapse>



              </Navbar>

            </Col>
          </Row>
        </Container>

      </Paper>
     
    </>
  );
}
