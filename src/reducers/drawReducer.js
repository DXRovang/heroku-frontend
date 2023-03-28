export default function drawReducer(state = {draws: []}, action){
  // debugger
  switch(action.type){
    case "FETCH_DRAWS":
      return {draws: action.payload}
    case "CREATE_DRAW":
      return {...state, draws: [...state.draws, action.payload]}
    case "CREATE_INTERPRETATIONS":
          return {...state, draws: state.draws.map(draw => {
            if(draw.id === action.payload.id){
              return action.payload
            }else{
              return draw
            }
          })}
    case "DELETE_INTERPRETATION":
      return {...state, draws: state.draws.map(draw => {
        if(draw.id === action.payload.id){
          return action.payload
        }else{
          return draw
        }
      })}
    default:
        return state
  }
}