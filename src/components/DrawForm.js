import React from "react";
import { connect } from "react-redux";
import { createDraws } from "../actions/createDraws";
import { Container, Row, Col } from "reactstrap";
import tarotb from "../assets/tarotb.jpg";

class DrawForm extends React.Component {
  state = {
    layout: "One-Card",
    card_ids: [],
    orientations: [],
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="4">
            <img className="first-card" src={tarotb} />
          </Col>
          <Col sm="4">
            <div className="center drawlist">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <select
                  onChange={this.handleChange}
                  name="layout"
                  value={this.state.layout}
                >
                  <option>One-Card</option>
                  <option>Three-Cards</option>
                  <option>Five-Cards</option>
                  <option>Celtic Cross</option>
                </select>
                <button>Draw Cards</button>
              </form>
              <div className="blurb">
                <p>
                  There are many types of spreads for Tarot reading, and many
                  ways to understand the layout of each draw.
                </p>
                <p>
                  The One-Card draw is typically a daily ritual for those who
                  want to check in with the energy of the day, or have an
                  immediate situation that they would like perspective on.
                </p>
                <p>
                  The Three-Card draw is often used as a simple timeline: past,
                  present, future.
                </p>
                <p>
                  There are many variants on the Five-Card draw. One that we
                  have found particularly interesting labels them in this
                  manner: 1) the circumstance, 2) the advice, 3) the lesson, 4)
                  the loss, 5) the gain.
                </p>
                <p>
                  The Celtic-Cross is the most complicated of the spreads. The
                  cards are numbered from the center (the hidden card being 1
                  and the cross being 2), then moving clockwise from the bottom
                  and finishing off on the right side from bottom to top. 1) the
                  circumstance, 2) the obstacle, 3) the inner mind, 4) the past,
                  5) the outer appearance, 6) the future, 7) the querent's state
                  of mind, 8) the querent's support, 9) hopes/fears, 10) the
                  outcome.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <img className="first-card" src={tarotb} />
          </Col>
        </Row>
      </Container>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let num = this.renderNum(this.state.layout);
    let formData = {
      layout: this.state.layout,
      card_ids: this.getCards(this.props.cards, num),
      orientations: this.renderBool(num),
    };
    this.props.createDraws(formData);
    this.props.history.push('/draws')
  };

  getCards = (arr, num) => {
    const base = [];
    while (base.length < num) {
      const r = Math.floor(Math.random() * arr.length);
      if (base.indexOf(r) === -1) base.push(r);
    }
    return base;
  };

  randBool = () => {
    const rb = Math.random() < 0.5;
    return rb;
  };

  renderBool = (param) => {
    const base = [];
    while (base.length < param) {
      base.push(this.randBool());
    }
    return base;
  };

  renderNum = (param) => {
    switch (param) {
      case "One-Card":
        return 1;
      case "Three-Cards":
        return 3;
      case "Five-Cards":
        return 5;
      case "Celtic Cross":
        return 10;
    }
  };

}

export default connect(null, { createDraws })(DrawForm);


