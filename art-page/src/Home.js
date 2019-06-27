import React from 'react';
import {Carousel, Container, Tab, Row, Col, Nav} from 'react-bootstrap';
import './App.css';
import TextBox from './TextBox.js';
import ImgPop from './ImagePopup.js';
import artDict from './art.json';

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
            style={{width: '700px', height: '400px', objectFit: 'cover'}}
          />
          <Carousel.Caption>
            <h1 style={{fontFamily: 'Copperplate,"Copperplate Gothic Light",fantasy', fontSize: '72px', color: "rgba(0,0,0,.8)"}}>Welcome!</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + 'img/carousel/huh.jpg'}
            alt="Third slide"
            style={{width: '700px', height: '400px', objectFit: 'cover'}}
          />

          <Carousel.Caption>
            <h1 style={{fontFamily: 'Copperplate,"Copperplate Gothic Light",fantasy', fontSize: '72px', color: "rgba(0,0,0,.8)"}}>Welcome!</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + 'img/carousel/got.jpg'}
            alt="Third slide"
            style={{width: '700px', height: '400px', objectFit: 'cover'}}
          />

          <Carousel.Caption>
            <h1 style={{fontFamily: 'Copperplate,"Copperplate Gothic Light",fantasy', fontSize: '72px', color: "rgba(0,0,0,.8)"}}>Welcome!</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

class GalleryByYear extends React.Component {
  constructor(props) {
    super(props);

    var tempList = artDict.years;
      tempList.forEach(element => {
        if (element.id === this.props.year) {
          this.artList = element.list;
        }
      });
  }
  render () {
    return (
      <div>
        <Container>
          <TextBox title={this.props.year + " Gallery"} text={this.props.text} button={true} />
          {this.artList.map((value, index) => (
            (((index + 1) % 3 === 0) ? 
              <>
                <ImgPop key={index} img={process.env.PUBLIC_URL + 'img/' + this.props.year + '/' + value} />
                <br></br>
                <br></br>
              </>
              :
              <ImgPop key={index} img={process.env.PUBLIC_URL + 'img/' + this.props.year + '/' + value} />
            )
          ))}
        </Container>
      </div>
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
                    src={process.env.PUBLIC_URL + 'img/buttons/got.jpg'}
                    alt="First slide"
                    style={{width: '200px', height: '70px', objectFit: 'cover'}}
                  /> 2019
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <img
                      src={process.env.PUBLIC_URL + 'img/buttons/chapter_7.jpg'}
                      alt="Second slide"
                      style={{width: '200px', height: '70px', objectFit: 'cover'}}
                  /> 2018
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <img
                      src={process.env.PUBLIC_URL + 'img/buttons/cat.jpg'}
                      alt="Third slide"
                      style={{width: '200px', height: '70px', objectFit: 'cover'}}
                  /> 2017
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <GalleryByYear year={2019} text="A year of final disappointments and low efforts, 
                edge lords and clowns. It makes the creation of digital fan art both simple and
                complicated."/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <GalleryByYear year={2018} text="HAHA"/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <GalleryByYear year={2017} text="OOP"/>
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
      <ControlledCarousel />
      <br></br>
      <Container>
        <TabBar />
      </Container>
    </div>
  );
}

export default App;
