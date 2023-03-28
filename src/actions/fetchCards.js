export function fetchCards(){
  return (dispatch) => {
    fetch('http://127.0.0.1:3000/cards')
    .then(r=>r.json())
    .then(cards=> 
      // console.log(cards)
      dispatch({
      type: "FETCH_CARDS", 
      payload: cards.sort((a,b)=>a.id - b.id)
    })
    
    
    )
  }
}