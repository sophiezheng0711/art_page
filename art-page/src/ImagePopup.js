import React from 'react';
import {Button, Modal} from 'react-bootstrap';


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        return (
          <>
            <Button size='lg' variant="outline-secondary" onClick={this.handleShow}>
              <img src={this.props.img} style={{width: '200px', height: '200px', objectFit: 'cover'}} alt="" />
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose} centered size='lg'>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body><img src={this.props.img} style={{width: '770px'}} alt="" /></Modal.Body>
            </Modal>
            &nbsp; &nbsp;
          </>
        );
      }
}

export default App;