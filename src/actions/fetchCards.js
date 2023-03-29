export function fetchCards(){
  return (dispatch) => {
    fetch('https://tarot2023-backend.herokuapp.com/cards')
    // fetch('http://127.0.0.1:3000/cards')
    .then(r=>r.json())
    .then(cards=> 
      dispatch({
      type: "FETCH_CARDS", 
      payload: cards.sort((a,b)=>a.id - b.id)
    })
    
    
    )
  }
}