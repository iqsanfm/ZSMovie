import { Container, Row, Col, Button } from "react-bootstrap";
import "./Widget.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

function App() {
  return (
    <Container className="widget">
      <div className="widgetText">
        <h2>Choose a movie you like</h2>
        <div>Add the movie to whitelist and watch it later </div>
        <Button variant="danger">MORE</Button>
      </div>
      <row className="widgetImage">
        <div>
          <div className="image-container">
            <img src={image1} alt="Gambar 1" />
          </div>
          <div className="image-container">
            <img src={image2} alt="Gambar 2" />
          </div>
          <div className="image-container">
            <img src={image3} alt="Gambar 3" />
          </div>
        </div>
      </row>
    </Container>
  );
}

export default App;
