import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from './images/bruce-mars-DBGwy7s3QY0-unsplash.jpg'

const Body = () => (
  <div>
    <Container>
      <Row>
        <Col lg={6} md={12} sm={12}>
        <h1>Enjoy endless music</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem
          augue, tincidunt non tortor ut, auctor eleifend justo. In convallis
          vitae elit vitae vulputate. Sed id purus pellentesque, tincidunt eros
          non, gravida ex. In suscipit nunc ut odio scelerisque, a tempor eros
          finibus. Duis eu dui ut lectus tincidunt tempor. Morbi volutpat
          efficitur enim, vitae feugiat quam pharetra in. Morbi a purus sed
          metus accumsan malesuada a sit amet eros. Phasellus volutpat sem a
          tempus semper. Duis sodales lacus at porta semper. Maecenas in sodales
          sem. Aliquam volutpat rhoncus auctor. Mauris euismod scelerisque ipsum
          sed sollicitudin. Sed molestie laoreet mauris. Aenean iaculis orci
          quis velit tincidunt, sit amet accumsan justo lobortis. Ut quis congue
          mi, vel bibendum enim. Mauris ultrices mi lorem. Fusce eget eros ante.
          Curabitur feugiat varius ex, nec euismod odio auctor id. Nam gravida
          maximus nisl efficitur gravida.
        </Col>
        <Col lg={6} md={12} sm={12}>
          <Card className="bg-dark text-white">
            <Card.Img src={Image} alt="Card image" />
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Body;
