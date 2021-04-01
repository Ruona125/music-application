import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles/styles.component.css';

const FooterPart = () => (
  <footer style={{backgroundColor:"pink", margin:"0"}}>
    <Container>
      <Row>
        <Col lg={3} md={6}><br />
          <ul>
            <h4>Connect with AD</h4>
            <li>
              <small >About AD</small>
            </li>
            <li>
              <small>Contact the Editors</small>
            </li>
            <li>
              <small>Newsletter Sign up</small>
            </li>
            <li>
              <small>Accessability Help</small>
            </li>
            <li>
              <small>AD Worldwide</small>
            </li>
          </ul>
        </Col>

        <Col lg={3} md={6}> <br />
          <ul>
            <h4>Subscriptions</h4>
            <li>
              <small>Subscribe</small>
            </li>
            <li>
              <small>Review Subscription</small>
            </li>
            <li>
              <small>Give a Gift</small>
            </li>
            <li>
              <small>Change Address</small>
            </li>
            <li>
              <small>International Subscription</small>
            </li>
          </ul>
        </Col>


        <Col lg={3} md={6}> <br />
            <ul>
                <h4>hello</h4>
            </ul>
        </Col>


        <Col lg={3} md={6}> <br />
        3 of 3</Col>
      </Row>
    </Container>
  </footer>
);

export default FooterPart;
