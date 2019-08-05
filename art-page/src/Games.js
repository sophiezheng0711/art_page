import React from 'react';
import {Container, Button} from 'react-bootstrap';
import TextBox from './TextBox.js';
import ReactPlayer from 'react-player';

function App() {
    const gitRedirect = () => {window.open("https://github.com/sophiezheng0711/Dante-the-Bear")};
    return (
        <div>
            <Container>
                <TextBox title="Dante the Bear" text="Dante the Bear is an exhilarating platform
                adventure with little bear Dante through the nine circles of hell. Both the art
                (character design) and mechanics (backend programming) are made by PhiloSophie.
                Trailer to Dante the Bear is included below!"
                button='false' />
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button variant="dark" onClick={gitRedirect}>Game Code Repository</Button>
                </div>
            </Container>
            <br></br>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ReactPlayer url='https://vimeo.com/298786326' />
            </div>
        </div>
    );
}

export default App;