
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import DrawForm from '../components/DrawForm'
import DrawList from '../components/DrawList'
import Draw from '../components/Draw'
import { fetchDraws } from '../actions/fetchDraws'
import { fetchCards } from '../actions/fetchCards'


class DrawsContainer extends React.Component{

componentDidMount(){
  this.props.fetchDraws()
  this.props.fetchCards()
}

    render(){
      return(
        <>
          <Switch>
            <Route path='/draws/new' render={(routerProps) => 
                <DrawForm {...routerProps} cards={this.props.cards} draws={this.props.draws} />} /> 
            <Route exact path='/draws' render={(routerProps) => 
                <DrawList {...routerProps} draws={this.props.draws} />} />
            <Route path='/draws/:id' render={(routerProps) => 
              <>
                <Draw {...routerProps} cards={this.props.cards} draws={this.props.draws} />
              </> 
            }/>
          </Switch>
        </>
      )
    }
}

const mapStateToProps = (state) =>{
  return {
    draws: state.draws,
    cards: state.cards
  }
}

export default connect(mapStateToProps, {fetchDraws, fetchCards})(DrawsContainer)