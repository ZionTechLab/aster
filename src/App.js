
import React, { useState } from 'react';
import './App.css';
import AppBar from './components/appBar';
import BusinessOwnerSignup from './components/businessownersignup';
import Login from './components/login';
import Page from './containers/page';
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const authData = useSelector((state) => state.auth);
  let contains = "";
  if (authData.isAuthOK === false) contains = <Login />;
  else if (authData.isAuthOK === true)
    contains = (<><AppBar /><Page>

      <BusinessOwnerSignup/>
            </Page></>)

  return (
    <div>
{contains}

      {/*  */}
      {/* <Login/> */}

      {/* <Page>

<BusinessOwnerSignup/>
      </Page> */}




      {/* Route definitions */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      {/* <Container className="mt-5">
      <h1>Hello, React Bootstrap!</h1>
      <Button variant="primary">Click me!</Button>
    </Container>
    <Button variant="primary" onClick={handleShow}>
        Open Drawer
      </Button> */}

      {/* <Container className="a">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container >

      <Container fluid className="a">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container >

      <Container fluid="xxl" className="a">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="a">1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row >
          <Col className="a">1 of 3</Col>
          <Col>2 of 3</Col>
          <Col className="a">3 of 3</Col>
        </Row>
      </Container>


      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="a">
            1 of 3
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2" className="a">
            3 of 3
          </Col>
        </Row>

        <Row>
          <Col className="a">1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2" className="a">
            3 of 3
          </Col>
        </Row>
      </Container> */}






    </div>
  );
}
function Home() {
  return <h2></h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}
export default App;


// to do

//media quary to hide smaller screens
