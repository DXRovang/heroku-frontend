import React from 'react'
import { connect } from 'react-redux'
import { createInterpretations } from '../actions/createInterpretations'

class InterpretationForm extends React.Component{

  state = {
    body: "",
  }
  
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.createInterpretations(this.state, this.props.draw.id)
    this.setState({
      body: ""
    })
  
  }

  render() {
    return(
      <div className="Field">
        <form onSubmit={e => this.handleSubmit(e)}>
          <textarea onChange={this.handleChange} 
          type='text' name="body" value={this.state.body}/><br></br>
          {/* name should match what's in the state */}
          <button>Submit Interpretation</button>
        </form>
  {/* onSubmit and onChange are identical, the event isn't necessary */}
      </div>
    )
  }
}

export default connect(null,{createInterpretations})(InterpretationForm)