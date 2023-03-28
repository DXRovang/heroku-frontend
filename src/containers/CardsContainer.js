import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Card from "../components/Card";
import { fetchCards } from "../actions/fetchCards";
import MajorArcana from "../components/MajorArcana";
import MinorArcana from "../components/MinorArcana";

class CardsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/cards">
            <CardList cards={this.props.cards} />
          </Route>
          <Route
            path="/cards/:id"
            render={(routerProps) => (
              <Card {...routerProps} cards={this.props.cards} />
            )}
          />
          <Route path="/majorarcana">
            <MajorArcana cards={this.props.cards} />
          </Route>
          {/* <Route path={process.env.PUBLIC_URL +'/minorarcana'}> */}
          <Route exact path="/minorarcana">
            <MinorArcana cards={this.props.cards} />
          </Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps, { fetchCards })(CardsContainer);
