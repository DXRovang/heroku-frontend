import React from 'react'
import { connect } from 'react-redux'
import { deleteInterpretations } from '../actions/deleteInterpretations'
import Button from './Button'

class Interpretations extends React.Component{

  state = {
    liked: 0
  }

  handleDelete = (interpretation) =>{
  this.props.deleteInterpretations(interpretation.draw_id, interpretation.id)
    }
 
  render(){
  
  return (
    
    <div className="int blurb">
      Interpretation(s): 
      {this.props.draw ? this.props.draw.interpretations.map(interpretation => 
        <div key={interpretation.id}>
          
          <button onClick={() => this.handleDelete(interpretation)}>x</button> {interpretation.body}
          <Button />
          </div>) : null}<br></br>
    </div>
  )
}}

export default connect(null,{ deleteInterpretations })(Interpretations)
