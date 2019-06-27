import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Button, Navbar, Nav, Form, FormControl, Container} from "react-bootstrap";
import Home from './Home.js';
import StickyFooter from 'react-sticky-footer';

class MyNavBar extends React.Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">PhiloSophie</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/digital">Digital</Nav.Link>
            <Nav.Link href="/traditional">Traditional</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      );
    }
  }

class MyFooter extends React.Component {
    render() {
        return (
            <StickyFooter
                bottomThreshold={50}
                normalStyles={{
                backgroundColor: "#343A47",
                padding: "1rem"
                }}
                stickyStyles={{
                backgroundColor: "#6C7486",
                padding: "1rem"
                }}
            >
                <Container>
                    <div style={{color: "#B0B3B9", fontFamily: '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-seri'}}>
                        <h4 style={{color: "#FFFFFF"}}>Contact Me</h4>
                        <div>Email: dummy@gmail.com</div>
                        Amino: <a href='http://aminoapps.com/p/u9iut'>http://aminoapps.com/p/u9iut</a>
                        <div>YouTube: dummy.u2be.com</div>
                    </div>
                </Container>
            </StickyFooter>
        );
    }
}

function HomePage() {
  return <Home />;
}

function DigitalPage() {
  return <h2>TODO: Digital</h2>;
}

function TraditionalPage() {
  return <h2>TODO: Traditional</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <MyNavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/digital" component={DigitalPage} />
        <Route path="/traditional" component={TraditionalPage} />
        <br></br>
        <br></br>
        <br></br>
        <MyFooter />
      </div>
    </Router>
  );
}

export default AppRouter;