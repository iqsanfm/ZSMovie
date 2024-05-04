import { Card, Col, Container, Row, Image } from "react-bootstrap";
import Spiderman from "../assets/Spiderman.jpg";
import DoctorStrange from "../assets/doctorStrange.jpg";
import aliceborderlandImage from "../assets/aliceInBorderland.jpg";
import imsoniacImage from "../assets/insomniac.jpg";
import assscreedImage from "../assets/assCreed.jpg";
import badgeniusImage from "../assets/badGenius.jpg";
// import "./Trending.css";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h2 className="text-white"> MOVIE TRENDING </h2>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
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
                src={aliceborderlandImage}
                alt="Siderman Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center">
                    {" "}
                    aliceborderlandImage{" "}
                  </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film aliceborderland yang terbaru
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
                src={imsoniacImage}
                alt="imsoniacImage"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center"> imsoniac </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film imsoniac yang terbaru
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
                src={badgeniusImage}
                alt="Siderman Movie"
                className="imagesTrending"
              />
              <div className="bg-dark">
                <div className="p-2 m-1  text-white">
                  <Card.Title className="text-center"> badgenius </Card.Title>
                  <Card.Text className="text-left">
                    Deskripsi film badgenius yang terbaru
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

export default Trending;
