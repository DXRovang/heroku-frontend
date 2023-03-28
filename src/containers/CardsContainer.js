import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route 
          exact path="/cards" 
          element={<CardList cards={this.props.cards} />}>
          </Route>
          <Route
            path="/cards/:id"
            render={(routerProps) => (
              <Card {...routerProps} cards={this.props.cards} />
            )}
          />
          <Route 
          exact path="/majorarcana"
          element={<MajorArcana cards={this.props.cards} />}
          >
            
          </Route>
          <Route 
          exact path="/minorarcana"
          element={<MinorArcana cards={this.props.cards} />}
          >
            
          </Route>
        </Routes>
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
