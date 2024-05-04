import { Card, Col, Container, Row, Image } from "react-bootstrap";
import Spiderman from "../assets/Spiderman.jpg";
import DoctorStrange from "../assets/doctorStrange.jpg";
import DeadPool from "../assets/deadPool.jpg";
import ironmanImage from "../assets/ironman.jpg";
import assscreedImage from "../assets/assCreed.jpg";
import venomImage from "../assets/venom.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h2 className="text-white"> SUPER HERO </h2>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image
                src={Spiderman}
                alt="Siderman Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center"> SPIDERMAN </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film spiderman yang terbaru
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last update 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={DoctorStrange}
                alt="DoctorStrange Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center">DoctorStrange</Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film DoctorStrange yang terbaru
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last update 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={DeadPool}
                alt="Siderman Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center"> DeadPool </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film DeadPool yang terbaru
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last update 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={ironmanImage}
                alt="ironmanImage"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center"> ironman </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film ironman yang terbaru
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last update 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={assscreedImage}
                alt="Siderman Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center">
                    assassin's creed mirage
                  </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film assassin's creed mirage yang terbaru
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last update 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={venomImage}
                alt="Siderman Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center"> venom </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film venomImage yang terbaru
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last update 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
