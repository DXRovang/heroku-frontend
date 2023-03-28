import React from 'react'
import Interpretations from '../components/Interpretations'
import InterpretationsForm from '../components/InterpretationForm'

class InterpretationsContainer extends React.Component{
  render(){
    return(
      <div>
        <Interpretations draw={this.props.draw}/>
        <InterpretationsForm draw={this.props.draw}/>
      </div>
    )
  }
}

export default InterpretationsContainer

