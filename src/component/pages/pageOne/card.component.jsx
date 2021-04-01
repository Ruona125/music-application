import React from "react";
import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
import FirstPic from "./images/david-leveque-Hi_MNo54G6U-unsplash.jpg";
import SecondPic from "./images/alireza-attari-mp_FNJYcjBM-unsplash.jpg";
import ThirdPic from "./images/stavrialena-gontzou-rUv_3KhKVp0-unsplash.jpg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./styles/styles.component.css";

const CardList = () => (
  <div>
    <Container style = {{display:"flex", justifyContent:"center"}}>
      <Row>
        <Col className="firstCol" >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={FirstPic} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="firstCol">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={SecondPic}
              style={{ height: "13.5rem" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="firstCol">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={ThirdPic}
              style={{ height: "13.5rem" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CardList;
