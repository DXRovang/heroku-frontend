
import React from 'react'
import {Route, Routes, useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import DrawForm from '../components/DrawForm'
import DrawList from '../components/DrawList'
import Draw from '../components/Draw'
import { fetchDraws } from '../actions/fetchDraws'
import { fetchCards } from '../actions/fetchCards'

const DrawWrapper = ({ cards, draws, ...routerProps }) => {
  const {id} = useParams();
  return <Draw cards={cards} draws={draws} id={id} {...routerProps} />
}

class DrawsContainer extends React.Component{

componentDidMount(){
  this.props.fetchDraws()
  this.props.fetchCards()
}

    render(){
      return(
        <>
          <Routes>
            <Route path='/draws/new' element={
                <DrawForm cards={this.props.cards} draws={this.props.draws} />} /> 
            <Route exact path='/draws' element={ 
                <DrawList draws={this.props.draws} />} />
            <Route path='/draws/:id' element={
              <DrawWrapper 
                cards={this.props.cards} 
                draws={this.props.draws} 
              />
          } />
          </Routes>
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