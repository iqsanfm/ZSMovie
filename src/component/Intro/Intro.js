import { Container, Row, Col, Button } from "react-bootstrap";
import "./Intro.css";

function App() {
  return (
    <div className="intro">
      <Container className="text-white mt-4 d-flex text-center justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">SELAMAT DATANG!!!</div>
            <div className="title">NIKMATIN NONTON GRATIS</div>
            <Button variant="dark mt-4">Lihat Selangkapnya</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
