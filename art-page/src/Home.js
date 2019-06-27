import React from 'react';
import {Carousel, Container, Tab, Row, Col, Nav} from 'react-bootstrap';
import './App.css';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + 'img/carousel/chapter_7.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + 'img/carousel/chapter_7.jpg'}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + 'img/carousel/chapter_7.jpg'}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

class TabBar extends React.Component {
  render () {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <img
                    src={process.env.PUBLIC_URL + 'img/buttons/chapter_7.jpg'}
                    alt="Third slide"
                    style={{width: '200px'}}
                  /> 2019
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <img
                      src={process.env.PUBLIC_URL + 'img/buttons/chapter_7.jpg'}
                      alt="Third slide"
                      style={{width: '200px'}}
                  /> 2018
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                LMAO
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                HAHA
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

function App() {
  return (
    <div>
      <Container>
        <ControlledCarousel />
      </Container>
      <br></br>
      <Container>
        <TabBar />
      </Container>
    </div>
  );
}

export default App;
