import React from "react";
import { Link } from "react-router-dom";
import InterpretationsContainer from "../containers/InterpretationsContainer";
import { Container, Row, Col } from "reactstrap";

const Draw = (props) => {
  let draw = props.draws.draws.find((draw) => draw.id == props.match.params.id);

  if (draw && draw.layout != "Celtic Cross") {
    return (
      <div className="notCross">
        <div className="blurb">
          Drawn: {draw ? draw.created_at.slice(0, 10) : null}
          <br></br>
        </div>
        {draw && props.cards.length > 0 ? (
          <div>
            {draw.card_ids.map((card_id, i) => (
              <div key={card_id.id}>
                <Link to={`/cards/${card_id - 1}`}>
                  {draw.orientations[i] === false ? (
                    <img
                      className="flip card space size"
                      src={props.cards[card_id - 1].image}
                    />
                  ) : (
                    <img
                      className="card space size"
                      src={props.cards[card_id - 1].image}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>
        ) : null}
        <InterpretationsContainer draw={draw} />
      </div>
    );
  } else if (draw && draw.layout == "Celtic Cross") {
    return (
      <Container>
        {draw && props.cards.length > 0 ? (
          <Container>
            <div className="blurb">
              Drawn: {draw ? draw.created_at.slice(0, 10) : null}
              <br></br>
            </div>
            <Row>
              <Col sm={{ size: true, offset: 4 }}>
                <div key={draw.card_ids[0].id}>
                  <Link to={`/cards/${draw.card_ids[0] - 1}`}>
                    {draw.orientations[0] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[0] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[0] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
              <Col sm={{ size: true, offset: 4 }}>
                <div key={draw.card_ids[1].id}>
                  <Link to={`/cards/${draw.card_ids[1] - 1}`}>
                    {draw.orientations[1] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[1] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[1] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div key={draw.card_ids[2].id}>
                  <Link to={`/cards/${draw.card_ids[2] - 1}`}>
                    {draw.orientations[2] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[2] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[2] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
              <Col sm={{ size: true, offset: 2 }}>
                <div key={draw.card_ids[3].id}>
                  <Link to={`/cards/${draw.card_ids[3] - 1}`}>
                    {draw.orientations[3] === false ? (
                      <img
                        className="flip celtic base size"
                        src={props.cards[draw.card_ids[3] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic base size"
                        src={props.cards[draw.card_ids[3] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
              <Col>
                <div key={draw.card_ids[4].id}>
                  <Link to={`/cards/${draw.card_ids[4] - 1}`}>
                    {draw.orientations[4] === false ? (
                      <img
                        className="flip celtic cross size"
                        src={props.cards[draw.card_ids[4] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic cross size"
                        src={props.cards[draw.card_ids[4] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
              <Col>
                <div key={draw.card_ids[5].id}>
                  <Link to={`/cards/${draw.card_ids[5] - 1}`}>
                    {draw.orientations[5] === false ? (
                      <img
                        className="flip celtic future size"
                        src={props.cards[draw.card_ids[5] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic future size"
                        src={props.cards[draw.card_ids[5] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
              <Col>
                <div key={draw.card_ids[6].id}>
                  <Link to={`/cards/${draw.card_ids[6] - 1}`}>
                    {draw.orientations[6] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[6] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[6] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: true, offset: 4 }}>
                <div key={draw.card_ids[7].id}>
                  <Link to={`/cards/${draw.card_ids[7] - 1}`}>
                    {draw.orientations[7] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[7] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[7] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
              <Col sm={{ size: true, offset: 4 }}>
                <div key={draw.card_ids[8].id}>
                  <Link to={`/cards/${draw.card_ids[8] - 1}`}>
                    {draw.orientations[8] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[8] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[8] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: true, offset: 10 }}>
                <div key={draw.card_ids[9].id}>
                  <Link to={`/cards/${draw.card_ids[9] - 1}`}>
                    {draw.orientations[9] === false ? (
                      <img
                        className="flip celtic size"
                        src={props.cards[draw.card_ids[9] - 1].image}
                      />
                    ) : (
                      <img
                        className="celtic size"
                        src={props.cards[draw.card_ids[9] - 1].image}
                      />
                    )}
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        ) : null}

        <InterpretationsContainer draw={draw} />
      </Container>
    );
  } else {
    return null;
  }
};
export default Draw;
