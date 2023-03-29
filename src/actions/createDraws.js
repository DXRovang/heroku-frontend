export const createDraws = (formData) =>{
  return (dispatch) => {
    fetch('https://tarot2023-backend.herokuapp.com/draws', {
      // fetch('http://127.0.0.1:3000/draws', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(draws=> dispatch({
      type: "CREATE_DRAW", 
      payload: draws
    }))
  }
}