import React from 'react'

const Card = props =>{
  debugger
  let card = props.cards[props.match.params.id]
  
  return(
    <div className="single">
    {card ? <img className="card left size"src={card.image}/> : null}<br></br>
    <div className="left">
    <div>Description: {card ? card.desc : null}</div><br></br>
    <div>Meaning(up): {card ? card.meaning_up : null}</div><br></br>
    <div>Meaning(rev): {card ? card.meaning_rev : null}</div><br></br>
    <div>Summary: {card ? card.summary : null}</div></div>
  </div>
  )
}

export default Card