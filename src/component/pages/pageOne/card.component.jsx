import React, { useState } from "react";
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
import {connect} from 'react-redux';
import {lonely, baby, teen} from '../../redux/card/card.action';

const CardList = (props) => {
  // const [cardTitle, setCardTitle] = useState("Card Title");
  // const [cardBaby, setCardBaby] = useState("Card Title");
  // const [cardTeen, setCardTeen] = useState(" Card Title")
  const {cardTitle,cardBaby, cardTeen,setCardBaby} = props
  const lonely =() => {
    const {setCardTitle} = props
    setCardTitle("lonely computer")
  }

  const teen = () => {
    const {setCardTeen} = props
    setCardTeen("Teenage girl")
  }

  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row>
          <Col className="firstCol">
            <Card style={{ width: "18rem" }} className="cardPic">
              <Card.Img variant="top" src={FirstPic} />
              <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={lonely}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="firstCol">
            <Card style={{ width: "18rem" }} className="cardPic">
              <Card.Img
                variant="top"
                src={SecondPic}
                style={{ height: "13.5rem" }}
              />
              <Card.Body>
                <Card.Title>{cardBaby}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={()=>{setCardBaby("Happy ruona")}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="firstCol">
            <Card style={{ width: "18rem" }} className="cardPic">
              <Card.Img
                variant="top"
                src={ThirdPic}
                style={{ height: "13.5rem" }}
              />
              <Card.Body>
                <Card.Title>{cardTeen}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={teen}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCardTitle: cardTitle => dispatch(lonely(cardTitle)),
  setCardBaby: cardBaby => dispatch(baby(cardBaby)),
  setCardTeen: cardTeen => dispatch(teen(cardTeen))
})
const mapStateToProps = (state) => {
  return {
    cardTitle:state.card.cardTitle,
    cardBaby:state.card.cardBaby,
    cardTeen:state.card.cardTeen
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardList);
