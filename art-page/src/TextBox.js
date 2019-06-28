import React from 'react';
import {Jumbotron, Container, Button, Popover, OverlayTrigger} from "react-bootstrap";

class App extends React.Component {
    render() {
        const popover = (
            <Popover id="popover-basic" title="Hi!">
                Welcome to my gallery and <strong>please</strong> explore around! Click on the thumbnails in
                each album to see bigger pictures!
            </Popover>
        );
          
        const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="secondary">Click me!</Button>
            </OverlayTrigger>
        );
        return (
            <Jumbotron fluid {...this.props}>
                {(this.props.button === "false") ? 
                <Container>
                <h1>{this.props.title}</h1>
                <p>
                {this.props.text}
                </p>
                </Container>
                :
                <Container>
                    <h1>{this.props.title}</h1>
                    <p>
                    {this.props.text}
                    </p>
                    <Example />
                </Container>}
            </Jumbotron>
        );
    }
}

export default App;