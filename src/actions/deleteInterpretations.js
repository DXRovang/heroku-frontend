export const deleteInterpretations = (drawID, interpretationID) =>{
  return (dispatch) => {
    fetch(`https://tarot2023-backend.herokuapp.com/draws/${drawID}/interpretations/${interpretationID}`, {
      // fetch(`http://127.0.0.1:3000/draws/${drawID}/interpretations/${interpretationID}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(draw=> dispatch({
      type: "DELETE_INTERPRETATION", 
      payload: draw
    }))
  }
}