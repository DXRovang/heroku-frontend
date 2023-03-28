import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";

const ColumnTemplate = (card) => {
  return (
    <Col>
      <Card key={card.id}>
        <Link to={`/cards/${card.id - 1}`}>
          <CardImg top width="100%" src={card.image} />
          <CardBody>
            <CardTitle className="CardTitle" tag="h5">
              {card.name}
            </CardTitle>
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
};

const MinorArcana = (props) => {
  return (
    <Container>
      <div className="suit">WANDS</div>
      <Row className="xenter">
        <div>
          {props.cards.slice(22, 29).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <Row className="xenter">
        <div>
          {props.cards.slice(29, 36).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <div className="suit">CUPS</div>
      <Row className="xenter">
        <div>
          {props.cards.slice(36, 43).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <Row className="xenter">
        <div>
          {props.cards.slice(43, 50).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <div className="suit">PENTACLES</div>
      <Row className="xenter">
        <div>
          {props.cards.slice(50, 57).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <Row className="xenter">
        <div>
          {props.cards.slice(57, 64).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <div className="suit">SWORDS</div>
      <Row className="xenter">
        <div>
          {props.cards.slice(64, 71).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
      <Row className="xenter">
        <div>
          {props.cards.slice(71, 78).map((card) => ColumnTemplate(card))}
        </div>
      </Row>
    </Container>
  );
};

export default MinorArcana;

