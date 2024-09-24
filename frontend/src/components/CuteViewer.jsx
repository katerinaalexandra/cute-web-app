import React from 'react';
import '../styles/CuteViewer.css'; 
import { Container, Row, Col } from 'react-bootstrap';

const CuteViewer = () => {

    const gifs = [
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBmYzM3M3M2ZnEydXBpamo4aHNrMmt4eHFmc3Y0cDE3dXp4cTV1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UkfUod3TFW66J2BWKK/giphy.gif",
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZoY3Y3eHVmMzI0bWdqNG01djVpZHBrMWx2bW5semthejNjYXJxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TRN9mCyQXGcpP9j98t/giphy.gif",
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXRnOHg2dGwwaDl0NjV1M2h0eTNicGhtbnJ0bjY0dm1wZHY4M2U3aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hwvL2uKsTd1cNpZd9c/giphy.gif",
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3FqbG10dWg5MXV6cDBsODN3bDh0YXB0amo0bnllYnN0N3FtZnZ3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pt4ARBAFoiTRuIEWkZ/giphy.gif",
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExam01dmdtM2EydWRsaDV1enFjd2twbnpjNTMyNTN4b3AzbGYwcW42aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gXVdQg6E3c707JS7n0/giphy.gif",
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODltdDJqazU4bGl3NnRyNnhvNXg0YTlrYWZxcno1ZTk1YjRseWZ1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SeX2OxwkfNPCGzqQdm/giphy.gif"
    ]

    return (
        <Container className="cute-viewer-container">
            <Row className="top-row">
                <Col>
                    <img className="small-gif" src={gifs[0]} alt="cute gif"></img>
                </Col>
                <Col>
                    <img className="small-gif" src={gifs[1]} alt="cute gif"></img>
                </Col>
                <Col>
                    <img className="small-gif" src={gifs[2]} alt="cute gif"></img>
                </Col>
            </Row>
            <Row className="middle-row">
                <div className="text">
                    Have the best first day Dylan!! I love you SO much and can't wait for you to tell me all your zoo stories.
                </div>
                {/* <div className="generate-animal-fact">
                    <div>
                        {generateFact()}
                    </div>
                    <button type="button" class="btn btn-light">Generate animal fact</button>
                </div> */}
            </Row>
            <Row className="bottom-row">
                <Col>
                    <img className="small-gif" src={gifs[3]} alt="cute gif"></img>
                </Col>
                <Col>
                    <img className="small-gif" src={gifs[4]} alt="cute gif"></img>
                </Col>
                <Col>
                    <img className="small-gif" src={gifs[5]} alt="cute gif"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default CuteViewer;