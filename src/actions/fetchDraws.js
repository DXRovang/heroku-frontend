export function fetchDraws(){
  return (dispatch) => {
    fetch('https://tarot2023-backend.herokuapp.com/draws')
    // fetch('http://127.0.0.1:3000/draws')
    .then(r=>r.json())
    .then(draws=> dispatch({
      type: "FETCH_DRAWS", 
      payload: draws
    }))
  }
}
