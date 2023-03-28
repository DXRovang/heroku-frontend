
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import tarotb from '../assets/tarotb.jpg'

class DrawList extends React.Component{
state = {
    layout: "",
    card_ids: [],
    orientations: []
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    if(this.state.layout == "" || this.state.layout == "All Spreads"){
      return(
        <Container>
          <Row>
            <Col sm="4">
              <div className="blurb left drawlist">
                <p>Welcome!</p>
                <p>This page is intended to aid <br></br>in the study of Tarot Divination.</p>
                <p>You're welcome to browse our <br></br>previous draws and add your own <br></br>thoughts, 
                  or create a brand new draw <br></br>and be the first to offer your <br></br>interpretation!</p>
                <p>We hope you enjoy the site.</p>
              </div>
            </Col>
            <Col sm="auto">
              <img className="first-card"src={tarotb}/>
            </Col>
            <Col sm="4">
              <div className='themed-container'>
                <form className=" list right option drawlist" onSubmit={e => this.handleSumbit(e)}>
                  <select onChange={this.handleChange} name="layout" value={this.state.layout}>
                    <option >All Spreads</option>
                    <option >One-Card</option>
                    <option >Three-Cards</option>
                    <option >Five-Cards</option>
                    <option >Celtic Cross</option>
                  </select>
                </form><br></br>
                <div className="list">{this.props.draws.draws ? this.props.draws.draws.map(draw => 
                  <div key={draw.id}><Link className="list right" to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>) : null}
                </div>
              </div>
            </Col>
        </Row>
      </Container>
      )
    }else{
      const fullList = this.props.draws.draws
      const filterList = fullList.filter(draw => draw.layout == this.state.layout)
      return(    
      <Container>
        <Row>
          <Col sm="4">
            <div className="blurb left drawlist">
              <p>Welcome!</p>
              <p>This page is intended to aid <br></br>in the study of Tarot Divination.</p>
              <p>You're welcome to browse our <br></br>previous draws and add your own <br></br>thoughts, 
                or create a brand new draw <br></br>and be the first to offer your <br></br>interpretation!</p>
              <p>We hope you enjoy the site.</p>
          </div>
          </Col>
          <Col sm="auto">
            <img className="first-card"src={tarotb}/>
          </Col>
          <Col sm="4">
            <form className="drawlist right list option" onSubmit={e => this.handleSumbit(e)}>
              <select onChange={this.handleChange} name="layout" value={this.state.layout}>
                <option >All Spreads</option>
                <option >One-Card</option>
                <option >Three-Cards</option>
                <option >Five-Cards</option>
                <option >Celtic Cross</option>
              </select>
            </form><br></br>
            <div className="right list" >{this.props.draws.draws ? filterList.map(draw => 
              <div key={draw.id}><Link className="list" to={`/draws/${draw.id}`}>{draw.layout}: {draw.created_at.slice(0,10)}</Link></div>) : null}
            </div>
          </Col>
        </Row>
      </Container>
      )
    }
  }
}

export default DrawList

